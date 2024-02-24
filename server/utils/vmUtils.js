import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const vm = require('node:vm');
const mongoose = require('mongoose');

//turn schema from json to schema string
function generateSchemaCode(schema, modelName) {
    let schemaCode = 'const schema = new mongoose.Schema({\n';

    Object.keys(schema).forEach((key) => {
        const fieldDefinition = schema[key];
        schemaCode += `  ${key}: ${JSON.stringify(fieldDefinition)},\n`;
    });

    schemaCode += '});\n';
    schemaCode += `Model = mongoose.model(${modelName}, schema);\n`;
    schemaCode += 'module.exports = Model;\n';

    return schemaCode;
}

//run code in vm with detailed error handling
async function createAndRunInVm(code, context) {
    try {
        vm.createContext(context);
        await vm.runInContext(code, context);
    } catch (err) {
        if (err instanceof SyntaxError) {
            console.error('Syntax Error:', err.message);
        } else if (err instanceof ReferenceError) {
            console.error('Reference Error:', err.message);
        } else if (err instanceof TypeError) {
            console.error('Type Error:', err.message);
        } else if (err instanceof EvalError) {
            console.error('Eval Error:', err.message);
        } else if (err instanceof RangeError) {
            console.error('Range Error:', err.message);
        } else {
            console.error('Error:', err.message);
        }
    }
}


// take schema, endpoint code, mongo uri and extra params and run in a vm to output 
async function run(schema, code, uri, params){
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected to db")

        const context = {
            mongoose: mongoose,
            Model: null,
            console: console
        };

        const schemaCode = generateSchemaCode(schema, params.modelName);

        createAndRunInVm(schemaCode, context);
        
        const context_2 = {
            mongoose: mongoose,
            uri: uri,
            Model: context.Model,
            answer: null,
            console: console,
            params: params
        }

        code = code.replace(/(const|let|var) answer/g, "answer");

        let code2=`
        async function connect(){
            console.log(Model)
            try{
            ${code}
            }catch(err){
                console.log(err)
            }
            finally{
                console.log("closing connection")
                if(mongoose.connection.readyState === 1){
                var keys = Object.keys(mongoose.connection.models)
                mongoose.deleteModel(keys[keys.length-1]);
                await mongoose.connection.close();
            }
        }
        }
        connect();`

        console.log(code2)
        
        createAndRunInVm(code2, context_2);

        return context_2.answer 

        } catch(err) {
            console.log(err);
            return null;
        }
}

export {run};