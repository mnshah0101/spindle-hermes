//get all databases from user_id

import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

export default async function handler(req, res) {
    let client = null

    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method not allowed' })
        }
    
        const { api_id } = req.body
    
        if (!api_id) {
            return res.status(400).json({ message: 'API ID is required' })
        }
    
         client = await MongoClient.connect(process.env.MONGO_URI, {  })
        console.log('Connected to database')
        if(!client) {
        return res.status(500).json({ message: 'Error connecting to database' })
        }
        const apis = client.db().collection('apis') 
        const endpoints = client.db().collection('endpoints');
        const api = await apis.findOne({_id: new ObjectId(api_id)})
        if (!api) {
            await client.close()
            return res.status(404).json({ message: 'API not found' })
        }
        if (api) {
        for(let i = 0; i < api.endpoints.length; i++) {
            const endpoint = await endpoints.findOne({_id: new ObjectId(api.endpoints[i])})
            api.endpoints[i] = endpoint
        }
    } 
        await client.close()
        console.log('API:', api)
        return res.status(200).json(api)
    }
    catch (error) {
        console.error('Error fetching databases:', error)
        if (client) {
            await client.close()
        }
        return res.status(500).json({ message: error.message })
    }
}