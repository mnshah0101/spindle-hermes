
import vm from 'vm';
import mongoose from 'mongoose';
import generateSchemaCode from './generateSchemaCode.js';


/**
 * req should have endpoint code
 */

async function run(schema, code, uri, params, dbName, collectionName){
    try {

        let schema_code = generateSchemaCode(schema, collectionName, dbName);


        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });


        const context = {
            mongoose: mongoose,
            uri: uri,
            Model: null,
            answer: null,
            console: console,
            params: params,
            conn: conn
        }


        

        code =code.replace(/(const|let|var) answer/g, "answer");
        code = code.replace(/(const|let|var) Model/g, "Model");
        code = code.replace(/(const|let|var) mongoose/g, "mongoose");
        code = code.replace(/(const|let|var) params/g, "params");

        let code2=`
        async function connect(){
            try{
                await mongoose.connect(uri, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                });
                console.log("connected to database")

                

            ${schema_code}

            ${code} 



            }catch(err){
                console.log('there was an error')
                console.log(err)
            }

            finally{
                console.log("closing connection")
                
        }
        }
        connect();
        `

        console.log(code2)

        vm.createContext(context); // Contextify the object.

        await vm.runInContext(code2, context);

  




      


        return context.answer      
    }
        catch(err){
            console.log(err)
            return null
    }
    }

export default run;