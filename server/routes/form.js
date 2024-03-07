import express from 'express';
import mongoose from "mongoose";
import UserModel from '../models/User.js';
import { config } from 'dotenv';

config();

const MONGO_URI = process.env.MONGO_URI;

const router = express.Router();

//connecti to MongoDB
const connect = mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });



router.post('/getAccount', async (req, res) => {
    try {
        console.log('get account');
        const { id } = req.body
        if (!id) {
            return res.status(400).json({ message: 'ID is required' })
        }

        //connect to MongoDB
        if(!connect) {
            return res.status(500).send('Error connecting to MongoDB');
        }

        const account = await UserModel.findById(id);
        if (!account) {
            return res.status(404).json({ message: 'account not found' })
        }

        return res.status(200).json(account);
    } catch (error) {
        console.error('Error fetching account data:', error);
        return res.status(500).json({ message: error.message });
    }
});

router.post('/updateAccount', async (req, res) => {
    try {
        console.log('update account');
        const { id, email, username } = req.body
        if (!id) {
            return res.status(400).json({ message: 'ID is required' })
        }
        if (!email) {
            return res.status(400).json({ message: 'Email is required' })
        }
        if (!username) {
            return res.status(400).json({ message: 'Username is required' })
        }

        //connect to MongoDB
        if(!connect) {
            return res.status(500).send('Error connecting to MongoDB');
        }

        const account = await UserModel.findOneAndUpdate({_id: id}, { $set: { email: email, username: username} });
        if (!account) {
            return res.status(404).json({ message: 'account not found' })
        }

        return res.status(200).json({message: "Updated successfully"});
    } catch (error) {
        console.error('Error updating account data:', error);
        return res.status(500).json({ message: error.message });
    }
})

export default router;