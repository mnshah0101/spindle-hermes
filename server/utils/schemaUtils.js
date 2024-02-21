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

//Read in first 3 rows of csv and typecast numbers
function readCSV(csvData) {
  if (!Array.isArray(csvData.csvData)) {
      return "CSV data is not in the expected format.";
  }
  
  const firstThreeRows = csvData.csvData.slice(0, 3);

  const typecastedRows = firstThreeRows.map(row => row.map(value => {
      if (!isNaN(value) && !isNaN(parseFloat(value))) {
          // Check if the value is an integer
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

async function generateSchema(data) {
  const parser = new JsonOutputParser();
  
  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate("Create a mongoDB schema from this csv sample. Here is the csv sample: {data}.\n{format_instructions}"),
    new OpenAI({ temperature: 1.0, maxTokens: 3000, modelName: "gpt-4" }),
    parser,
  ]);

  const response = await chain.invoke({ 
    data: data,
    format_instructions: "Return JSON output." 
  });

  return response;
}

export { getSchemaFromCSV, readCSV };