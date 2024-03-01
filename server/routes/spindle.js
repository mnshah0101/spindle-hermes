
//module imports
import express from 'express';
import { getSchemaFromCSV } from '../utils/schemaUtils.js';
import { config } from 'dotenv';
import { connectToMongoDB } from '../utils/dbUtils.js';
import DatabaseModel from '../models/Database.js';
import processName from '../utils/processName.js';
import processDBName from '../utils/processDatabaseName.js';
import UserModel from '../models/User.js';
import APIModel from '../models/API.js';
import EndpointModel from '../models/Endpoint.js';
import getIdeas from '../utils/getIdeas.js';
import createEndpoints from '../utils/createEndpoint.js';
import image_query from '../utils/getImage.js';
import mongoose from 'mongoose';
import API from '../models/API.js';
import createOneEndpoint from '../utils/createOneEndpoint.js';
import createCode from '../utils/createCode.js';
import cleanString from '../utils/cleanString.js';


config();
const { MONGO_URI } = process.env;
const router = express.Router();


//function to remove spaces and special characters from a string

function removeSpaces(str) {
  return str.replace(/\s+/g, '');
}


router.post('/createDatabase', async (req, res) => {
  try {
    const returnObject = {'status': 'fail', 'message': 'Error in connecting to MongoDB', 'schema': '', 'database_id': ''};
    const csvData = req.body.csvData;
    //check missing
    if(!csvData) {
      return res.status(400).send('Missing CSV data');
    }
    const user_id = req.body.user_id;
    if(!user_id) {
      return res.status(400).send('Missing user ID');
    }
    let api_name = req.body.api_name;
    if(!api_name) {
      return res.status(400).send('Missing API name');
    }
    const databaseName = processDBName(api_name);

    let collection_name = req.body.collection_name;
    if(!collection_name) {
      return res.status(400).send('Missing collection name');
    }

    collection_name = processName(collection_name);
    const description = req.body.description;
    if(!description) {
      return res.status(400).send('Missing description');
    }

    //connect to MongoDB
    const connect = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    if(!connect) {
        return res.status(500).send('Error connecting to MongoDB');
    }


  
    const databases = await DatabaseModel.find({database_name: databaseName});
    if(databases.length > 0) {
        return res.status(400).send('Database name already exists '+ databaseName);
    }
                

    if(!csvData || !user_id || !databaseName  || !collection_name || !description) {
        return res.status(400).send('Missing required fields');
    }
    const schema = await getSchemaFromCSV(csvData);
    console.log('schema:', schema);
    if (!schema) {
      return res.status(400).send('Invalid CSV data');
    }

    const out = connectToMongoDB(schema, MONGO_URI, databaseName, collection_name, csvData);
    const user = await UserModel.findById(user_id);
    if(!user) {
        return res.status(400).send('Invalid user');
    }
    const database = new DatabaseModel({
        database_name: databaseName,
        collection_name: collection_name,
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


router.post("/createAPIs", async (req, res) => {

    
    const api_name = req.body.api_name;

    let api_exists = await APIModel.findOne({name: api_name});
    if(api_exists) {
      return res.status(400).send('API name already exists');
    }
    //check if api_name exists
    if(!api_name) {
        return res.status(400).send('Missing API name');
    }
    const user_id = req.body.user_id;
    if(!user_id) {
        return res.status(400).send('Missing user ID');
    }
    const description = req.body.description;
    if(!description) {
        return res.status(400).send('Missing description');
    }
    let endpoint_slug = req.body.endpoint_slug;
    if(!endpoint_slug) {
        return res.status(400).send('Missing endpoint slug');
    }

     endpoint_slug = processName(req.body.endpoint_slug);
  
    const database_id = req.body.database_id;
    if(!database_id) {
        return res.status(400).send('Missing database ID');
    }
    const schema = req.body.schema;
    if(!schema) {
        return res.status(400).send('Missing schema');
    }

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
    const ideas = await getIdeas(schema);
    let endpoints = await createEndpoints(ideas, schema);

    const curDate = new Date();
    const image_url = await image_query("Create an image that has to do with: " + api_name+ ". If it is unsafe or inappropriate, just create a general image of an API.");

        //check to make sure api with api name does not exist
     api_exists = await APIModel.findOne({name: api_name});
    if(api_exists) {
      return res.status(400).send('API name already exists');
    }

    //check to make sure api with api_slug does not exist
    const api_slug_exists = await APIModel.findOne({api_slug: full_endpoint_slug});
    if(api_slug_exists) {
      return res.status(400).send('API slug already exists');
    }

    const newAPI = {
      name: api_name,
      description: description,
      api_keys: ['a'], 
      api_slug: removeSpaces(full_endpoint_slug),
      user: user,
      mongo_uri: MONGO_URI,
      mongo_schema: schema,
      database_name: database,
      image: image_url, 
      status: "active",
      created_at: curDate

    }


    //check to make s
    
    let api =  new APIModel(newAPI);


    let new_api = await api.save()

    
 
      const endpointObjects = [];

      endpoints = endpoints.filter((v,i,a)=>a.findIndex(t=>(t.endpoint_slug === v.endpoint_slug))===i)


      for (let endpoint of endpoints) {
  
        const newEndpoint = {
          endpoint_name: endpoint.endpoint_name, 
          endpoint_slug: removeSpaces(`/${username}${endpoint.endpoint_slug}`),
          user: user,
          method: endpoint.method,
          api: api._id,
          database: database,
          description: endpoint.description,
          parameters: endpoint.params, 
          response_type: endpoint.response_type,
          code: '', 
          tags: endpoint.tags, 
          api_keys : [],
          full_endpoint: removeSpaces(`/${username}${endpoint.endpoint_slug}`)
        };

        let code = await createCode(newEndpoint, schema)
        newEndpoint.code = code['code'];



        let saved_endpoint = new EndpointModel(newEndpoint);

        


        let new_endpoint = await saved_endpoint.save();
        endpointObjects.push(new_endpoint);
      };

      //get the API 
      let myCreatedAPI = await API.findById(new_api._id);

      for(let endpoint of endpointObjects){

      myCreatedAPI.endpoints.push(endpoint);

      }

      console.log('created api:')

      await myCreatedAPI.save()

      //update database to ahve image_url

      const database_new = await DatabaseModel.findById(database_id);
        database_new.image = image_url;
        await database_new.save();
        res.send(myCreatedAPI);
});





router.post('/createAPI', async (req, res) => {
  const endpoint_name = req.body.endpoint_name;
  //check if endpoint_name exists
  if(!endpoint_name) {
    return res.status(400).send('Missing endpoint name');
  }



  let endpoint_slug = req.body.endpoint_slug;
  if(!endpoint_slug) {
    return res.status(400).send('Missing endpoint slug');
  }
  endpoint_slug = processName(endpoint_slug);

  const user_id = req.body.user_id;
  if(!user_id) {
    return res.status(400).send('Missing user ID');
  }


  const endpoint_description = req.body.endpoint_description;
  if(!endpoint_description) {
    return res.status(400).send('Missing endpoint description');
  }
  const api_id = req.body.api_id;
  if(!api_id) {
    return res.status(400).send('Missing API ID');
  }


  //get schema from api object
  const api = await APIModel.findById(api_id);

  if(!api) {
    return res.status(400).send('Invalid API');
  }



  const schema = api.mongo_schema;

  if(!endpoint_name || !endpoint_slug || !user_id || !endpoint_description || !api_id) {
    return res.status(400).send('Missing required fields');
  }

  const user = await UserModel.findById(user_id);
  if(!user) {
    return res.status(400).send('Invalid user');
  }

  //check if endpoint_slug already exists
  const username = user.username;

  const full_endpoint_slug = `/${username}/${endpoint_slug}`;
  let endpoint = await EndpointModel.findOne({endpoint_slug: full_endpoint_slug});
  if(endpoint) {
    return res.status(400).send('Endpoint slug already exists');
  }



  const create_endpoint = await createOneEndpoint(endpoint_name, full_endpoint_slug, endpoint_description, schema);
  console.log('create_endpoint:', create_endpoint);



  if(!create_endpoint) {
    return res.status(500).send('Error creating endpoint');
  }

  const newEndpoint = {
    endpoint_name: endpoint_name,
    endpoint_slug: full_endpoint_slug,
    user: user,
    method: create_endpoint.method,
    api: api_id,
    database: api.database_name,
    description: create_endpoint.description,
    parameters: create_endpoint.params,
    code: create_endpoint.code,
    tags: create_endpoint.tags,
    full_endpoint: full_endpoint_slug
  };

  const endpointObject = new EndpointModel(newEndpoint);

  try {
    const savedEndpoint = await endpointObject.save();

    api.endpoints.push(savedEndpoint);
    await api.save();


    res.send(savedEndpoint);
  }
  catch(error) {
    console.error('Error saving endpoint:', error);
    res.status(500).send('Internal server error');
  }

}
);














export default router;