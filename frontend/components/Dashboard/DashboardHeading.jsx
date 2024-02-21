import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SectionHeading from "../SectionHeading";

export default function DashboardHeading() {
    const router = useRouter();
    const { data: session } = useSession();
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (session) {
            setUsername(session.user.username);
        } 

        
    }
    , [session, router]);


    return (
         <SectionHeading
                overlineTitle="Dashboard"
                title={`Welcome, ${username}`}
                containerWidthClass="col-lg-10 col-xl-9 col-xxl-8"
                variant="h1"
                />
    );
}