'use client';
import Head from 'next/head';
import React from 'react';
import Layout from '../../components/Layout';
import APIPage from '../../components/APIs/APIPage';
import SectionHeading from '../../components/SectionHeading';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Database() {

  const router = useRouter();
  const id = router.query.id;

   



  return (
    <>
      <Head>
        <title>
          Documentation Page
        </title>
      </Head>
      <Layout>
        <div className="nk-header"></div>
        <section className="section section-sm section-bottom-0 pb-5 has-mask">
          <div className="nk-mask bg-pattern-dot bg-blend-around " />

            <SectionHeading
                overlineTitle="Official Documentation"
                title="Full API Documentation"
                containerWidthClass="col-lg-10 col-xl-9 col-xxl-8 mb-7"
                variant="h1"
                />

            <APIPage id={id}  />
           
              
             
         
        </section>
      </Layout>
    </>
  );
}
