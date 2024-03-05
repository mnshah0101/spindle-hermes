import Head from 'next/head';
import React from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import DatabasePage from '../../components/Database';
import { useRouter } from 'next/router';
export default function Database() {

  const router = useRouter();

  const { id } = router.query;






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

            <DatabasePage id={id} />
           
              
             
         
          </div>
        </section>
      </Layout>
    </>
  );
}
