import React from "react";
import DatabaseCard from "../DatabaseCard/card";
import { useEffect } from "react";
import { useState } from "react";
import { useSession } from 'next-auth/react';
import { config } from "dotenv";

config();


export default function Databases() {
    const [databases, setDatabases] = useState([])
    const { data: session, status } = useSession();

    useEffect(() => {
        if(status === 'loading') return;
        if(status === 'unauthenticated') return;

        async function fetchData() {
            try{
            const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL+ '/database/getDbs', {
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
        catch (error) {
            console.error('Error fetching databases:', error);
        }
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