import Head from 'next/head';
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import Link from 'next/link';
import {useState} from 'react';
import dotenv from 'dotenv'
import {useRouter} from 'next/router';
import { signIn } from 'next-auth/react';
import Loader from '../components/Loader';



dotenv.config();

function isValidString(str) {
    return /^[a-zA-Z0-9-_]+$/.test(str);
}


export default function RegisterPage() {
  const router = useRouter();
  const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value, id } = e.target;
    console.log(name, value);
    
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (id === 'password') {
      console.log('password', value);
      setPassword(value);
    }
  }
  const handleSubmit = async (e) => {
    setError('');
    e.preventDefault();
    const data = { username, email, password };
    if(!username || !email || !password){
      setError('Username, email and password are required');
      return;
    }
    if(!isValidString(username)){
      setError('Username can only contain letters, numbers, - and _');
      return;
    }
    try{

      setLoading(true);
    let response = await fetch(NEXT_PUBLIC_SERVER_URL+'/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    setLoading(false);



    if(response.status != 201 && response.status != 200){

      setError("The username or email is already taken. Please try again");
      throw new Error("The username or email is already taken. Please try again");
    }


    


      setError('');
      console.log("signing in")
      let sign_in_response = await signIn('credentials', {
        redirect: false,
        username,
        password
      });
      if(sign_in_response.error){
        setError(sign_in_response.error);
        return;
      }
      else{
        setError('');
        router.push('/dashboard');
 

    }

  }catch(err){
    setLoading(false);
    console.log('error hit')
    setError("The username or email is already taken. Please try again")
    console.log(err);
  }
  }




  return (
    <>
      <Head>
        <title>
          Register - Spindle - Automated API and Database Manager
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
              title="Create Spindle account"
            />
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-md-7 col-lg-6 col-xl-5">
                  <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-body">
                      <form action="success" onSubmit={e=>handleSubmit(e)}>
                        <div className="row g-4">
                          <div className="col-12">
                            <div className="form-group">
                              <label className="form-label" htmlFor="username">
                                Username
                              </label>
                              <div className="form-control-wrap">
                                <input
                                  onChange={e=>handleInputChange(e)}

                                  type="text"
                                  name="username"
                                  id="username"
                                  className="form-control form-control-lg"
                                  placeholder="Your username"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label
                                className="form-label"
                                htmlFor="email"
                              >
                                Email Address
                              </label>
                              <div className="form-control-wrap">
                                <input
                                onChange={e=>handleInputChange(e)}
                                  type="email"
                                  name="email"
                                  id="email"
                                  className="form-control form-control-lg"
                                  placeholder="name@spindle.com"
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
                            <div className="d-flex flex-wrap justify-content-between">
                              <div className="form-check form-check-sm">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue
                                  id="iAgree"
                                  required
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

                          <div className="col-12">
                            <div className="form-note text-danger">
                              {error}
                            </div>
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
        <Loader enabled={loading} />
      </Layout>
    </>
  );
}
