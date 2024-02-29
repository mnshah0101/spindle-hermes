import { OpenAI } from "@langchain/openai";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const RunnableSequence = require("@langchain/core/runnables").RunnableSequence;
const PromptTemplate = require("@langchain/core/prompts").PromptTemplate;

const dotenv= require('dotenv')

dotenv.config();

//creates code for endpoint, takes in endpoint model object, schema, and params
const createCode = async (endpoint, schema) => {
    const codeChain = RunnableSequence.from([
        PromptTemplate.fromTemplate(`Generate NodeJS code for the inner logic of an get request for an API. Assume that the Express wrapper is already set up. You don't have to write the app.get syntax. Only write the code for what goes inside. 
        The API is {api_name}, the endpoint is {endpoint_name}, and here is a short description of its purpose: {description}. The schema consists of the fields: {schema}. In the code that you provide, if you are writing code for app.get, please only use the fields specified in the schema use the exact same casing as the schema. Some 
        params that might be needed are {params}, Save the final output as the variable 'answer', which already exists. Assume the code will be inside of an async function, so you can use the await keyword. Reference the Mongoose model as 'Model'. Only give me code do not reply with any words.`),
        new OpenAI({ temperature: 0, maxTokens:6000, modelName: "gpt-4"})
    ]);

    console.log(`creating code for endpoint: ${endpoint.endpoint_name}`);
    
    let response = await codeChain.invoke({
        method: endpoint.method,
        api_name: endpoint.api.name,
        endpoint_name: endpoint.endpoint_name,
        description: endpoint.description,
        schema: schema,
        params: endpoint.parameters,
      });
    
      return response
};

export default createCode;