// current function of this file:
// 1. create endpoints from schema
// 2. upload endpoints to mongodb in Endpoint Model format
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('dotenv').config();
const { Configuration, OpenAI } = require('openai');
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
import getAPIIdeas from '/getIdeas.js';
import createEndpoints from './createEndpoints';
const Endpoint = require('../models/Endpoint');
const mongoose = require('mongoose');


function formatString(input) {
    return input.toLowerCase().replace(/\s/g, '_');
}

// Initialize OpenAI API
const openai = new OpenAI(OPENAI_API_KEY);

const express = require('express');
const router = express.Router()
router.use(express.json());

router.post('/generateAPI', async (req, res) => {
    try {
        console.log("generateAPI endpoint has been hit");
        console.log(req.body)
        const query = req.body.query;
        const schema = req.body.schema;
        const mongo_uri = req.body.mongo_uri
        const company_name = req.body.company_name
        const name = req.body.name

        //error handling
        if (!query) {
            console.log("No query provided")
            return res.status(400).send({ error: 'No query provided' });
        }
        if (!schema) {
            console.log("No schema provided")
            return res.status(400).send({ error: 'No schema provided' });
        }
        if (!mongo_uri) {
            console.log("No mongo uri provided")
            return res.status(400).send({ error: 'No mongo uri provided' });
        }
        if (!company_name) {
            console.log("No company provided")
            return res.status(400).send({ error: 'No company provided' });
        }
        if (!name) {
            console.log("No name provided")
            return res.status(400).send({ error: 'No name provided' });
        }

        //take schema and convert to endpoints
        let endpoint_ideas = await getAPIIdeas(schema, query);
        console.log("ideas length: " + endpoint_ideas.length)
        let endpoints = await createEndpoints(endpoint_ideas, schema);

        //create Endpoint object from each endpoint (idk if everything below this is correct, bc idk if endpoint even has all of these properties)
        const endpoint_ids = []
        for (let endpoint of endpoints) {
            let new_endpoint = {
                endpoint_name: formatString(name),
                endpoint_slug: endpoint.endpoint_slug,
                user: endpoint.user,
                api: endpoint.api,
                database: endpoint.database,
                description: endpoint.description,
                parameters: endpoint.parameters,
                response_type: endpoint.response_type,
                code: endpoint.code,
                tags: endpoint.tags,
                full_endpoint: endpoint.full_endpoint
            }
            let id = await Endpoint.create(new_endpoint);
            endpoint_ids.push(id);
        }



    } catch(err) {
        console.log(err);
        res.status(500).send({ error: 'Error processing your request' });
    }
});