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
  name: "endpointcreator",
  description: "Given a description of API behavior, endpoint name endpoint slug, schema of the data, and examples of the data, create an API Object with full functionality. You can only use the data fields from the schema in the code of the API when making queries. The schema is structured by {field_name : field_type}. ",
  parameters: {
    type: "object",
    properties: {
      endpoint_name: {
        type: "string",
        description: "The Name of the API Endpoint",
      },
      method : {
        type: "string",
        description: "The HTTP Method of the API Endpoint. Can be GET, POST, PUT, DELETE, PATCH",
      },

      endpoint_slug: {
        type: "string",
        description: "The slug of the endpoint. This is the part of the URL that comes after the domain name. You will be provided with the endpoint slug. All params will be passed through the body of the request.",
      },

      description: {
        type: "string",
        description: "The description of the API Endpoint and what it does.",
      },
      response_type: {
        type: "string",
        description: "The type of the response. Can be JSON, HTML, or XML",
      },
      tags : {
        type: "array",
        items: {
            type: "string",
        },
        description: "Array of tags for the endpoint",
      },
      code: {
        type: "string",
        description: "The NodeJS code for the inner logic of the API. This only includes the Mongoose Query, you can assume the Express wrapper is already made. You cannot use the response or requests objects. Refer to parameters as part of the params JSON. The final output is saved as the variable called answer, which already exists, so don't redeclare. You may assume the code will be inside of an async function, so you can use the await keyword. Refer to the Mongoose model as Model. Only use fields from the schema to create the API. Add error handling, so that answer is set to a descriptive message if the query returns no results or has an error.",
      },
      params:{
        type:"array",
        items: {
            type: "object",
            properties :{
                name: {
                    type:"string",
                    description:"Name of the parameter. Must match exactly the name of the parameter in the code."
                },
                type:{
                    type:"string",
                    description:"The type of the parameter. Can be string, number, boolean, array or object."
                },
                 description:{
                    type:"string",
                    description:"The description of the parameter with examples of what it should look like. Include scale if it is a number."
                }
                
            }
         },
        description: "The array of the parameters names and types that are used in the API. Only include parameters the code needs to run. If no parameters are needed, leave as an empty array.",
      }
    },
    required: ["endpoint_name", "endpoint_slug", "code", "params", "response_type", "tags", "description", "method"]
  },
};

// Instantiate the ChatOpenAI class
const model = new ChatOpenAI({ modelName: gpt_model, maxTokens:5000, temperature:0});

// Create a new runnable, bind the function to the model, and pipe the output through parser
const runnable = model
  .bind({
    functions: [extractionFunctionSchema],
    function_call: { name: "endpointcreator" },
  })
  .pipe(parser);

//function to create an api for each api idea
async function createOneEndpoint(endpoint_name, endpoint_slug, endpoint_description, schema, firstThree){
    try{
      schema = JSON.stringify(schema);
const result = await runnable.invoke([
  new HumanMessage(`Create an API with this endpoint name: ${endpoint_name}, this endpoint slug: ${endpoint_slug} from this API description: 
  ${endpoint_description}
    This is the schema of the data. The schema is the structure of the data that the API will be working with and you can only use the schema fields to create the API. 
    ${schema}
    These are the first three examples of the data:
    ${firstThree}


    `)

    
]
);
return result

    } catch(e){
        console.log("error hit")
        return null;
    }

}



export default createOneEndpoint