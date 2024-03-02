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
  description: "Creates API Endpoint Functionality From API Idea, A Schema of the Data, and example data to base the API off of.",
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
        description: "The description of the API Endpoint and what it does. ",
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
      params:{
        type:"array",
        items: {
            type: "object",
            properties :{
                name: {
                    type:"string",
                    description:"Name of the parameter. Must match exactly the name of the parameter in the schema."
                },
                type:{
                    type:"string",
                    description:"The type of the parameter. Can be string, number, boolean, or array."
                },
                 description:{
                    type:"string",
                    description:"The description of the parameter with examples of what it should look like. Include scale if it is a number."
                }
            }
         },
        description: "The array of the parameters that are used in the API. Only include parameters the code needs to run. If no parameters are needed, leave as an empty array.",
      }
    },
    required: ["endpoint_name", "endpoint_slug", "params", "response_type", "tags", "description", "method"]
  },
};

// Instantiate the ChatOpenAI class
const model = new ChatOpenAI({ modelName: gpt_model, maxTokens:2500, temperature:0});

// Create a new runnable, bind the function to the model, and pipe the output through parser
const runnable = model
  .bind({
    functions: [extractionFunctionSchema],
    function_call: { name: "endpointcreator" },
  })
  .pipe(parser);

//function to create an api for each api idea
async function createEndpoint(endpoint, schema, firstThree){
    try{
const result = await runnable.invoke([
  new HumanMessage(`Create an API from this API idea : 
  ${endpoint}
    This is the schema: 
    ${schema}

    These are three example data points:
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

//create array of endpoints for all api ideas
//contains code that will be fed into vm
async function createEndpoints(endpoints, schema, firstThree){
    const returnArr = []

    for(let endpoint of endpoints){
        console.log('creating endpoint for: ', endpoint)
        let new_endpoint = await createEndpoint(endpoint, schema, firstThree)
        if(new_endpoint){
            returnArr.push(new_endpoint)
        }
    }

    return returnArr
}

export default createEndpoints;