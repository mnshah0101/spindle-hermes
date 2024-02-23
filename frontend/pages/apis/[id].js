import Head from 'next/head';
import React from 'react';
import Layout from '../../components/Layout';
import APIPage from '../../components/APIs/APIPage';
import SectionHeading from '../../components/SectionHeading';
export default function Database() {
  return (
    <>
      <Head>
        <title>
          Database Page
        </title>
      </Head>
      <Layout>
        <div className="nk-header"></div>
        <section className="section section-sm section-bottom-0 pb-5 has-mask">
          <div className="nk-mask bg-pattern-dot bg-blend-around " />

            <SectionHeading
                overlineTitle="Documentation"
                title="National Football League API"
                containerWidthClass="col-lg-10 col-xl-9 col-xxl-8 mb-7"
                variant="h1"
                />

            <APIPage  />
           
              
             
         
        </section>
      </Layout>
    </>
  );
}
