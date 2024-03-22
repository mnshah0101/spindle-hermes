
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
import KeyModel from '../models/Key.js';
import EndpointModel from '../models/Endpoint.js';
import getIdeas from '../utils/getIdeas.js';
import createEndpoints from '../utils/createEndpoint.js';
import createCode from '../utils/createCode.js';
import image_query from '../utils/getImage.js';
import mongoose, { Schema } from 'mongoose';
import API from '../models/API.js';
import createOneEndpoint from '../utils/createOneEndpoint.js';
import cleanString from '../utils/cleanString.js';
import { MongoClient } from 'mongodb';


config();
const { MONGO_URI } = process.env;
const router = express.Router();


//function to remove spaces and special characters from a string

function removeSpaces(str) {
  return str.replace(/\s+/g, '');
}


router.post('/createDatabase', async (req, res) => {
  try {
    const returnObject = {'status': 'fail', message: 'Error in connecting to MongoDB', 'schema': '', 'database_id': ''};
    
    const csvData = req.body.csvData;
    if(!csvData) {
      console.log('missing csv data')
      return res.status(400).send({message : 'Missing csv data'});
    }

    const endpoint_slug = req.body.endpoint_slug;
    if(!endpoint_slug) {
      console.log('missing endpoint slug')
      return res.status(400).send({message : 'Missing endpoint slug'});
    }

    const user_id = req.body.user_id;
    if(!user_id) {
      console.log('missing user id')
      return res.status(400).send({message : 'Missing user id'});
    }
    let api_name = req.body.api_name;
    if(!api_name) {
      console.log('missing api name')
      return res.status(400).send({message : 'Missing api name'});
    }
    const databaseName = processDBName(api_name);

    if(databaseName =="test") {
      console.log('cannot use database name')
      return res.status(400).send({message : 'Cannot use database name'});
    }


    let collection_name = req.body.collection_name;
    if(!collection_name) {
      console.log('missing collection name')
      return res.status(400).send({message : 'Missing collection name'});
    }

    collection_name = processName(collection_name);
    const description = req.body.description;
    if(!description) {
      return res.status(400).send({message : 'Missing description'});
    }

    //connect to MongoDB
    const connect = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    if(!connect) {
      console.log('error connecting to mongodb')
        return res.status(500).send({ message: 'Error connecting to MongoDB' });
    }


  
    const databases = await DatabaseModel.find({database_name: databaseName});
    if(databases.length > 0) {
        return res.status(400).send({message : 'Database name already exists'});
    }
                

    if(!csvData || !user_id || !databaseName  || !collection_name || !description) {
        return res.status(400).send({message : 'Missing required fields'});
    }
    const schema = await getSchemaFromCSV(csvData);
    console.log('schema:', schema);
    if (!schema) {
      return res.status(400).send({message : 'Error generating schema'});
    }

    const out = connectToMongoDB(schema, MONGO_URI, databaseName, collection_name, csvData);
    const user = await UserModel.findById(user_id);
    if(!user) {
        return res.status(400).send({message : 'Invalid user'});
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

        //make post request to /spindle/createAPIs
        const data = {api_name : api_name, user_id: user_id, description: description, endpoint_slug: endpoint_slug, database_id: uploadedDatabase._id, schema: schema};
        console.log(data);
        const response = await fetch(process.env.MY_URL+'/spindle/createAPIs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const api_response = await response.json();
        console.log(api_response.status);
        if(api_response.status !== 'active') {
            return res.status(500).send({'message' : 'Error creating API'});
        }

        res.status(200).send(returnObject);

        } catch (error) {
            console.error('Error saving database:', error);
            res.status(500).send({'message' : 'Error saving database'});
        }

        } catch (error) {

        console.error('Error generating schema:', error);
        res.status(500).send({message : 'Error generating schema'});


        }
});


router.post("/createAPIs", async (req, res) => {
    const api_name = req.body.api_name;

    let api_exists = await APIModel.findOne({name: api_name});
    if(api_exists) {
      return res.status(400).send({message : 'API name already exists'});
    }
    //check if api_name exists
    if(!api_name) {
        return res.status(400).send({message : 'Missing API name'});
    }
    const user_id = req.body.user_id;
    if(!user_id) {
        return res.status(400).send({message : 'Missing user ID'});
    }
    const description = req.body.description;
    if(!description) {
        return res.status(400).send({message : 'Missing description'});
    }
    let endpoint_slug = req.body.endpoint_slug;
    if(!endpoint_slug) {
        return res.status(400).send({message : 'Missing endpoint slug'});
    }

    endpoint_slug = processName(req.body.endpoint_slug);
  
    const database_id = req.body.database_id;
    if(!database_id) {
        return res.status(400).send({message : 'Missing database ID'});
    }
    const schema = req.body.schema;
    if(!schema) {
        return res.status(400).send({message : 'Missing schema'});
    }

    if(!api_name || !user_id || !description || !endpoint_slug || !database_id) {
        return res.status(400).send({message : 'Missing required fields'});
    }
    const user = await UserModel.findById(user_id);

    if(!user) {
        return res.status(400).send({message : 'Invalid user'});
    }

    const username = user.username;
    const full_endpoint_slug = `/${username}/${endpoint_slug}`;
    const database = await DatabaseModel.findById(database_id);
    if(!database) {
        return res.status(400).send({message : 'Invalid database'});
    }

    //close mongodb connection
    mongoose.connection.close();

    //get first three rows from database with database name database.database_name and collection name database.collection_name
    const db = await MongoClient.connect(database.mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const dbo = db.db(database.database_name);
    const collection = dbo.collection(database.collection_name);
    const firstThree = await collection.find().limit(3).toArray();
    if(!firstThree) {
        return res.status(500).send({message : 'Error getting sample data'});
    }
    db.close();

    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    const ideas = await getIdeas(schema);
    let endpoints = await createEndpoints(ideas, schema, JSON.stringify(firstThree));

    const curDate = new Date();
    const image_url = await image_query("Create an image that has to do with: " + api_name+ ". If it is unsafe or inappropriate, just create a general image of an API.");

        //check to make sure api with api name does not exist
     api_exists = await APIModel.findOne({name: api_name});
    if(api_exists) {
      return res.status(400).send({message : 'API name already exists'});
    }

    //check to make sure api with api_slug does not exist
    const api_slug_exists = await APIModel.findOne({api_slug: full_endpoint_slug});
    if(api_slug_exists) {
      return res.status(400).send({message : 'API slug already exists'});
    }

    //get all keys with user_id == user_id

    let keys = await KeyModel.find({user: user_id});
    if(keys.length < 1) {
      keys = []
    }



    const newAPI = {
      name: api_name,
      description: description,
      api_keys: keys.map(key => key.key), 
      api_slug: removeSpaces(full_endpoint_slug),
      user: user,
      mongo_uri: MONGO_URI,
      mongo_schema: schema,
      database_name: database,
      image: image_url, 
      status: "active",
      created_at: curDate,
      sample_data: firstThree

    }
    database.image = image_url;
    await database.save();


    //check to make s
    
    let api =  new APIModel(newAPI);


    let new_api = await api.save()

    user.apis.push(new_api._id);
    

    
 
      const endpointObjects = [];

      endpoints = endpoints.filter((v,i,a)=>a.findIndex(t=>(t.endpoint_slug === v.endpoint_slug))===i)


      for (let endpoint of endpoints) {
  
        const newEndpoint = {
          endpoint_name: endpoint.endpoint_name, 
          endpoint_slug: removeSpaces(`${full_endpoint_slug}${endpoint.endpoint_slug}`),
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

        

        let new_endpoint = null;
        try{
        new_endpoint = await saved_endpoint.save();
        }
        catch(error) {
          console.log('Error saving endpoint:', error);
        }
        if(new_endpoint !== null){
        endpointObjects.push(new_endpoint);
        }

      };

      //push endpoints to api object with createdCode 
      let myCreatedAPI = await API.findById(new_api._id);

      for(let endpoint of endpointObjects){

      myCreatedAPI.endpoints.push(endpoint);

      }

      console.log('created api:')
      await user.save();

      await myCreatedAPI.save()

      // update database to have image_url
      // const database_new = await DatabaseModel.findById(database_id);
      //   database_new.image = image_url;
      //   await database_new.save();
      //   res.send(myCreatedAPI);

      res.status(200).send(myCreatedAPI);
});

router.post('/testRequests', async (req, res) => {
  const api_name = req.body.api_name;
    //check if api_name exists
    if(!api_name) {
        return res.status(400).json({ message: 'Missing API name' });
    }
    const user_id = req.body.user_id;
    if(!user_id) {
        return res.status(400).json({ message: 'Missing user ID' });
    }
    const description = req.body.description;
    if(!description) {
        return res.status(400).json({ message: 'Missing description' });
    }
    let endpoint_slug = req.body.endpoint_slug;
    if(!endpoint_slug) {
        return res.status(400).json({ message: 'Missing endpoint slug' });
    }

     endpoint_slug = processName(req.body.endpoint_slug);
  
    const database_id = req.body.database_id;
    if(!database_id) {
        return res.status(400).json({ message: 'Missing database ID' });
    }
    const schema = req.body.schema;
    if(!schema) {
        return res.status(400).json({ message: 'Missing schema' });
    }

    if(!api_name || !user_id || !description || !endpoint_slug || !database_id) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    const user = await UserModel.findById(user_id);

    if(!user) {
        return res.status(400).json({ message: 'Invalid user' });
    }

    const username = user.username;
    const full_endpoint_slug = `/${username}/${endpoint_slug}`;
    const database = await DatabaseModel.findById(database_id);
    if(!database) {
        return res.status(400).json({ message: 'Invalid database' });
    }

    const curDate = new Date();
  const image_url = await image_query("Create an image that has to do with: " + api_name+ ". If it is unsafe or inappropriate, just create a general image of an API.");




    const newAPI = {
      name: api_name,
      description: description,
      api_keys: ['xtlqbxowjwffzcvrnnfkckcwqmwdglkvesliheuairxiycysjscqtxkeewqwgbbvhnseutkjvjjqzwnhljlizzptqlocfnsousceojgpwyzocktjvaqtbosvwzxhfcdrkmiugfjtqdngfkikzovalduyfcnbxkkcgjdsvlhmhimasludpfhmqhgqifwcajhf'], 
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

    //push endpoints to api object with createdCode 
    let myCreatedAPI = await API.findById(new_api._id);
    let deleteEndpoint = createDeleteEndpoint(api, user, database);
    myCreatedAPI.endpoints.push(deleteEndpoint);

    console.log('created api:')

    await myCreatedAPI.save()

    res.send(myCreatedAPI);
})





router.post('/createAPI', async (req, res) => {
  const endpoint_name = req.body.endpoint_name;
  console.log('endpoint_name:', endpoint_name)
  //check if endpoint_name exists
  if(!endpoint_name) {
    console.log('no endpoint name')
    return res.status(400).json({ message: 'Missing endpoint name' });
  }



  let endpoint_slug = req.body.endpoint_slug;
  if(!endpoint_slug) {
    console.log('no endpoint slug')
    return res.status(400).json({ message: 'Missing endpoint slug' });
  }
  endpoint_slug = processName(endpoint_slug);

  const user_id = req.body.user_id;


  if(!user_id) {
    console.log('no user id')
    return res.status(400).send({message : 'Missing user ID'});
  }

  

  const endpoint_description = req.body.endpoint_description;
  if(!endpoint_description) {
    console.log('no endpoint description')
    return res.status(400).send({message : 'Missing endpoint description'});
  }
  const api_id = req.body.id;
  if(!api_id) {
    console.log('no api id')
    return res.status(400).send({message : 'Missing API ID'});
  }


  //get schema from api object
  const api = await APIModel.findById(api_id);

  let slug = api.api_slug;

  if(!api) {
    return res.status(400).json({ message: 'Invalid API' });
  }




  const schema = api.mongo_schema;

  if(!endpoint_name || !endpoint_slug || !user_id || !endpoint_description || !api_id) {
    console.log('missing required fields')
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const user = await UserModel.findById(user_id);
  if(!user) {
    console.log('invalid user')
    return res.status(400).json({ message: 'Invalid user' });
  }

  //check if endpoint_slug already exists
  const username = user.username;

  const full_endpoint_slug = `/${slug}/${endpoint_slug}`;
  let endpoint = await EndpointModel.findOne({endpoint_slug: full_endpoint_slug});
  if(endpoint) {
    console.log('endpoint slug already exists')
    return res.status(400).json({ message: 'Endpoint slug already exists' });
  }

  let first_three = api.sample_data




  const create_endpoint = await createOneEndpoint(endpoint_name, full_endpoint_slug, endpoint_description, schema, JSON.stringify(first_three));



  if(!create_endpoint) {
    console.log('error creating endpoint')
    return res.status(500).json({ message: 'Error creating endpoint' });
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
    console.log('Error saving endpoint:', error);
    res.status(500).json({ message: 'Internal server error' });
  }

}
);

export default router;