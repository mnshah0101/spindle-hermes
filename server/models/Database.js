import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

//example object
/*
{
    // Name/Title of the database
    'database_name': 'TestDB',

    // Collection name in MongoDB
    'collection_name': 'testCollection',

    // User ID who owns this database
    'user': ObjectId('5e6a79764a1391240c86a793'),

    //API width which the database associated
    'api': ObjectId('5f7c38943931a92044c432a3'),

    // Description of the database
    'database_description': 'This is a test database for demonstrating the Mongoose schema representation',

    // URI to connect with this MongoDB
    'mongo_uri': 'mongodb+srv://username:password@cluster0.mongodb.net/TestDB?retryWrites=true&w=majority'
}
*/


const DatabaseSchema = new Schema({
    //database name/title
    database_name: {
        required: true,
        type: String
    },

    //mongo collection name
    collection_name: {
        required: true,
        type: String
    },

    //database owner
    user : {
        type: ObjectId,
        ref: "user"
    },
    //api associated with
    api : {
        type: ObjectId,
        ref: "API"
    },
    //database description
    database_description: {
        required: true,
        type: String
    },
    //mongo_uri for the database
    mongo_uri: {
        required:true,
        type:String
    }
  
});

export default mongoose.model('Database', DatabaseSchema);