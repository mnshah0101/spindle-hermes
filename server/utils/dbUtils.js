import { MongoClient } from "mongodb";

// Upload all the csv data in schema format to MongoDB
async function connectToMongoDB(schema, uri, dbName, collectionName, csvData) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const csvJSON = parseCSV(schema, csvData);

    const result = await collection.insertMany(csvJSON);
    console.log(`${result.insertedCount} documents inserted`);
    return 'success';

  } catch (error) {
    console.error("Error:", error);
    return 'fail';
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

// Function to parse CSV data into the schema format
function parseCSV(schema, csvData) {
  if (!Array.isArray(csvData) || csvData.length < 2 || !Array.isArray(csvData[0])) {
    console.error("Error: CSV data is not in the expected format.");
    return [];
}
  
  const result = [];
  const keys = Object.keys(schema);
  
  for (let rowIndex = 1; rowIndex < csvData.length; rowIndex++) {
      const row = csvData[rowIndex];
      if (row.length !== keys.length) {
        continue;
      }
      const obj = {};
      for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const type = schema[key];
          
          let value = row[i];
          if (value === "") {
              value = "";
          } else if (type === "Number") {
              if (/^-?\d+$/.test(value)) {
                  value = parseInt(value);
              } else if (/^-?\d+(\.\d+)?$/.test(value)) {
                  value = parseFloat(value);
              } else {
                  value = null;
              }
          }
          
          obj[key] = value;
      }
      result.push(obj);
  }
  console.log(result);
  return result;
}

export { connectToMongoDB, parseCSV };
