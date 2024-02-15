import React from 'react';
import Copyright from '../components/Widget/Copyright';
import SocialWidget2 from '../components/Widget/SocialWidget2';
import Link from 'next/link';
import Head from 'next/head';
import InputFieldPassword from '../components/FormField/InputFieldPassword';
import logoUrl from '../public/images/logo-dark.png';
import darkLogoUrl from '../public/images/logo.png';
import Logo from '../components/Logo';

export default function LoginPageS2() {
  return (
    <>
      <Head>
        <title>
          Login - CopyGen - AI Writer & Copywriting Landing Page Next.js
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
                        <h4 className="mb-3">Welcome Back!</h4>
                        <form action="success-s2">
                          <div className="row g-4">
                            <div className="col-12">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                  htmlFor="emailorusername"
                                >
                                  Email or Username
                                </label>
                                <div className="form-control-wrap">
                                  <input
                                    type="email"
                                    name="emailorusername"
                                    id="emailorusername"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Email or Username"
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
                              <div className="d-flex flex-wrap justify-content-between has-gap g-3">
                                <div className="form-group">
                                  <div className="form-check form-check-sm">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue
                                      id="rememberMe"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="rememberMe"
                                    >
                                      Remember Me
                                    </label>
                                  </div>
                                </div>
                                <a href="reset-s2" className="small">
                                  Forgot Password?
                                </a>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <button
                                  className="btn btn-primary btn-block"
                                  type="submit"
                                  id="submit-btn"
                                >
                                  Login
                                </button>
                              </div>
                            </div>
                            <div className="col-12 text-center">
                              <div className="small mb-3">or login with</div>
                              <SocialWidget2 />
                              <p className="mt-4">
                                {`Don't have an account? `}
                                <Link href="register-s2">Register</Link>
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
