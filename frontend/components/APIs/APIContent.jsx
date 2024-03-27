import React from "react";
import APIForm from "./APIForm";
import APICard from "./APICard";
import { useEffect } from "react";
import { useState } from "react";
import StickyMenu from './StickyMenu';


export default function APIContent({ id, isOwner }) {
    const [endpoints, setEndpoints] = useState([])
    const [titles, setTitles] = useState([])

    useEffect(() => {
        const fetchEndpoints = async () => {
            try {
                const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/database/getEndpoints', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: id })
                })
                const data = await res.json()
                setEndpoints(data)

                const titles = data.map(endpoint => endpoint.endpoint_name)
                setTitles(titles)



            } catch (e) {
                console.error('Error fetching endpoints:', e)
            }
        }
        fetchEndpoints()
    })

    const refreshEndpoints = async () => {
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/database/getEndpoints', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id })
            });
            const data = await res.json();
            setEndpoints(data);

            const titles = data.map(endpoint => endpoint.endpoint_name);
            setTitles(titles);
        } catch (e) {
            console.error('Error fetching endpoints:', e);
        }
    };

    if(endpoints.length === 0) {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <StickyMenu titles={titles} />
                        </div>
                        <div className="col-10">
                            <h1 className="my-4 pb-3">Create Your First Endpoint</h1>
                            <APIForm id={id} isOwner={isOwner} onSubmit={refreshEndpoints} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
      


    return (
        <div>
            <div className="container">
                <div className="row">

                    <div className="col-2">

                        <StickyMenu titles={titles} />

                    </div>

                    <div className="col-10">

                        {Array.isArray(endpoints) && endpoints.map((endpoint, index) => (
                            <div>
                                <APICard key={index} api={endpoint}  isOwner={isOwner} refreshEndpoints={refreshEndpoints} />
                                
                            </div>
                        ))}

                        <APIForm id={id} isOwner={isOwner} onSubmit={refreshEndpoints}/>

                    </div>


                </div>
            </div>
        </div>
    );
}