import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Copyright from '../components/Widget/Copyright';
import SocialWidget2 from '../components/Widget/SocialWidget2';
import InputFieldPassword from '../components/FormField/InputFieldPassword';
import logoUrl from '../public/images/logo-dark.png';
import darkLogoUrl from '../public/images/logo.png';
import Logo from '../components/Logo';

export default function RegisterPageS2() {
  return (
    <>
      <Head>
        <title>
          Register - CopyGen - AI Writer & Copywriting Landing Page Next.js
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
                        <h4 className="mb-3">Create an account</h4>
                        <form action="success-s2">
                          <div className="row g-4">
                            <div className="col-12">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                  htmlFor="fullname"
                                >
                                  Full Name
                                </label>
                                <div className="form-control-wrap">
                                  <input
                                    type="text"
                                    name="fullname"
                                    id="fullname"
                                    className="form-control form-control-lg"
                                    placeholder="Your Name"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                  htmlFor="emailaddress"
                                >
                                  Email Address
                                </label>
                                <div className="form-control-wrap">
                                  <input
                                    type="email"
                                    name="emailaddress"
                                    id="emailaddress"
                                    className="form-control form-control-lg"
                                    placeholder="name@copygen.com"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                  htmlFor="toggle-password"
                                >
                                  Password
                                </label>
                                <InputFieldPassword />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="d-flex flex-wrap justify-content-between">
                                <div className="form-check form-check-sm">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="iAgree"
                                  />
                                  <label
                                    className="form-check-label small"
                                    htmlFor="iAgree"
                                  >
                                    I agree to{' '}
                                    <Link href="#"> privacy policy </Link> &{' '}
                                    <Link href="terms-condition">terms</Link>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <button
                                  className="btn btn-primary btn-block"
                                  type="submit"
                                  id="submit-btn"
                                >
                                  Create Account
                                </button>
                              </div>
                            </div>
                            <div className="col-12 text-center">
                              <div className="small mb-3">or signup with</div>
                              <SocialWidget2 />
                              <p className="mt-4">
                                {`Already have an account? `}
                                <Link href="login-s2">Login</Link>
                              </p>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Copyright
              copyrightText="© 2023 CopyGenAI. Template Made By"
              copyrightLink="https://softnio.com"
              copyrightLinkText="Softnio"
              variant="text-center text-heading mt-4 mb-6"
            />
          </div>
        </main>
      </div>
    </>
  );
}
