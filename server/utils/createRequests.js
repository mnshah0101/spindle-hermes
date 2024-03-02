import EndpointModel from "../models/Endpoint.js";

function removeSpaces(str) {
    return str.replace(/\s+/g, '');
  }

async function createPostEndpoint(api, user, database) {
    if (!api || !user || !database ) {
        throw new Error("Missing parameters");
    };

    const postCode = `
        try {
            let newObject = new Model(params.newObject);
            await newObject.save();
            answer = 'New object has been successfully added.';
        } catch (error) {
            answer = 'There was an error while adding the new object. Make sure the object matches the schema of the database.';
        }
    `;


    const newEndpoint = {
        endpoint_name: 'Create an object', 
        endpoint_slug: removeSpaces(`/${user.username}/createObject`),
        user: user,
        method: 'POST',
        api: api._id,
        database: database,
        description: 'Creates an object',
        parameters: [{ name: 'updatedObject', type: 'object', description: 'The object to be created.'}], 
        response_type: 'JSON',
        code: postCode, 
        tags: [], //I dont know what to do
        api_keys : [],
        full_endpoint: removeSpaces(`/${user.username}/createObject`)
      };
    
    let saved_endpoint = new EndpointModel(newEndpoint);
    await saved_endpoint.save();
    return saved_endpoint;
};

async function createPutEndpoint(api, user, database) {
    if (!api || !user || !database) {
        throw new Error("Missing parameters");
    };

    const putCode = `
        try {
            let updatedObject = params.updatedObject;
        
            answer = await Model.updateOne({ _id: params.id }, updatedObject);
        
            if (!answer) {
                answer = 'No object found with the provided ID';
            }
        } catch (error) {
            answer = 'An error occurred while updating the object';
        }
    `;



    const newEndpoint = {
        endpoint_name: 'Update an object', 
        endpoint_slug: removeSpaces(`/${user.username}/updateObject`),
        user: user,
        method: 'PUT',
        api: api._id,
        database: database,
        description: 'Updates an object',
        parameters: [{ "name" :"id", "type":"String", "description":"This is the MongoDB ID of the object you want to update."}, { "name" :"newObject", "type":"Object", "description":"This is the new object you want to update. It must match the schema of the database."}],
        response_type: 'JSON',
        code: putCode, 
        tags: [],
        api_keys : [],
        full_endpoint: removeSpaces(`/${user.username}/updateObject`)
      };
    
    let saved_endpoint = new EndpointModel(newEndpoint);
      await saved_endpoint.save();
    
    return saved_endpoint;
};

async function createDeleteEndpoint(api, user, database) {
    if (!api || !user || !database) {
        throw new Error("Missing parameters");
    };

    const deleteCode = `
        try {
            let result = await Model.deleteOne({ _id: params.id });
            if (!result) {
                answer = 'No object found with the provided id';
            } else {
                answer = 'object deleted successfully';
            }
        } catch (error) {
            answer = 'An error occurred during deletion. Make sure the id is correct.';
        }
    `;
    
    const newEndpoint = {
        endpoint_name: 'Delete an object', 
        endpoint_slug: removeSpaces(`/${user.username}/deleteObject`),
        user: user,
        method: 'DELETE',
        api: api._id,
        database: database,
        description: 'Deletes an object',
        parameters: [{ "name" :"id", "type":"String", "description":"This is the MongoDB ID of the object you want to delete."}], 
        response_type: 'JSON',
        code: deleteCode, 
        tags: [], //I dont know what to do
        api_keys : [],
        full_endpoint: removeSpaces(`/${user.username}/deleteObject`)
      };
    
    let saved_endpoint = new EndpointModel(newEndpoint);
    await saved_endpoint.save();
    return saved_endpoint;
};

export { createPostEndpoint, createPutEndpoint, createDeleteEndpoint };