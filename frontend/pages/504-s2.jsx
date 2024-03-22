import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Error504S2() {
  return (
    <>
      <Head>
        <title>
          504 - Spindle
        </title>
        <meta
          name="description"
          content="Spindle 504 Error Page"
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <section className="section has-mask min-vh-100 d-flex flex-column">
        <div className="nk-mask bg-pattern-dot bg-blend-around" />
        <div className="container my-auto">
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
                    We are very sorry for inconvenience. It looks like some how
                    our server did not receive a timely response.
                  </p>
                  <ul className="btn-list btn-list-inline g-0">
                    <li>
                      <Link className="btn btn-primary" href="/">
                        <span>Back to Home</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
