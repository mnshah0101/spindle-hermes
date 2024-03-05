//here we want to catch get, post, put, and delete requests seperately
//in each handler, first we want to check if the provided key is valid
//if the key is valid, we want to proceed with the request
//if the key is invalid, we want to return a 401 status code
//if the key is missing, we want to return a 403 status code
//then we get the endpoint from our mongodb, remember to open and close connections strictly
//then we want to check if the parameters are valid ie if they match the paramters in our endpoint object
//if the parameters are valid, we want to proceed with the request
//if the parameters are invalid, we want to return a 400 status code
//if the parameters are missing, we want to return a 400 status code
//then, we want to take the code string from the endpoint object which would be a function and call in our vm with the parameters
//the code should run and return a result
//if the code runs successfully, we want to return the result with a 200 status code
//if the code fails, we want to return a 500 status code


import express, { Router } from 'express';
import mongoose from 'mongoose';
import Database from '../models/Database.js';
import Endpoint from '../models/Endpoint.js';
import APIModel from '../models/API.js';
import UserModel from '../models/User.js';
import run from '../utils/runAPI.js';
import { config } from 'dotenv';

const MONGO_URI = process.env.MONGO_URI;

const router = express.Router();

function getParams(path, actualPath) {
    var params = {};
    var pathParts = path.split('/');
    var actualParts = actualPath.split('/');
    for (var i = 0; i < pathParts.length; i++) {
        if (pathParts[i].startsWith(':')) {
            var paramName = pathParts[i].slice(1);
            var value = actualParts[i];
            params[paramName] = value;
        }
    }
    return params;
}

router.use('/', async (req, res, next) => {

    try{

    const method = req.method;
    const key = req.body.key;

    if(!key) {
        return res.status(403).send('Key missing');
    }
    const endpoint = req.path;
    console.log(endpoint)
    console.log(method)
    
    const endpoint_object = await Endpoint.findOne({endpoint_slug: endpoint, method: method});
    console.log(endpoint_object)
    if(!endpoint_object) {
        return res.status(404).send('Endpoint not found');
    }

    
    const api = await APIModel.findById(endpoint_object.api.toString()).populate('database_name');


    if(!api) {
        return res.status(404).send('API not found');
    }

    const isIn = api.api_keys.includes(key);
    if(!isIn) {
        return res.status(401).send('Invalid key');
    }


    const params = getParams(endpoint, req.path);
    const masterParams = {}
    for (let paramKey in params){
        masterParams[paramKey] = params[paramKey]
    };
    for (let paramKey in req.body) {
        masterParams[paramKey] = req.body[paramKey];
    };


    //check if the parameters are valid
    const endpoint_params = endpoint_object.parameters;

    const keys = []
    for(let param of endpoint_params){
        keys.push(param.name)
    }

    let missing_params = []

    for(const key of keys) {
        if(!Object.keys(masterParams).includes(key)) {
           let missing_param = key;
              missing_params.push(missing_param)


        }
    }

    if(missing_params.length > 0) {
        return res.status(400).send({error: 'Missing parameters', missing_params: missing_params});
    }

  
    const code = endpoint_object.code;
    const schema = api.mongo_schema;

    let answer = await run(schema, code, MONGO_URI, masterParams, api.database_name.database_name, api.database_name.collection_name);



   


    if (!answer) {
        return res.status(500).send({ error: 'Internal server error' });
    }
    return res.status(200).send({ response_data: answer });

} catch(e){
    console.log(e)
    return res.status(500).send({ error: 'Internal server error', message: e});
}

});

export default router;