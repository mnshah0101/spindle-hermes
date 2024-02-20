const { OpenAI, PromptTemplate, JsonOutputFunctionsParser, RunnableSequence, } = require("@langchain/openai");

// Overarching funciton to get MongoDB schema from CSV
async function getSchemaFromCSV(csvData) {
  const data = await readCSV(csvData);
  const schema = await generateSchema(data);
  return schema;
}

// Read the first 3 rows of CSV data
function readCSV(csvData) {
  return new Promise((resolve, reject) => {
    let data = '';
    const readableStream = require('stream').Readable.from(csvData);
    readableStream.pipe(csv())
      .on('data', (row) => {
        data += JSON.stringify(row) + '\n';
      })
      .on('end', () => {
        resolve(data);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

// Generate mongo schema using Langchain
async function generateSchema(data) {
  const parser = new JsonOutputFunctionsParser();
  
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

module.exports = { getSchemaFromCSV };