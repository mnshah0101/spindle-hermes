import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import SectionHeading from '../components/SectionHeading';
import Icon from '../components/Icon';

export default function ResetPage() {
  return (
    <>
      <Head>
        <title>
          Reset - CopyGen - AI Writer & Copywriting Landing Page Next.js
          Template.
        </title>
      </Head>
      <Layout>
        <div className="nk-header"></div>
        <section className="section section-lg section-bottom-0 pb-5 has-mask">
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
          <div className="container">
            <SectionHeading
              overlineTitle="Forgot Password ?"
              title="Reset from Here."
            />
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-md-7 col-lg-6 col-xl-5">
                  <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-body">
                      <h4>Reset password</h4>
                      <p>
                        If you forgot your password, well, then we’ll email you
                        instructions to reset your password.
                      </p>
                      <form action="success">
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
                                  placeholder="Enter Your Email"
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
                    <Link className="link has-gap g-2" href="login">
                      <Icon icon="arrow-left" className="icon" />
                      <span>Back to Login</span>
                    </Link>
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
