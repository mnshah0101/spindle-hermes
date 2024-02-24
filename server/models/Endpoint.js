import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

//example of a schema for an endpoint

/*
{
    "endpoint_name": "Get User Data",
    "endpoint_slug": "www.example.com/api_slug/get_user_data",
    "user" : "609d6cd3429f150020429",
    "api" : "5f8762d3742f160024426",
    "database": "7e278e6cb894250025429",
    "description": "This endpoint is used to fetch user data from database",
    "parameters": [
        {
            "name": "string",
            "age": "number"
        }
    ],
    "response_type": "JSON",
    "code": "const responseFunction = async (userID) => { 
    
                const user = await User.findById(userID); 

                if (!user) { 
                     throw new Error('No user found!'); 
                }

                return user; 

            }"
    "tags": [
        "user",
        "data"
    ],
    "full_endpoint": "www.example.com/api_slug/get_user_data"
    
}
*/


const EndpointSchema = new Schema({
    //endpoint name/title
    endpoint_name: { 
        required: true,
        type: String
    },
    method : {
        required: true,
        type: String
    },

    //endpoint slug such as www.example.com/api_slug/endpoint_slug
   endpoint_slug: {
         required: true,
         type: String
    },
    //endpoint owner
    user : {
        type: ObjectId,
        ref: "user"
    },
    //api associated with 
    api : {
        type: ObjectId,
        ref: "API"
    },

    //database associated with
    database: {
        type: ObjectId,
        ref: "Database"
    },
    //endpoint description
    description: {
        required: true,
        type: String
    },
    //parameters for the endpoint
    parameters: [
        {
            type: Object
        }
    ],
    //response_type for the endpoint
    response_type: {
        required: true,
        type: String
    },
    //mongoose+node code to be run in the VM for the endpoint
    code: {
        type: String
    },
     //api tags
    tags: [
        {
            type: String
        }
    ],

    //api full endpoint ie www.example.com/api_slug/endpoint_slug
    full_endpoint: {
        type: String
    }

   
});

module.exports = mongoose.model('Endpoint', EndpointSchema);