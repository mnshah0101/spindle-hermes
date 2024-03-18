import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import { config } from 'dotenv';

config();


export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    setSuccess('');
    setError('');
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    const reset_token = params.get('reset_token');
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL+'/resetPassword', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, reset_token, password })
        })
        console.log(res);
        if(res.status === 200) {
          setSuccess('Successfully updated password');
        }
        if(res.status === 404) {
          setError('Reset password link has expired');
        }
        
    } catch (error) {
      setError('Invalid Password.');
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Reset Password - Spindle</title>
      </Head>
      <Layout>
        <div className="nk-header" />
        <section className="section section-bottom-0 pb-5 has-mask">
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
          <div className="container">
            <SectionHeading overlineTitle="Welcome Back!" title="Reset Password Here" />
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-md-7 col-lg-6 col-xl-5">
                  <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-body">
                      <form onSubmit={handleSubmit}>
                        <div className="row g-4">
                          <div className="col-12">
                            <div className="form-group">
                              <label className="form-label" htmlFor="username">
                                New Password
                              </label>
                              <div className="form-control-wrap">
                                <input
                                  onChange={e=>handleInputChange(e)}
                                  type="text"
                                  name="newPassword"
                                  id="newPassword"
                                  className="form-control form-control-lg"
                                  placeholder="Enter New Password"
                                  required
                                />
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
                                Submit
                              </button>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <p className="text-danger text-center"></p>
                            </div>
                          </div>
                        </div>
                        {success && <div className="alert alert-success my-3" role="alert">{success}</div>}
                        {error && <div className="alert alert-danger my-3" role="alert">{error}</div>}
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
