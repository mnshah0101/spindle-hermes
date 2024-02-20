//we are going to need three different routes for this file
//1. create the schema from the csv file, upload the data into the database with the schema, create API and Database Objects
//2. create the basic CRUD endpoints for an API 
//3. custom endpoints for the API based on user query

//think of a way to break this down
//reuse code from the old project
//make complex functions in the utils folder


// read in a csv array and then feed 3 rows into langchain and then make a mongodb schema out of that

const express = require('express');
const { getSchemaFromCSV } = require('../utils/getSchemaFromCSV');

const app = express();

app.use(express.json());

// Read first 3 rows of csv and then create mongo schema using langchain
app.post('/', async (req, res) => {
  try {
    const csvData = req.body;
    const schema = await getSchemaFromCSV(csvData);
    res.send(schema);
  } catch (error) {
    console.error('Error generating schema:', error);
    res.status(500).send('Internal server error');
  }
});

module.exports = app;
