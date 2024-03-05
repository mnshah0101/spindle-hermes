//get all objects of a database given a database_id
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

export default async function handler(req, res) {
    
        try {
            if (req.method !== 'POST') {
                return res.status(405).json({ message: 'Method not allowed' })
            }
        
            const { database_id } = req.body

        
            if (!database_id) {
                return res.status(400).json({ message: 'Database ID is required' })
            }
        
            let client = await MongoClient.connect(process.env.MONGO_URI, {  })
            console.log('Connected to database')
            if(!client) {
            return res.status(500).json({ message: 'Error connecting to database' })
            }
             const databases = client.db().collection('databases') 
             const database = await databases.findOne({_id: new ObjectId(database_id)})

            console.log(database)


            
            if (!database) {
                await client.close()
                return res.status(404).json({ message: 'Database not found' })
            }
            await client.close()

            client = await MongoClient.connect(database.mongo_uri, {  })
            console.log('Connected to database')

            if(!client) {
            return res.status(500).json({ message: 'Error connecting to database' })

            }   
                        console.log(database)


            const objects = client.db(database.database_name).collection(database.collection_name)

            const return_objects = await objects.find({}).toArray()

            
            






            if (!return_objects) {
                await client.close()
                return res.status(404).json({ message: 'Objects not found' })
            }
            await client.close()
            console.log('Objects:', return_objects)
            return res.status(200).json({"data":return_objects, "title":database.database_name})
        }
        catch (error) {
            console.error('Error fetching objects:', error)
            return res.status(500).json({ message: error.message })
        }
    }