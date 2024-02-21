//we are going to need three different routes for this file
//1. create the schema from the csv file, upload the data into the database with the schema, create API and Database Objects
//2. create the basic CRUD endpoints for an API 
//3. custom endpoints for the API based on user query

//think of a way to break this down
//reuse code from the old project
//make complex functions in the utils folder


// read in a csv array and then feed 3 rows into langchain and then make a mongodb schema out of that

import express from 'express';
import { getSchemaFromCSV, readCSV } from '../utils/schemaUtils.js';
import { run } from "../utils/vmUtils.js";
import { config } from 'dotenv';
import OpenAI from 'openai';

config();

const { OPENAI_API_KEY, MONGO_URI } = process.env;

const openai = new OpenAI({apiKey: OPENAI_API_KEY});

const app = express();
const port = 8080;

app.use(express.json());

// Read first 3 rows of csv, create mongo schema using langchain, and then run on vm
app.post('/', async (req, res) => {
  try {
    const csvData = req.body;
    const schema = await getSchemaFromCSV(csvData);
    res.send(schema); //TESTED UP TO THIS POINT

    //VM CODE TO TEST

    // let answer = await run(schema, code, MONGO_URI, params);
    // if (!answer) {
    //   return res.status(500).send({ error: 'Internal server error' });
    // }
    // return res.status(200).send({ answer: answer });
  } catch (error) {
    console.error('Error generating schema:', error);
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;