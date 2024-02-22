import React from "react";
import DatabaseCard from "../Database/card";

export default function Databases() {
    return (
        <div className="row g-4">
        <div className="col-12 col-lg-6">
            <DatabaseCard
            title="NFL"
            imgUrl="https://static.profootballnetwork.com/wp-content/uploads/2021/02/15211332/nfl-logo-shield-history-design-meaning.jpg"
            imgAlt="NFL"
            link = "https://www.nfl.com/"
            description="The National Football League is a professional American football league consisting of 32 teams, divided equally between the National Football Conference and the American Football Conference."
            />
        </div>
       
       
      
        </div>
    );
    }