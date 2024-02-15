import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import Cta from '../components/Cta';
import CardStyle4 from '../components/Card/CardStyle4';
import CardStyle5 from '../components/Card/CardStyle5';

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
                    <p>
                      Must explain to you how all this mistaken idea of
                      denouncing pleasure and praising born and I will give you
                      a complete account of the system.
                    </p>
                    <ul className="row gy-4 pt-4">
                      <li className="col-12">
                        <CardStyle5
                          title="Contact"
                          subTitle="+(642) 342 762 44"
                          iconClass="call-alt-fill"
                        />
                      </li>
                      <li className="col-12">
                        <CardStyle5
                          title="Email"
                          subTitle="support@copygen.com"
                          iconClass="mail-fill"
                        />
                      </li>
                      <li className="col-12">
                        <CardStyle5
                          title="Office"
                          subTitle="442 Belle Terre St Floor 7, San Francisco, AV 4206"
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
        <section className="section section-bottom-0">
          <div className="container">
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-md-6 col-xl-4">
                  <CardStyle4
                    title="Get 1:1 Demo"
                    subTitle="Finding it difficult to navigate our suite of products? Get on a call with our product experts for personalized demo"
                    actionBtnUrl="/"
                    actionBtnText="Schedule a call"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <CardStyle4
                    title="24X7 Chat Support"
                    subTitle="Get on a call with our excellent customer support team by using our 24X7 live chat support. We are here to help!"
                    actionBtnUrl="/"
                    actionBtnText="Talk to Support"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <CardStyle4
                    title="Request Feature"
                    subTitle="Have an out of the box idea for a new AI feature to add. We are all ears."
                    actionBtnUrl="/"
                    actionBtnText="Request a feature"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-bottom-0">
          <div className="container">
            <Cta
              overlineTitle="Boost your writing productivity"
              title="End writer’s block today"
              subtitle="It’s like having access to a team of copywriting experts writing
              powerful copy for you in 1-click."
              btnUrl="/login"
              btnText="Start writing for free"
              infoList={[
                'No credit card required',
                'Cancel anytime',
                '10+ tools to expolore',
              ]}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
