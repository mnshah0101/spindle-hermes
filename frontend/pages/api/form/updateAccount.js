//endpoint to update account given id, email, username, and profile picture

import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()



export default async function handler(req, res) {
    try {
        console.log('update account')
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method not allowed' })
        }

        const { id, email, username, profile_picture } = req.body

        if (!id) {
            return res.status(400).json({ message: 'ID is required' })
        }

        if (!email) {
            return res.status(400).json({ message: 'Email is required' })
        }

        if (!username) {
            return res.status(400).json({ message: 'Username is required' })
        }

      

        const client = await MongoClient.connect(process.env.MONGO_URI, {  })
        if(!client) {
            return res.status(500).json({ message: 'Error connecting to database' })
        }

        const users = client.db().collection('users') 
        const account = await users.findOneAndUpdate({_id: new ObjectId(id)}, { $set: { email: email, username: username} })

        if (!account) {
            await client.close()
            return res.status(404).json({ message: 'Account not found' })
        }

        await client.close()

        console.log('successfully updated account')

        return res.status(200).json(account)

    }catch (error) {
        console.error('Error updating account data:', error)
        return res.status(500).json({ message: error.message })
    }
}