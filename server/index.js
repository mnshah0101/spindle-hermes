import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';
import user_routes from './routes/user.js';
import cors from 'cors';



const app = express();
app.use(bodyParser.json());

app.use(cors());

    

mongoose.connect('mongodb://localhost:27017/spindle', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Error connecting to the database');
    console.log(err);
}
);

app.use('/', user_routes);



app.listen(8000, () => {
    console.log('Server is listening on port 8000');
    }
);




