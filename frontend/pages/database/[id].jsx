import Head from 'next/head';
import React from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import DatabasePage from '../../components/Database';
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
          <div className="nk-mask bg-pattern-dot bg-blend-around" />
          <div className="container">

            <DatabasePage />
           
              
             
         
          </div>
        </section>
      </Layout>
    </>
  );
}
