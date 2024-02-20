import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const EndpointSchema = new Schema({
    //endpoint name/title
    endpoint_name: { 
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
    }
   
});

module.exports = mongoose.model('Endpoint', EndpointSchema);