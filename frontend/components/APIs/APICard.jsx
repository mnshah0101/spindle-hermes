import React from "react";

const api = {
    name: 'API Name',
    slug: 'api-slug',
    method: 'GET',
    description: 'This is a description of the API',
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2021-07-01',
    params: [
        {
            name: 'param1',
            type: 'string',
            description: 'This is a description of param1'
        },
        {
            name: 'param2',
            type: 'number',
            description: 'This is a description of param2'
        },
        {
            name: 'param3',
            type: 'boolean',
            description: 'This is a description of param3'
        }
    ]
};



export default function APICard() {
    return (
        <div className="container border border-info rounded-4 p-5 mb-8" style={{width:'100%', overflow:'auto'}}>
            <h4 className="mb-3">{api.name}</h4>
            
            <p><strong className="mx-2">Full Endpoint Slug: </strong>{api.slug}</p>
            <p><strong className="mx-2">Method: </strong>{api.method}</p>
            <p><strong className="mx-2">Description: </strong>{api.description}</p>
            <p><strong className="mx-2">Tags: </strong>{api.tags.join(', ')}</p>
            <p><strong className="mx-2">Created At: </strong>{api.createdAt}</p>

            <table className="my-3" style={{width:'100%'}}>
                <thead>
                    <tr className="preview-table-row">
                        <th className="preview-table-col">Param Name</th>
                        <th className="preview-table-col">Param Type</th>
                        <th className="preview-table-col">Param Description</th>
                    </tr>
                </thead>
                <tbody>
                    {api.params.map((param, index) => (
                        <tr className="preview-table-row" key={index}>
                            <td className="preview-table-col">{param.name}</td>
                             <td className="preview-table-col">{param.type}</td>
                              <td className="preview-table-col">{param.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}