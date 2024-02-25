
//module imports
import express from 'express';
import { getSchemaFromCSV } from '../utils/schemaUtils.js';
import { config } from 'dotenv';
import OpenAI from 'openai';
import { connectToMongoDB } from '../utils/dbUtils.js';
import DatabaseModel from '../models/Database.js';
import processName from '../utils/processName.js';
import processDBName from '../utils/processDatabaseName.js';
import UserModel from '../models/User.js';
import APIModel from '../models/API.js';
import EndpointModel from '../models/Endpoint.js';
import getIdeas from '../utils/getIdeas.js';
import createEndpoints from '../utils/createEndpoint.js';



config();
const { MONGO_URI } = process.env;
const router = express.Router();



router.post('/createDatabase', async (req, res) => {
  try {
    const returnObject = {'status': 'fail', 'message': 'Error in connecting to MongoDB', 'schema': '', 'database_id': ''};
    const csvData = req.body.csvData;
    const user_id = req.body.user_id;
    const api_name = req.body.api_name;
    if(!api_name){
        return res.status(400).send('Missing api name');
    }
    const databaseName = processDBName(api_name);
    const collectionName = processName(req.body.collection_name);
    const description = req.body.description;
    const databases = await DatabaseModel.find({database_name: databaseName});
    if(databases.length > 0) {
        return res.status(400).send('Database name already exists');
    }
    if(!csvData || !user_id || !databaseName  || !collectionName || !description) {
        return res.status(400).send('Missing required fields');
    }
    const schema = await getSchemaFromCSV(csvData);
    if (!schema) {
      return res.status(400).send('Invalid CSV data');
    }
    const out = connectToMongoDB(schema, MONGO_URI, databaseName, collectionName, csvData);
    const user = await UserModel.findById(user_id);
    if(!user) {
        return res.status(400).send('Invalid user');
    }
    const database = new DatabaseModel({
        database_name: databaseName,
        collection_name: collectionName,
        user: user_id,
                database_description: description,
        mongo_uri: MONGO_URI
        });
        try{
        const uploadedDatabase = await database.save();
         returnObject.status = "success";
        returnObject.message = "Database created successfully.";
        returnObject.schema = schema;
        returnObject.database_id = uploadedDatabase._id;
        res.status(200).send(returnObject);

        } catch (error) {
            console.error('Error saving database:', error);
            res.status(500).send('Internal server error');
        }

        } catch (error) {

        console.error('Error generating schema:', error);
        res.status(500).send('Internal server error');


        }
});


router.post("/createAPI", async (req, res) => {

    
    const api_name = req.body.api_name;
    const user_id = req.body.user_id;
    const description = req.body.description;
    const endpoint_slug = processName(req.body.endpoint_slug);
    const database_id = req.body.database_id;
    const schema = req.body.schema;

    if(!api_name || !user_id || !description || !endpoint_slug || !database_id) {
        return res.status(400).send('Missing required fields');
    }
    const user = await UserModel.findById(user_id);

    if(!user) {
        return res.status(400).send('Invalid user');
    }

    const username = user.username;

    const full_endpoint_slug = `/${username}/${endpoint_slug}`;

    const database = await DatabaseModel.findById(database_id);
    if(!database) {
        return res.status(400).send('Invalid database');
    }
    const ideas = await getIdeas(full_endpoint_slug, schema);

    const endpoints = await createEndpoints(ideas, schema);

    // make API object without endpoints
    const curDate = new Date();
    const image_url = await image_query("Create an image that has to do with" + api_name);
    const newAPI = {
      name: api_name,
      description: description,
      api_keys: "", // I dont know where to get this
      api_slug: api_slug,
      user: user,
      mongo_uri: MONGO_URI,
      mongo_schema: schema,
      database_name: database,
      endpoints: [],
      image: image_url, //need to create
      status: "active",
      created_at: curDate
    }
    
    let api = await new APIModel(newAPI);

    //Push api objects to mongo
    APIModel.insertOne(api)
      .then(function(docs) {
        console.log('API objects inserted successfully:', docs);
      })
      .catch(function(err) {
        console.error('Error inserting API objects:', err);
      });
    
    // make endpoint objects
      const endpointObjects = [];
      for (let i = 0; i < endpoints.length; i++) {
        const apiObject = apiObjects[i];
        const newEndpoint = {
          endpoint_name: endpoints[i].endpoint_name, 
          endpoint_slug: `/${username}/${endpoints[i].endpoint_slug}`,
          user: user,
          api: apiObject,
          database: database,
          description: description,
          parameters: endpoints[i].params, //i dont know where to get this
          response_type: endpoints[i].response_type,
          code: endpoints[i].code, //i dont know where to get this
          tags: endpoints[i].tags, //i dont know where to get this
          full_endpoint: `/${username}/${endpoints[i].endpoint_slug}`
        };

        let endpoint = await new EndpointModel(newEndpoint);
        endpointObjects.push(endpoint);
      };

      //add endpoints to api object
      for (let endpoint in endpointObjects) {
        api.endpoints.push(endpoint);
      };



    res.send(endpoints);








});



export default router;