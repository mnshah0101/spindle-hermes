'use client';
import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import CryptoJS from 'crypto-js';
import KeyModel from '../models/Key.js';
import UserModel from '../models/User.js';
import APIModel from '../models/API.js';


config();

const MONGO_URI = process.env.MONGO_URI;

const router = express.Router();

router.post('/createKey', async (req, res) => {
    try {
        const { user_id } = req.body
                console.log("seeing if user")


        if (!user_id) {
            return res.status(400).json({ message: 'User ID is required' })
        }

        //connect to mongodb
        const connect = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        if(!connect) {
            return res.status(500).json({ message: 'Error connecting to MongoDB' });
        };

        const newKey = {
            key: CryptoJS.lib.WordArray.random(16).toString().toUpperCase(),
            user: user_id,
            uses: 0,
            created_at: Date.now()
        };

        let saved_key = new KeyModel(newKey);

        //get all APIs from user

        const user = await UserModel.findById(user_id)
        console.log("seeing if user")


        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log(user)

        for (let i = 0; i < user.apis.length; i++) {
            let api = await APIModel.findById(user.apis[i]);
            if (!api) {
                return res.status(404).json({ message: 'API not found' });
            }
            api.api_keys.push(newKey.key);
            await api.save();
        }


        await saved_key.save();

        return res.status(200).json({ message: 'Key created' });
    } catch (error) {
        console.error('Error creating key:', error);
        return res.status(500).json({ message: error.message });
    }
});

router.post('/deleteKey', async (req, res) => {
    try {
        const { key_id } = req.body
        if (!key_id) {
            return res.status(400).json({ message: 'Key ID is required' })
        };

        //connect to mongodb
        const connect = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        if(!connect) {
            return res.status(500).json({ message: 'Error connecting to MongoDB' });
        };

        let key = await KeyModel.findByIdAndDelete(key_id).exec();
        if (!key) {
            return res.status(404).json({ message: 'Key not found' });
        }

        //delete keys from all APIs
        const user = await UserModel.findById(key.user);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        for (let i = 0; i < user.apis.length; i++) {
            let api = await APIModel.findById(user.apis[i]);
            if (!api) {
                return res.status(404).json({ message: 'API not found' });
            }
            api.api_keys = api.api_keys.filter(k => k !== key.key);
            await api.save();
        }
        



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
            return res.status(500).json({ message: 'Error connecting to MongoDB' });
        };

        const keys = await KeyModel.find({ user: user_id }).exec();
        if (!keys) {
            return res.status(404).json({ message: 'Keys not found' });
        };

        return res.status(200).json(keys);
    } catch (error) {
        console.error('Error fetching keys:', error);
        return res.status(500).json({ message: error.message });
    }
});

export default router;