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
            return res.status(500).send('Error connecting to MongoDB');
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
        const connect = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        if(!connect) {
            return res.status(500).send('Error connecting to MongoDB');
        }

        const db_objects = await DatabaseModel.find({ user: user_id }).exec();
        if (!db_objects) {
            mongoose.connection.close();
            return res.status(404).json({ message: 'Databases not found' });
        }
        mongoose.connection.close();
        console.log('Databases:', db_objects)
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
        
        //connect to MongoDB
        const connect = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        if(!connect) {
            return res.status(500).send('Error connecting to MongoDB');
        }

        const apis = await APIModel.find({ user: user_id}).exec();
        if (!apis) {
            mongoose.connection.close();
            console.log('APIs not found');
            return res.status(404).json({ message: 'APIs not found' });
        }
        mongoose.connection.close();
        console.log('APIs:', apis);
        return res.status(200).json(apis);
    } catch (error) {
        console.error('Error fetching databases:', error);
        return res.status(500).json({ message: error.message });
    }
});

//get all endpoints from user id
router.post('/getEndpoints', async (req, res) => {
    try {
        const { api_id } = req.body
        if (!api_id) {
            return res.status(400).json({ message: 'API ID is required' })
        }

        const connect = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        if(!connect) {
            return res.status(500).send('Error connecting to MongoDB');
        }

        const endpoints = await EndpointModel.find({ api: api_id });
        if (!endpoints) {

            mongoose.connection.close();
            return res.status(404).json({ message: 'Endpoints not found' });
        }
        mongoose.connection.close();
        return res.status(200).json(endpoints);
    } catch (error) {
        console.error('Error fetching databases:', error)
        return res.status(500).json({ message: error.message })
    }
})

export default router;