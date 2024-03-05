import React from "react";
import APIForm from "./APIForm";
import APICard from "./APICard";


export default function APIContent(id) {





    return (
        <div>
            <div className="container">
                <div className="row">
                    <APICard />
                       <APICard />
                          <APICard />

                    
                        <APIForm />
                        
                </div>
            </div>
        </div>
    );
}