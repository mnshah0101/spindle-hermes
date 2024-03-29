import React from "react";
import { useState } from "react";
import DeleteEndpointButton from "../DeleteEndpointButton";





export default function APICard({ api, id, isOwner, refreshEndpoints }) {

    return (
        <div id={api.endpoint_name} className="container border border-info rounded-4 p-5 mb-8" style={{ width: '100%', overflow: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 className="mb-3">{api.endpoint_name}</h4>
                {isOwner && (
                    <div style={{ marginLeft: 'auto' }}>
                        <DeleteEndpointButton
                            endpoint_name={api.endpoint_name}
                            onDelete={refreshEndpoints}
                        />
                    </div>
                )}
            </div>

            <p><strong className="mx-2">Full Endpoint Slug: </strong>{api.endpoint_slug}</p>
            <p><strong className="mx-2">Method: </strong>{api.method}</p>
            <p><strong className="mx-2">Description: </strong>{api.description}</p>
            <p><strong className="mx-2">Tags: </strong>{api.tags.join(', ')}</p>

            <table className="my-3" style={{ width: '100%' }}>
                <thead>
                    <tr className="preview-table-row">
                        <th className="preview-table-col">Param Name</th>
                        <th className="preview-table-col">Param Type</th>
                        <th className="preview-table-col">Param Description</th>
                    </tr>
                </thead>
                <tbody>
                    {api.parameters?.map((param, index) => (
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