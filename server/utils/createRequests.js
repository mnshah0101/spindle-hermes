function createPostCode(schema) {
    if (!schema) {
        return res.status(400).json({ error: 'no schema provided'});
    };
    const postCode = `
        const newObject = req.body;
        if (!newObject) {
            return res.status(400).json({ error: 'no object provided' });
        };
        const schema = ${schema};
        for (const field in newObject) {
            if (!schema[field]) {
                return res.status(400).json({ error: 'schema of provided object does not match db schema'});
            };
            if (schema[field] && typeof newObject[field] != schema[field]) {
                return res.status(400).json({ error: 'schema fields do not match' });
            };
        };
        //HOW DO I PUSH THE OBJECT TO THE DATABASE
        res.json({ message: "Object added successfully"});
    `

    return postCode;
};

function createPutCode(schema) {
    if (!schema) {
        return res.status(400).json({ error: 'no schema provided'});
    };
    const postCode = `
        const { id } = req.params;
        const updatedObject = req.body;
        const objectToUpdate = database.find(object => object.id === id); //HOW DO I ACCESS DATABASE
        if (!objectToUpdate) {
            return res.status(400).json({ error: object with specified id not found});
        }
        const schema = ${schema};
        for (const field in updatedObject) {
            if (!schema[field]) {
                return res.status(400).json({ error: 'schema of provided object does not match db schema'});
            };
            if (schema[field] && typeof newObject[field] != schema[field]) {
                return res.status(400).json({ error: 'schema fields do not match' });
            };
        };
        Object.assign(objectToUpdate, updatedObject);
        res.json({ message: "object updated successfully" });

    `

    return postCode;
};

function createDeleteCode() {
    const postCode = `
        const { id } = req.params;
        const objectToDelete = database.find(object => object.id === id); //HOW DO I ACCESS DATABASE
        if (!objectToDelete) {
            return res.status(400).json({ error: object with specified id not found});
        }
        //HOW TO I ACCESS THE DATABASE
        res.json({ message: "object deleted successfully" });
    `
    return postCode;
};