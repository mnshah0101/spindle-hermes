import React from "react";
import DatabaseCard from "../DatabaseCard/card";
import { useEffect } from "react";
import { useState } from "react";
import { useSession } from 'next-auth/react';


export default function Databases() {
    const [databases, setDatabases] = useState([])
    const { data: session, status } = useSession();

    useEffect(() => {
        if(status === 'loading') return;
        if(status === 'unauthenticated') return;

        async function fetchData() {
            const res = await fetch('/api/database/getDatabase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_id: session.user.id })
            });
            if (res.status !== 200) return;
            const data = await res.json();
            setDatabases(data);
        }
        fetchData();
    }
    , [session]
    );


    return (
        <div className="row g-4">
            {databases.map((database, index) => {
                return (
                    <div className="col-12 col-lg-6">
                    <DatabaseCard link={`/database/${database._id}`} key={index} imgUrl={database.image} description={database.database_description} title={database.database_name} />
                            </div>
                )

                })}


       
       
      
        </div>
    );
    }