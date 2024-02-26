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


import express from 'express';
import mongoose from 'mongoose';
import KeyModel from '../models/Key.js';
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
        if (pathParths[i].startWith(':')) {
            var paramName = pathParts[i].slice(1);
            var value = actualParts[i];
            params[paramName] = value;
        }
    }
    return params;
}

router.use('/', async (req, res, next) => {

    const method = req.method;
    const key = req.body.key;

    if(!key) {
        return res.status(403).send('Key missing');
    }


    //the endppint is just the path of the request
    const endpoint = req.path;
    console.log(endpoint)
    //first part of the endpoint is the username
    const username = endpoint.split('/')[1];
    //look for endpoint with the endpoint
    const endpoint_object = await Endpoint.findOne({endpoint_slug: endpoint, method: method});
    if(!endpoint_object) {
        return res.status(404).send('Endpoint not found');
    }

    
    //check if the key is valid
    const api = await APIModel.findById(endpoint_object.api.toString());

    if(!api) {
        return res.status(404).send('API not found');
    }

    //check if key in api.api_keys

    const isIn = api.api_keys.includes(key);
    if(!isIn) {
        return res.status(401).send('Invalid key');
    }

    

    //create masterParams to run api code in vm
    const params = getParams(endpoint_slug, req.path);
    const masterParams = {}
    for (let paramKey in params){
        masterParams[paramKey] = params[paramKey]
    };
    for (let paramKey in req.body) {
        masterParams[paramKey] = req.body[paramKey];
    };

    //check if the parameters are valid
    const endpoint_params = endpoint_object.parameters;
    const keys = Object.keys(endpoint_params);
    for(const key of keys) {
        if(!masterParams.includes(key)) {
            return res.status(400).send('Key not in parameters');
        }
    }

    //run code in vm
    const code = endpoint_object.code;
    const schema = api.mongo_schema;
    
    let answer = await run(schema, code, MONGO_URI, masterParams);
    if (!answer) {
        return res.status(500).send({ error: 'Internal server error' });
    }
    return res.status(200).send({ answer: answer });

});

export default router;