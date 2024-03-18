import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import SectionHeading from '../components/SectionHeading';
import Icon from '../components/Icon';
import { useState } from 'react';

export default function ResetPage() {
  const [resetError, setResetError] = useState('');
  const [resetSuccess, setResetSuccess] = useState('');

  const handleSubmit = async (e) => {
    setResetSuccess('');
    setResetError('');
    e.preventDefault();
    let emailAdd = document.getElementById('emailorusername').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailAdd || !emailRegex.test(emailAdd)) {
      setResetError('Invalid Email Address');
      return;
    }
    try {
      let res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ emailAdd })
      });
      console.log(res);
      if (res.status === 200) {
        setResetSuccess("Successfully sent email");
      } else {
        setResetError("No account exists with this email address");
      }


    } catch (error) {
      console.log(error);
      setResetError('Error sending email');
    }
  }

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
                      <form onSubmit={e => handleSubmit(e)}>
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
                                  id="passwordReset"
                                >
                                  Send Reset Link
                                </button>
                                {resetError && <div className="alert alert-danger my-3" role="alert">{resetError}</div>}
                                {resetSuccess && <div className="alert alert-success my-3" role="alert">{resetSuccess}</div>}
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
