import express from 'express';
import mongoose from "mongoose";
import multer from 'multer';
import UserModel from '../models/User.js';
import { config } from 'dotenv';

config();

const MONGO_URI = process.env.MONGO_URI;

const router = express.Router();

//creates image I DONT KNOW HOW THIS WORKS
router.post('/createImage', async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        
        let storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, './uploads')
            },
            filename: function (req, file, cb) {
                cb(null, file.fieldname + '-' + Date.now())
            }
        })
        var upload = multer({ storage: storage })

        res.status(200).json({ message: 'Image Uploaded Successfully' });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/getAccount', async (req, res) => {
    try {
        const { id } = req.body
        if (!id) {
            return res.status(400).json({ message: 'ID is required' })
        }

        //connect to MongoDB
        const connect = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        if(!connect) {
            return res.status(500).send('Error connecting to MongoDB');
        }

        const account = await UserModel.findById(id);
        if (!account) {
            mongoose.connection.close();
            return res.status(404).json({ message: 'account not found' })
        }

        mongoose.connection.close();
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
        const connect = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        if(!connect) {
            return res.status(500).send('Error connecting to MongoDB');
        }

        const account = await UserModel.findOneAndUpdate({_id: id}, { $set: { email: email, username: username} });
        if (!account) {
            mongoose.connection.close();
            return res.status(404).json({ message: 'account not found' })
        }

        mongoose.connection.close();
        return res.status(200).json({message: "Updated successfully"});
    } catch (error) {
        console.error('Error updating account data:', error);
        return res.status(500).json({ message: error.message });
    }
})

export default router;