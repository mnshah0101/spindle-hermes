//create api key from user_id

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
        if(!client) {
        return res.status(500).json({ message: 'Error connecting to database' })
        }
        const keys = client.db().collection('keys') 
        const key = await keys.insertOne({user: new ObjectId(user_id), key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), uses : 0, created_at: new Date()})
        await client.close()
        return res.status(200).json({ message: 'Key created' })
    }
    catch (error) {
        console.error('Error creating key:', error)
        return res.status(500).json({ message: error.message })
    }
}