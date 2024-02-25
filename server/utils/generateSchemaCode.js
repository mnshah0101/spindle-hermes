function generateSchemaCode(schema, modelName) {
    let schemaCode = 'const schema = new mongoose.Schema({\n';

    Object.keys(schema).forEach((key) => {
        const fieldDefinition = schema[key];
        schemaCode += `  ${key}: ${JSON.stringify(fieldDefinition)},\n`;
    });

    schemaCode += '});\n';
    schemaCode += `Model = mongoose.model(${modelName}, schema);\n`;
    schemaCode += 'module.exports = Model;\n';

    return schemaCode;
}

export default generateSchemaCode;