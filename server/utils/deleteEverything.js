import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Database from '../models/Database.js';
import API from '../models/API.js';
import Endpoint from '../models/Endpoint.js';

dotenv.config({path:'../.env'});

const { MONGO_URI } = process.env;







const deleteEverything = async () => {

    try {
        await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });
        await API.deleteMany({});
        await Endpoint.deleteMany({});
        await Database.deleteMany({});
        console.log('deleted everything');
    } catch (error) {
        console.log(error);
    }


   
}

deleteEverything();