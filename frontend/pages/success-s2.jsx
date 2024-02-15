import Head from 'next/head';
import React from 'react';
import Button from '../components/Button';
import logoUrl from '../public/images/logo-dark.png';
import darkLogoUrl from '../public/images/logo.png';
import Logo from '../components/Logo';

export default function SuccessS2() {
  return (
    <>
      <Head>
        <title>
          Success - CopyGen - AI Writer & Copywriting Landing Page Next.js
          Template.
        </title>
        <meta
          name="description"
          content="CopyGen - AI Writer & Copywriting Landing Page Next.js Template."
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <main className="nk-pages">
        <section className="section has-mask min-vh-100 d-flex flex-column">
          <div className="nk-mask bg-pattern-dot bg-blend-around" />
          <div className="container my-auto">
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-md-7 col-lg-6 col-xl-5">
                  <div className="text-center mb-4">
                    <Logo
                      logoUrl={logoUrl}
                      darkLogoUrl={darkLogoUrl}
                      href="/"
                    />
                  </div>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body">
                      <div className="block-text text-center">
                        <h6 className="overline-title smaller text-success mb-0">
                          Registration Successful !
                        </h6>
                        <h3 className="title">Welcome to CopyGen family</h3>
                        <p>
                          Now login with your password supercharge your creative
                          copywriting.
                        </p>
                        <ul className="btn-list btn-list-inline g-0">
                          <li>
                            <Button
                              href="login-s2"
                              btnText="Login Here"
                              btnClass="btn btn-primary"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
