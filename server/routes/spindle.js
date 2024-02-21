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
const run = require("../utils/vmUtils");
require('dotenv').config();
const OpenAI = require('openai');
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI(OPENAI_API_KEY);

const app = express();

app.use(express.json());

// Read first 3 rows of csv and then create mongo schema using langchain
app.post('/', async (req, res) => {
  try {
    const csvData = req.body;
    const schema = await getSchemaFromCSV(csvData);
    //res.send(schema); test code that creates schema

    let answer = await run(schema, code, MONGO_URI, params);
    if (!answer) {
      return res.status(500).send({ error: 'Internal server error' });
    }
    return res.status(200).send({ answer: answer });
  } catch (error) {
    console.error('Error generating schema:', error);
    res.status(500).send('Internal server error');
  }
});

module.exports = app;
