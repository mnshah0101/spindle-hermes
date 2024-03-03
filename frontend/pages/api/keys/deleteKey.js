//api route to delete key from key_id

import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

export default async function handler(req, res) {

    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method not allowed' })
        }
    
        const { key_id } = req.body

        console.log('key_id:', key_id)
    
        if (!key_id) {
            return res.status(400).json({ message: 'Key ID is required' })
        }
    
        const client = await MongoClient.connect(process.env.MONGO_URI, {  })
        if(!client) {
        return res.status(500).json({ message: 'Error connecting to database' })
        }
        const keys = client.db().collection('keys') 
        const key = await keys.findOne({_id: new ObjectId(key_id)})
        if (!key) {
            await client.close()
            return res.status(404).json({ message: 'Key not found' })
        }
        await keys.deleteOne({_id: new ObjectId(key_id)})
        await client.close()
        return res.status(200).json({ message: 'Key deleted' })
    }
    catch (error) {
        console.error('Error deleting key:', error)
        return res.status(500).json({ message: error.message })
    }
}