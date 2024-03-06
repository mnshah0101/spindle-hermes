import React from "react";
import DatabaseCard from "../DatabaseCard/card";
import { useEffect } from "react";
import { useState } from "react";
import { useSession } from 'next-auth/react';
import { config } from 'dotenv';

config();

export default function Documentation() {

    let [apis, setAPIs] = useState([]);
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'loading') return;
        if (status === 'unauthenticated') return;
        async function fetchData() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/getAPI`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_id: session.user.id })
            });
            if (res.status !== 200) return;
            const data = await res.json();
            setAPIs(data);
        }
        fetchData();
    }
    , [session]
    );




    return (
        <div className="row g-4">
        {apis.map((database, index) => {
                return (
                    <div className="col-12 col-lg-6">
                    <DatabaseCard link={`/apis/${database._id}`} key={index} imgUrl={database.image} description={database.description} title={database.name} />
                            </div>
                )

                })}
       
       
      
        </div>
    );
    }