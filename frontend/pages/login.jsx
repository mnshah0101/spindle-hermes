import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import SocialWidget2 from '../components/Widget/SocialWidget2';
import SectionHeading from '../components/SectionHeading';
import Link from 'next/link';
import InputFieldPassword from '../components/FormField/InputFieldPassword';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import {useRouter} from 'next/router';


export default function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const data = { username, password };
    if(!username || !password){
      setError('Username and password are required');
      return;
    }
    try{
      let response = await signIn('credentials', {
        redirect: false,
        username,
        password
      });
      
      if(response.error){
        setError(result.error);
      }
      else{
        setError('');
        router.push('/');
      }

      
    }catch(err){
      setError("Wrong username or password. Please try again")
      console.log(err);
    }
  }





  return (
    <>
      <Head>
        <title>
          Login - Spindle
        </title>
      </Head>
      <Layout>
        <div className="nk-header" />
        <section className="section section-bottom-0 pb-5 has-mask">
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
          <div className="container">
            <SectionHeading
              overlineTitle="Welcome Back!"
              title="Login to continue"
            />
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-md-7 col-lg-6 col-xl-5">
                  <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-body">
                      <form  onSubmit={e=>handleSubmit(e)}>
                        <div className="row g-4">
                          <div className="col-12">
                            <div className="form-group">
                              <label
                                className="form-label"
                                htmlFor="username"
                              >
                                Username
                              </label>
                              <div className="form-control-wrap">
                                <input
                                onChange={e=>handleInputChange(e)}
                                  type="text"
                                  name="username"
                                  id="username"
                                  className="form-control form-control-lg"
                                  placeholder="Enter Username"
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
                                <div className="form-control-wrap">
      <button
        type="button"
        className="form-control-icon end password-toggle border-0 bg-transparent"
        title="Toggle show/hide password"
        onClick={togglePasswordVisibility}
      >
        <em
          className={`on icon ni ${
            showPassword ? 'ni-eye-off' : 'ni-eye'
          } text-base`}
        />
      </button>
      <input
        type={showPassword ? 'text' : 'password'}
        onChange={e=>handleInputChange(e)}
        className="form-control form-control-lg"
        placeholder="Enter Password"
        name = "password"
        id = "password"
        required
      />
    </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-flex flex-wrap justify-content-between has-gap g-3">
                              <div className="form-group">
                             
                              </div>
                              <Link href="reset" className="small">
                                Forgot Password?
                              </Link>
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

                          <div className="col-12">
                            <div className="form-group">
                              <p className="text-danger text-center">
                                {error}
                              </p>
                            </div>
                              </div>
                        
                        </div>
                      </form>
                    </div>
                  </div>
                  <p className="text-center mt-4">
                    {`Don't have an account? `}
                    <Link href="register">Register</Link>
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
