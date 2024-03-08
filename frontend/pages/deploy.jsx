import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import Cta from '../components/Cta';
import CardStyle4 from '../components/Card/CardStyle4';
import Papa from 'papaparse';

import Deploy from '../components/Deploy';



export default function DeployPage() {

   












    
  
  return (
    <>
      <Head>
        <title>
          Deploy - Spindle
        </title>
      </Head>
      <Layout>
        <div className="nk-header" />
        <section className="section section-bottom-0 has-shape has-mask">
          <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x" />
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
         <Deploy />
        </section>
        <section className="section section-bottom-0">
          <div className="container">
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-md-6 col-xl-4">
                  <CardStyle4
                    title="Documentation"
                    subTitle="Get started with our API by reading our documentation. We have a comprehensive guide to help you get started."
                    actionBtnUrl="/"
                    actionBtnText="Read Docs"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <CardStyle4
                    title="Contact Us"
                    subTitle="If you have any questions or need help, feel free to contact our support team. We are here to help you."
                    actionBtnUrl="/"
                    actionBtnText="Talk to Support"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <CardStyle4
                    title="Request Feature"
                    subTitle="Have an out of the box idea for a new AI feature to add. We are all ears."
                    actionBtnUrl="/"
                    actionBtnText="Request a feature"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-bottom-0">
          <div className="container">
            <Cta
              overlineTitle="Boost your data team's productivity"
              title="Ship high-quality data faster with Spindle."
              subtitle="It’s like having access to a team of data scientists, engineers, and analysts, all in one tool. Start writing for free today."
              btnUrl="/deploy"
              btnText="Start developing for free"
              infoList={[
                'No credit card required',
               
              ]}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
