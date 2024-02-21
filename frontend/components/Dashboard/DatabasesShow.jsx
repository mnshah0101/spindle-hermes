import React from "react";
import DatabaseCard from "../Database/card";

export default function Databases() {
    return (
        <div className="row g-4">
        <div className="col-12 col-lg-6">
            <DatabaseCard
            title="MongoDB"
            subTitle="NoSQL database"
            imgUrl=""
            imgAlt="MongoDB"
            />
        </div>
        <div className="col-12 col-lg-6">
            <DatabaseCard
            title="PostgreSQL"
            subTitle="Relational database"
            imgUrl="/images/postgresql.svg"
            imgAlt="PostgreSQL"
            />
        </div>
        <div className="col-12 col-lg-6">
            <DatabaseCard
            title="MySQL"
            subTitle="Relational database"
            imgUrl="/images/mysql.svg"
            imgAlt="MySQL"
            />
        </div>
        <div className="col-12 col-lg-6">
            <DatabaseCard
            title="Redis"
            subTitle="In-memory data structure store"
            imgUrl="/images/redis.svg"
            imgAlt="Redis"
            />
        </div>
        </div>
    );
    }