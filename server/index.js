import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';
import user_routes from './routes/user.js';
import cors from 'cors';
import dotenv from 'dotenv';
import spindleRouter from './routes/spindle.js';
import apiRouter from './routes/api.js';
import dbRouter from './routes/database.js'
import formRouter from './routes/form.js';

dotenv.config();
const {EXPRESS_PORT} = process.env;


const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));

app.use(cors());

    

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Error connecting to the database');
    console.log(err);
}
);

app.use('/', user_routes);
app.use('/spindle', spindleRouter);
app.use('/', dbRouter);
app.use('/', formRouter);
app.use('/', apiRouter);




app.listen(EXPRESS_PORT, () => {
    console.log(`Server is listening on port ${EXPRESS_PORT}`);
    }
);




