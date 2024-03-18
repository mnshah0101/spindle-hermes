'use client'
import React from 'react';
import APIContent from './APIContent';



export default function APIPage({id, isOwner}){


    return (
        <div>

                

                    <APIContent id={id} isOwner={isOwner} />


        </div>

    );
}