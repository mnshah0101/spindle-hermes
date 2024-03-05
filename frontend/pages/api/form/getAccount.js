import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()


export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { id } = req.body

    if (!id) {
        return res.status(400).json({ message: 'ID is required' })
    }

    

    const client = await MongoClient.connect(process.env.MONGO_URI, {  })
    if(!client) {
      return res.status(500).json({ message: 'Error connecting to database' })
    }


    const users = client.db().collection('users') 
    const account = await users.findOne({_id: new ObjectId(id)})




    if (!account) {
        await client.close()
        return res.status(404).json({ message: 'Account not found' })
    }

    await client.close()

    return res.status(200).json(account)

  }catch (error) {
    console.error('Error fetching account data:', error)
    return res.status(500).json({ message: error.message })
  }









}