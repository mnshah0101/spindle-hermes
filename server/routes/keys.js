import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import CryptoJS from 'crypto-js';
import KeyModel from '../models/Key.js';

config();

const MONGO_URI = process.env.MONGO_URI;

const router = express.Router();

router.post('/createKey', async (req, res) => {
    try {
        const { user_id } = req.body

        if (!user_id) {
            return res.status(400).json({ message: 'User ID is required' })
        }

        //connect to mongodb
        const connect = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        if(!connect) {
            return res.status(500).send('Error connecting to MongoDB');
        };

        const newKey = {
            key: CryptoJS.lib.WordArray.random(16).toString(),
            user: user_id,
            uses: 0,
            created_at: Date.now()
        };

        let saved_key = new KeyModel(newKey);
        await saved_key.save();

        mongoose.connection.close()
        return res.status(200).json({ message: 'Key created' });
    } catch (error) {
        console.error('Error creating key:', error);
        return res.status(500).json({ message: error.message });
    }
});

router.post('/deleteKey', async (req, res) => {
    try {
        const { key_id } = req.body
        console.log('key_id:', key_id)
        if (!key_id) {
            return res.status(400).json({ message: 'Key ID is required' })
        };

        //connect to mongodb
        const connect = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        if(!connect) {
            return res.status(500).send('Error connecting to MongoDB');
        };

        const key = await KeyModel.findByIdAndDelete(key_id).exec();
        if (!key) {
            mongoose.connection.close();
            return res.status(404).json({ message: 'Key not found' });
        }

        mongoose.connection.close();
        return res.status(200).json({ message: 'Key deleted successfully' });
    } catch (error) {
        console.error('Error deleting key:', error);
        return res.status(500).json({ message: error.message });
    }
});

router.post('/getKeys', async (req, res) => {
    try {
        const { user_id } = req.body;
        if (!user_id) {
            return res.status(400).json({ message: 'User ID is required' })
        };

        //connect to mongodb
        const connect = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        if(!connect) {
            return res.status(500).send('Error connecting to MongoDB');
        };

        const keys = await KeyModel.find({ user: user_id }).exec();
        if (!keys) {
            mongoose.connection.close();
            return res.status(404).json({ message: 'Keys not found' });
        };

        mongoose.connection.close();
        return res.status(200).json(keys);
    } catch (error) {
        console.error('Error fetching keys:', error);
        return res.status(500).json({ message: error.message });
    }
});

export default router;