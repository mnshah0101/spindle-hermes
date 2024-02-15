import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>
          404 - CopyGen - AI Writer & Copywriting Landing Page Next.js Template.
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
                      className="w-100 rounded-4"
                      src="/images/gfx/error/404.svg"
                      alt="404"
                      width={485}
                      height={291}
                    />
                  </div>
                  <div className="block-text text-center mt-4">
                    <h3 className="title">Oops! Why you’re here?</h3>
                    <p>
                      We are very sorry for inconvenience. It looks like you’re
                      try to access a page that either has been deleted or never
                      existed.
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
