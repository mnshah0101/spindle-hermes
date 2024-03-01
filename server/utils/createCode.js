import { ChatOpenAI } from "@langchain/openai";
import { JsonOutputFunctionsParser } from "langchain/output_parsers";
import { HumanMessage } from "@langchain/core/messages";

import dotenv from 'dotenv'

dotenv.config()

const gpt_model = process.env.GPT_MODEL

// Instantiate the parser
const parser = new JsonOutputFunctionsParser();

// Define the function schema
const extractionFunctionSchema = {
    name: "codecreator",
    description: "Creates code for an GET API endpoint based strictly on the Mongoose Schema", 
    parameters: {
        type: "object",
        properties: {
            code: {
                type: "string",
                description: "The NodeJS code for the inner logic of the API. This only includes the Mongoose Query, you can assume the Express wrapper is already made. You cannot use the response or requests objects. Refer to schema when using Model.find to find objects, the schema is a JSON. The final output is saved as the variable called answer, which already exists, so don't redeclare. You may assume the code will be inside of an async function, so you can use the await keyword. Refer to the Mongoose model as Model."
            },
        },
        required: ["code"]
    },
};

// Instantiate the ChatOpenAI class
const model = new ChatOpenAI({ modelName: gpt_model, maxTokens:2500, temperature:1.07});

// Create a new runnable, bind the function to the model, and pipe the output through parser
const runnable = model
  .bind({
    functions: [extractionFunctionSchema],
    function_call: { name: "codecreator" },
  })
  .pipe(parser);

//function to create an api for each api idea
async function createCode(endpoint, schema) {
    try{
        const result = await runnable.invoke([
        new HumanMessage(`Create a code objectcode for a GET API using the provided information:
            api_name: ${endpoint.api.api_name},
            endpoint_name: ${endpoint.endpoint_name}, 
            endpoint.description ${endpoint.description},
            schema: ${schema},
            params: ${endpoint.parameters}
            `)   
        ]);
        console.log(`code created for endpoint: ${endpoint.endpoint_name}`);
        return result;
    } catch(e){
        console.log(e)
        return null;
    }
}

export default createCode;



// import { OpenAI } from "@langchain/openai";
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const RunnableSequence = require("@langchain/core/runnables").RunnableSequence;
// const PromptTemplate = require("@langchain/core/prompts").PromptTemplate;

// const dotenv= require('dotenv')

// dotenv.config();

// //creates code for endpoint, takes in endpoint model object, schema, and params
// const createCode = async (endpoint, schema) => {
//     const codeChain = RunnableSequence.from([
//         PromptTemplate.fromTemplate(`Generate NodeJS code for the inner logic of an get request for an API. Assume that the Express wrapper is already set up. You don't have to write the app.get syntax. Only write the code for what goes inside. 
//         The API is {api_name}, the endpoint is {endpoint_name}, and here is a short description of its purpose: {description}. The schema consists of the fields: {schema}. In the code that you provide, if you are writing code for app.get, please only use the fields specified in the schema use the exact same casing as the schema. Some 
//         params that might be needed are {params}, Save the final output as the variable 'answer', which already exists. Assume the code will be inside of an async function, so you can use the await keyword. Reference the Mongoose model as 'Model'. Only give me code do not reply with any words.`),
//         new OpenAI({ temperature: 0, maxTokens:6000, modelName: "gpt-4"})
//     ]);

//     console.log(`creating code for endpoint: ${endpoint.endpoint_name}`);
    
//     let response = await codeChain.invoke({
//         method: endpoint.method,
//         api_name: endpoint.api.name,
//         endpoint_name: endpoint.endpoint_name,
//         description: endpoint.description,
//         schema: schema,
//         params: endpoint.parameters,
//       });
    
//       return response
// };

// export default createCode;