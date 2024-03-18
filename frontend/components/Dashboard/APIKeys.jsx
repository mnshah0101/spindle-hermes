import React, { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { useSession } from 'next-auth/react';
import { config } from "dotenv";

config();

export default function APIKeys() {
    const { data: session, status } = useSession();

    const [keys, setKeys] = useState([])

    function changeKeys(newKeys) {
        setKeys(newKeys);
    }

    async function fetchData() {
        try{
            const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL+'/keys/getKeys', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_id: session.user.id })
            });
            if (res.status !== 200) return;
            const data = await res.json();
            changeKeys(data);
        } catch (error) {
            console.error('Error fetching keys:', error);
        }
        }


    useEffect(() => {
        if(status === 'loading') return;
        if(status === 'unauthenticated') return;


    
        
        fetchData();
    }, [session]
    );

    async function deleteKey(id){
        console.log('create key')
        console.log(id)
        const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL+'/keys/deleteKey', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ key_id: id })
        });

        if (res.status !== 200) return;
        const data = await res.json();

        fetchData();



        


     

    }

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };


    async function createKey(){
        console.log('create key')
        const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL+'/keys/createKey', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_id: session.user.id })
        });

        if (res.status !== 200) return;
        const data = await res.json();

        fetchData();

    }



    return (
        <div className="container">
            <div className="d-flex flex-row justify-content-end">
                <button onClick={createKey} className="btn btn-primary">CREATE KEY</button>

            </div>
<div className="my-7 rounded-3" style={{ height: '400px', overflow: 'auto'}}>
    
  <table  className="rounded-3" style={{fontSize: '1rem', width:'100%'}} >
    <thead>
        <tr style={{fontSize:'1.5rem'}} className="mb-3">
            <th scope="col" className="preview-table-col">API Key</th>
            <th scope="col" className="preview-table-col">Key Uses</th>
            <th scope="col" className="preview-table-col">Created At</th>
            <th scope="col" className="preview-table-col">Actions</th>
        </tr>

    </thead>

    <tbody>
   
    
    {keys.map((key, index) => {

return (
  <tr className="preview-table-row">
    <th className="preview-table-col">{key.key}</th>
    <td className="preview-table-col">{key.uses}</td>
    <td className="preview-table-col">{new Date(key.created_at).toLocaleDateString('en-US', options)}</td>
    <td className="preview-table-col">
      <button className="btn btn-outline-primary" onClick={() =>deleteKey(key._id) } > Revoke</button>
    </td>
  </tr>
)

})}

</tbody>


  

    </table>
  
</div>
</div>
    );
}