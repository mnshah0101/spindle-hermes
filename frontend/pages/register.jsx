import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import Link from 'next/link';
import SocialWidget2 from '../components/Widget/SocialWidget2';
import InputFieldPassword from '../components/FormField/InputFieldPassword';

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>
          Register - CopyGen - AI Writer & Copywriting Landing Page Next.js
          Template.
        </title>
      </Head>
      <Layout>
        <div className="nk-header" />
        <section className="section section-bottom-0 pb-5 has-mask">
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
          <div className="container">
            <SectionHeading
              overlineTitle="Start your journey"
              title="Create copygen account"
            />
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-md-7 col-lg-6 col-xl-5">
                  <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-body">
                      <form action="success">
                        <div className="row g-4">
                          <div className="col-12">
                            <div className="form-group">
                              <label className="form-label" htmlFor="fullname">
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
                                  {' '}
                                  I agree to{' '}
                                  <Link href="/">
                                    privacy policy
                                  </Link> &amp;{' '}
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
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <p className="text-center mt-4">
                    {`Already have an account? `}
                    <Link href="login">Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
