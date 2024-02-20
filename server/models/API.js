import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

/*
{
    "_id" : ObjectId("60d21b8a3c4a7e49b1b28796"),
    "name" : "User Management API",
    "description" : "API for managing users in our application",
    "api_keys" : [
        "AKDJFH98798JHYTUCIYT",
        "KADJFH1651RQEASDZXCZ",
        "QWER6876QWERTYUIOREW"
    ],
    "api_slug" : "www.example.com/user_management_api",
    "user" : ObjectId("60d21b8a3c4a7e49b1b28767"),
    "mongo_uri" : "mongodb://localhost:27017",
    "mongo_schema" : {
        "name" : "String",
        "email" : "String",
        "password" : "String"
    },
    "database_name" : ObjectId("60d21b8a3c4a7e49b1b28767"),
    "endpoints" : [
        ObjectId("60d21b8a3c4a7e49b1b28767"),
        ObjectId("60d21b8a3c4a7e49b1b28767")
    ],
    "image" : "https://www.example.com/user_management_api.png",
    "status" : "active",
    "created_at" : ISODate("2021-06-23T19:41:14.000Z")
}

    
*/

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

    //mongo schema for the database defined by a hashmap of key-value pairs of name : type
    mongo_schema: {
       type:Object
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
    },

    //image of the api for the dashboard
    image : {
        type: String
    },
    //api status
    status: {
        type: String,
        default: "active"
    }
   
   
});

module.exports = mongoose.model('API', APISchema);