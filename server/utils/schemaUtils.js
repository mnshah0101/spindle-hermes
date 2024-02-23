import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const OpenAI = require("@langchain/openai").OpenAI;
const PromptTemplate = require("@langchain/core/prompts").PromptTemplate;
const JsonOutputParser = require("@langchain/core/output_parsers").JsonOutputParser;
const RunnableSequence = require("@langchain/core/runnables").RunnableSequence;

async function getSchemaFromCSV(csvData) {
  const data = await readCSV(csvData);
  const schema = await generateSchema(data);
  return schema;
}

//Read in first 3 rows of csv, typecast numbers, and stringify whole thing
function readCSV(csvData) {
  if (!Array.isArray(csvData)) {
      return "CSV data is not in the expected format.";
  }
  
  const firstThreeRows = csvData.slice(0, 3);

  const typecastedRows = firstThreeRows.map(row => row.map(value => {
      if (!isNaN(value) && !isNaN(parseFloat(value))) {
          if (Number.isInteger(parseFloat(value))) {
              return parseInt(value); 
          } else {
              return parseFloat(value); 
          }
      } else {
          return value;
      }
  }));

  const stringifiedRows = JSON.stringify(typecastedRows);

  return stringifiedRows;
}

//generates schema from stringified csv sample
async function generateSchema(data) {
  const parser = new JsonOutputParser();
  
  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate("Create a mongoDB schema from this csv sample. Here is the csv sample: {data}. Do not create the schema objects for the examples, but for each field provide the type. give it to me in key value pairs of field: type. \n{format_instructions}"),
    new OpenAI({ temperature: 0.0, maxTokens: 3000, modelName: "gpt-3.5-turbo-1106" }),
    parser,
  ]);

  const response = await chain.invoke({ 
    data: data,
    format_instructions: "Return JSON output." 
  });
  console.log(response);
  return response;
}

export { getSchemaFromCSV, readCSV };