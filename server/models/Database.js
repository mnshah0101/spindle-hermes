import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


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

module.exports = mongoose.model('Database', DatabaseSchema);