import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import Cta from '../components/Cta';
import { config } from 'dotenv';
import CardStyle4 from '../components/Card/CardStyle4';
import CardStyle5 from '../components/Card/CardStyle5';

config;

export default function ContactPage() {

  return (
    <>
      <Head>
        <title>
          Contact - CopyGen - AI Writer & Copywriting Landing Page Next.js
          Template.
        </title>
      </Head>
      <Layout>
        <div className="nk-header" />
        <section className="section section-bottom-0 has-shape has-mask">
          <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x" />
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
          <div className="container">
            <div className="section-head">
              <div className="row justify-content-center text-center">
                <div className="col-lg-11 col-xl-10 col-xxl-9">
                  <h6 className="overline-title text-primary">Contact us</h6>
                  <h1 className="title">
                    We love getting feedback, Questions, and hearing what you
                    have to say!
                  </h1>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="row g-gs justify-content-center justify-content-lg-between">
                <div className="col-xl-5 col-lg-6 col-md-8 text-lg-start text-center">
                  <div className="block-text pt-lg-4">
                    <h3 className="title h2">{`Let's talk`}</h3>
                    <ul className="row gy-4 pt-4">
                      <li className="col-12">
                        <CardStyle5
                          title="Email"
                          subTitle="hermesdevelopergroup@gmail.com"
                          iconClass="mail-fill"
                        />
                      </li>
                      <li className="col-12">
                        <CardStyle5
                          title="Office"
                          subTitle="Richmond, Virginia"
                          iconClass="map-pin-fill"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-body">
                      <h3 className="title fw-medium mb-4">
                        Please feel free to contact us using form below
                      </h3>
                      <form className="form-submit-init">
                        <div className="row g-4">
                          <div className="col-12">
                            <div className="form-group">
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  name="user-name"
                                  className="form-control form-control-lg"
                                  placeholder="Your Name"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <div className="form-control-wrap">
                                <input
                                  type="email"
                                  name="user-email"
                                  className="form-control form-control-lg"
                                  placeholder="Your Email Address"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  name="user-subject"
                                  className="form-control form-control-lg"
                                  placeholder="Subject"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <div className="form-control-wrap">
                                <textarea
                                  name="user-message"
                                  className="form-control form-control-lg"
                                  placeholder="Enter your message"
                                  required
                                  defaultValue={''}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <button
                                className="btn btn-primary"
                                type="submit"
                                id="submit-btn"
                              >
                                Send Message
                              </button>
                            </div>
                            <div className="form-result mt-4" />
                          </div>
                        </div>
                      </form>
                    </div>
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
