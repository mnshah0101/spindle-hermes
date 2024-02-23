import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import { signOut } from 'next-auth/react';
import DashboardHeading from '../components/Dashboard/DashboardHeading';


import Tab from '../components/Dashboard';

export default function PricingPage() {



 
    
  return (
    <>
      <Head>
        <title>
          Dashboard - Spindle 
        </title>
      </Head>
      <Layout>
        <div className="nk-header" />

        <section className="section section-bottom-0 has-shape has-mask mb-10">
            <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x" />
            <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
            <div className="container ">
                <DashboardHeading />
               
                <Tab />

                <div className='d-flex flex-row justify-content-end my-3'>

                <div className="text-center">
                    <button
                    onClick={() => signOut()}
                    className="btn btn-light btn-lg"
                    >
                    Sign Out
                    </button>

                        </div>

                        </div>


            </div>
        </section>
       
      </Layout>
    </>
  );
}
