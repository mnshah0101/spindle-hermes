//get all databases from user_id

import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

export default async function handler(req, res) {

    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method not allowed' })
        }
    
        const { user_id } = req.body
    
        if (!user_id) {
            return res.status(400).json({ message: 'User ID is required' })
        }
    
        const client = await MongoClient.connect(process.env.MONGO_URI, {  })
        console.log('Connected to database')
        if(!client) {
        return res.status(500).json({ message: 'Error connecting to database' })
        }
        const databases = client.db().collection('databases') 
        const return_databases = await databases.find({user: new ObjectId(user_id)}).toArray()
        if (!return_databases) {
            await client.close()
            return res.status(404).json({ message: 'Databases not found' })
        }
        await client.close()
        console.log('Databases:', return_databases)
        return res.status(200).json(return_databases)
    }
    catch (error) {
        console.error('Error fetching databases:', error)
        return res.status(500).json({ message: error.message })
    }
}