function generateSchemaCode(schema, collectionName, dbName) {
    let schemaCode = 'const mySchema = new mongoose.Schema({\n';

    Object.keys(schema).forEach((key) => {
        const fieldDefinition = schema[key];
        schemaCode += `  "${key}": ${fieldDefinition},\n`;
    });

    schemaCode += '});\n';
    schemaCode += 'let Model;\n';
    schemaCode += `const testDb = conn.connection.useDb("${dbName}");`
    schemaCode += `Model = testDb.model("Model", mySchema, "${collectionName}" );\n`;

    return schemaCode;
}

export default generateSchemaCode;