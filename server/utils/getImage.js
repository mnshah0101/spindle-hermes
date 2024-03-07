import dotenv from 'dotenv';
dotenv.config({path:'../.env'});
import create from './dalle3.js';
import axios from 'axios';
import qs from 'qs';

dotenv.config();



const img = process.env.IMGBB_API_KEY;

async function image_query(input) {
    const url = await create(input);
    const response = await axios.post("https://api.imgbb.com/1/upload", qs.stringify({
        image: url,
        key:img
    })
    ,
    {
         headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })
    return response.data.data.url;

}




export default image_query;