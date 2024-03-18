import express from "express";
import mongoose from 'mongoose';
import { MongoClient, ObjectId } from "mongodb";
import { config } from 'dotenv';
import DatabaseModel from "../models/Database.js";
import APIModel from "../models/API.js";
import EndpointModel from "../models/Endpoint.js";
config();

const MONGO_URI = process.env.MONGO_URI;

const router = express.Router();

//get all objects of a database given a database_id
router.post('/getDbObjects', async (req, res) => {
    try {
        const { database_id } = req.body;
        if (!database_id) {
            return res.status(400).json({ message: 'Database ID is required' });
        }

        let client = await MongoClient.connect(process.env.MONGO_URI, {});
        if (!client) {
            return res.status(500).json({ message: "Error connecting to the database" });
        }
        
        const databases = client.db().collection('databases');
        const database = await databases.findOne({ _id: new ObjectId(database_id) });
        console.log(database);

        if (!database) {
            await client.close();
            return res.status(404).json({ message: 'Database not found' });
        }

        await client.close();

        client = await MongoClient.connect(database.mongo_uri, {});
        if (!client) {
            await client.close();
            return res.status(500).send('Error connecting to MongoDB');
        }

        const collection = client.db(database.database_name).collection(database.collection_name);
        const dbObjects = await collection.find({}).toArray();

        console.log('Objects:', dbObjects);
        await client.close();

        return res.status(200).json({ data: dbObjects, title: database.database_name });
    } catch (error) {
        console.error('Error fetching objects:', error);
        return res.status(500).json({ message: error.message });
    }
});


//get all databases from user_id
router.post("/getDbs", async (req, res) => {
    try{
        const { user_id } = req.body
        if (!user_id) {
            return res.status(400).json({ message: 'User ID is required' })
        }

        //connect to mongodb
      

        const db_objects = await DatabaseModel.find({ user: user_id }).exec();
        if (!db_objects) {
            return res.status(404).json({ message: 'Databases not found' });
        }
        return res.status(200).json(db_objects)


    } catch (error) {
        console.error('Error fetching databases:', error)
        return res.status(500).json({ message: error.message })
    }
});

//get all apis from a user id
router.post('/getAPIs', async (req, res) => {
    try {
        const { user_id } = req.body
        if (!user_id) {
            return res.status(400).json({ message: 'User ID is required' })
        }
        
      

        const apis = await APIModel.find({ user: user_id}).exec();
        if (!apis) {
            console.log('APIs not found');
            return res.status(404).json({ message: 'APIs not found' });
        }
        return res.status(200).json(apis);
    } catch (error) {
        console.error('Error fetching databases:', error);
        return res.status(500).json({ message: error.message });
    }
});

//get all endpoints from user id
router.post('/getEndpoints', async (req, res) => {
    try {
        let { id } = req.body
        if (!id) {
            return res.status(400).json({ message: 'API ID is required' })
        }



        const endpoints = await EndpointModel.find({ api: id });
        if (!endpoints) {

            return res.status(404).json({ message: 'Endpoints not found' });
        }
        return res.status(200).json(endpoints);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/deleteEndpoint', async (req, res) => {
    try {
        const endpoint_name = req.body.endpoint_name;
        if (!endpoint_name) {
            return res.status(404).json({ message: 'Endpoint not found' });
        }

        await EndpointModel.findOneAndDelete({endpoint_name: endpoint_name});
        return res.status(200).json({ message: 'Endpoint deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}) 

export default router;