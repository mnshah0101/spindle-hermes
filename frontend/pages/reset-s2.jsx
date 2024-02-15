import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Icon from '../components/Icon';
import logoUrl from '../public/images/logo-dark.png';
import darkLogoUrl from '../public/images/logo.png';
import Logo from '../components/Logo';

export default function ResetS2() {
  return (
    <>
      <Head>
        <title>
          Reset-s2 - CopyGen - AI Writer & Copywriting Landing Page Next.js
          Template.
        </title>
        <meta
          name="description"
          content="CopyGen - AI Writer & Copywriting Landing Page Next.js Template."
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div className="nk-app-root ">
        <main className="nk-pages">
          <div className="min-vh-100 d-flex flex-column has-mask">
            <div className="nk-mask bg-pattern-dot bg-blend-around" />
            <div className="text-center mt-6 mb-4">
              <Logo logoUrl={logoUrl} darkLogoUrl={darkLogoUrl} href="/" />
            </div>
            <div className="my-auto">
              <div className="container">
                <div className="row g-gs justify-content-center">
                  <div className="col-md-7 col-lg-6 col-xl-5">
                    <div className="card border-0 shadow-sm rounded-4">
                      <div className="card-body">
                        <h4>Reset password</h4>
                        <p>
                          If you forgot your password, well, then we’ll email
                          you instructions to reset your password.
                        </p>
                        <form action="success-s2">
                          <div className="row g-4">
                            <div className="col-12">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                  htmlFor="emailorusername"
                                >
                                  Email Address
                                </label>
                                <div className="form-control-wrap">
                                  <input
                                    type="email"
                                    name="emailorusername"
                                    id="emailorusername"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Email"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="d-flex flex-wrap justify-content-between align-items-center has-gap g-3">
                                <div className="form-group">
                                  <button
                                    className="btn btn-primary"
                                    type="submit"
                                    id="submit-btn"
                                  >
                                    Send Reset Link
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <p className="text-center mt-4">
                      <Link className="link has-gap g-2" href="login-s2">
                        <Icon icon="arrow-left" className="icon" />
                        <span>Back to Login</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-heading mt-4 mb-6">
              © 2023 CopyGenAI. Template Made By{' '}
              <Link target="_blank" href="https://softnio.com">
                Softnio
              </Link>
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
