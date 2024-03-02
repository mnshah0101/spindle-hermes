import EndpointModel from "../models/Endpoint.js";

function removeSpaces(str) {
    return str.replace(/\s+/g, '');
  }

function createPostEndpoint(api, user, database, schema) {
    if (!api || !user || !database || !schema) {
        throw new Error("Missing parameters");
    };

    const postCode = `
        try {
            let newObject = params.newObject;
            await newObject.save();
            answer = 'New employee has been successfully added.';
        } catch (error) {
            answer = 'There was an error while adding the new employee.';
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
        parameters: [JSON.stringify(schema)],
        response_type: 'JSON',
        code: postCode, 
        tags: [], //I dont know what to do
        api_keys : [],
        full_endpoint: removeSpaces(`/${user.username}/createObject`)
      };
    
    let saved_endpoint = new EndpointModel(newEndpoint);
    return saved_endpoint;
};

function createPutEndpoint(api, user, database) {
    if (!api || !user || !database) {
        throw new Error("Missing parameters");
    };

    const putCode = `
        try {
            let updatedObject = params.updatedObject
        
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
        parameters: [{}],
        response_type: 'JSON',
        code: postCode, 
        tags: [],
        api_keys : [],
        full_endpoint: removeSpaces(`/${user.username}/updateObject`)
      };
    
    let saved_endpoint = new EndpointModel(newEndpoint);
    return saved_endpoint;
};

async function createDeleteEndpoint(api, user, database) {
    if (!api || !user || !database) {
        throw new Error("Missing parameters");
    };

    const deleteCode = `
        try {
            let result = await Model.deleteOne({ ID: params.ID });
            if (!result) {
                answer = 'No object found with the provided ID';
            } else {
                answer = 'object deleted successfully';
            }
        } catch (error) {
            answer = 'An error occurred during deletion';
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
        parameters: [{ "id": "String" }], 
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