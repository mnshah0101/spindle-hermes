
import { OpenAI } from "openai";
import dotenv from 'dotenv';
dotenv.config();


const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({ apiKey: OPENAI_API_KEY});
async function create(prompt){
const response =  await openai.images.generate({ prompt, model:'dall-e-3' });
let url = response.data[0].url;
console.log(url);
return url;
}

export default create;