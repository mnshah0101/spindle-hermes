import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Error504() {
  return (
    <>
      <Head>
        <title>
          504 Error - Spindle 
        </title>
      </Head>
      <Layout>
        <div className="nk-header"></div>
        <section className="section section-sm section-bottom-0 pb-5 has-mask">
          <div className="nk-mask bg-pattern-dot bg-blend-around" />
          <div className="container">
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                  <div className="block-gfx">
                    <Image
                      className="w-100"
                      src="/images/gfx/error/504.svg"
                      alt="504"
                      width={485}
                      height={291}
                    />
                  </div>
                  <div className="block-text text-center mt-4">
                    <h3 className="title">Gateway Timeout Error</h3>
                    <p>
                      We are very sorry for inconvenience. It looks like some
                      how our server did not receive a timely response.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
