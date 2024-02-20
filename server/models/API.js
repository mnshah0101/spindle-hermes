import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const APISchema = new Schema({
    //api name/title
    name: {
        required: true,
        type: String

    },

    //api description
    description: {
        required: true,
        type: String
    },
    api_keys: [
        {
            type: String
        }
    ],

    //api slug such as www.example.com/api_slug/endpoint_slug
    api_slug:{
        required: true,

    },

    //api owner
    user : {
        type: ObjectId,
        ref: "user"
    },
    //mongo_uri for the database
    mongo_uri: {
        required:true,
        type:String
    },

    //mongo schema for the database
    mongo_schema: {
        required:true,
        type:String
    },

    //database related to the api
    database_name: {
        type: ObjectId,
        ref: 'Database'
    },

    //endpoints related to the api
    endpoints: [
        {
            type :ObjectId,
            ref: 'Endpoint'
        }
    ],

    //created at
    created_at: {
        type: Date,
        default: Date.now
    }
   
});

module.exports = mongoose.model('API', APISchema);