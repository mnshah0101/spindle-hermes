import EndpointModel from "../models/Endpoint";

function createPostEndpoint(api, user, database, schema) {
    if (!api || !user || !database || !schema) {
        throw new Error("Missing parameters");
    };

    const postCode = `
        const newObject = req.body;
        if (!newObject) {
            return res.status(400).json({ error: 'no object provided' });
        };
        const schema = ${JSON.stringify(schema)};
        for (const field in newObject) {
            if (!schema[field]) {
                return res.status(400).json({ error: 'schema of provided object does not match db schema'});
            }
            else if (typeof newObject[field] != schema[field]) {
                return res.status(400).json({ error: 'schema fields do not match' });
            }
        }
        //HOW DO I UPLOAD TO THE DATABASE
        return res.status(200).json({ message: "Object added successfully" })
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
    api.endpoints.push(saved_endpoint);
};

function createPutEndpoint(api, user, database) {
    if (!api || !user || !database) {
        throw new Error("Missing parameters");
    };

    const putCode = `
        try {
            const { id } = req.params; 
            const newObject = req.body;
            if (!newObject) {
                return res.status(400).json({ error: "Invalid parameters" });
            }
            const collection = ${database}.collection(${database.collection_name});
            collection.findByIdAndUpdate(id, newObject);
            res.status(200).json({ message: "Item updated successfully" });
        } catch(e) {
            console.log(e);
            res.status(500).json({ message: "Item was not updated correctly" });
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
    api.endpoints.push(saved_endpoint);
}

function createDeleteEndpoint(api, user, database) {
    if (!api || !user || !database) {
        throw new Error("Missing parameters");
    };

    const deleteCode = `
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ error: "Invalid ID provided });
            }

            const collection = ${database}.collection(${database.collection_name});
            collection.deleteOne({ _id: id });
            res.status(200).json({ message: "Item deleted successfully" });
        } catch(e) {
            console.log(e);
            res.status(500).json({ message: "Item with specified id not found" });
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
    api.endpoints.push(saved_endpoint);
};

export default { createPostEndpoint, createPutEndpoint, createDeleteEndpoint };