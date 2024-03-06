import React from 'react';
import StickyMenu from './StickyMenu';
import APIContent from './APIContent';
import { useState } from 'react';
import { useEffect } from 'react';
import { config } from 'dotenv';

config();


export default function APIPage(id){

    const [endpoints, setEndpoints] = useState([])

    useEffect(() => {
        const fetchEndpoints = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/getEndpoints`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ api_id: id })
            })
            const data = await res.json()
            console.log(data)
            setEndpoints(data)
        }
        fetchEndpoints()
    })





    return (
        <div className='container' style={{height:'100%'}}>
            <div className="row" style={{height:'100%'}}>

                <div className="col-lg-2 mb-3" >
                    <StickyMenu  / >

                    </div>

                <div className="col-lg-10 mb-3">
                    <APIContent id={id} />
                    </div>


            </div>
        </div>

    );
}