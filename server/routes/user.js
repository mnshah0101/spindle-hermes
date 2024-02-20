//create a user routes

import express from 'express';
import UserModel from '../models/User.js';
import bycrypt from 'bcryptjs';

//connect to the database



const router = express.Router();


router.post('/register', async (req, res) => {
       try {
    const { username, email, password } = req.body;
    console.log(username, email, password)
    if(!username || !email || !password){
        console.log('Username, email and password are required');
        return res.status(400).send('Username, email and password are required');
    }
    let cryptPassword = bycrypt.hashSync(password, 10);
    const user = new UserModel({ username, email, password:cryptPassword });
 
        await user.save();
        console.log('User created');
        res.status(201).send('User created');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);

    }
})






export default router;



