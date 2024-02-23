import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const OpenAI = require("@langchain/openai").OpenAI;
const PromptTemplate = require("@langchain/core/prompts").PromptTemplate;
const CommaSeparatedListOutputParser = require("@langchain/core/output_parsers").CommaSeparatedListOutputParser;
const RunnableSequence = require("@langchain/core/runnables").RunnableSequence;
const dotenv= require('dotenv')

dotenv.config()

//Generate ideas for apis from schema
//takes in schema generated by langchain and query by user
const getAPIIdeas = async (schema, query) => {
  // With a `CommaSeparatedListOutputParser`, we can parse a comma separated list.
  const parser = new CommaSeparatedListOutputParser();

  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate("List 10 Read API ideas that a user could implement based on the given MongoDB Schema in a comma separated list. Here are some ideas that the user might want: {query}. This is the schema: {schema}.\n{format_instructions}"),
    new OpenAI({ temperature: 1.0, maxTokens:3000, modelName: "gpt-3.5-turbo-1106" }),
    parser,
  ]);

  console.log("running chain")

  let response = await chain.invoke({
    schema: schema,
    format_instructions: "Return a comma seperated list.",
    query:query
  });

  return response

};

module.exports = getAPIIdeas