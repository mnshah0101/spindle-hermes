"use client"
import Head from 'next/head';
import React from 'react';
import Layout from '../../components/Layout';
import APIPage from '../../components/APIs/APIPage';
import SectionHeading from '../../components/SectionHeading';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Database() {
  const router = useRouter();
  const id = router.query.id;
  const { data: session, status } = useSession();
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    if(status === 'loading') return;
    if(status==='unauthenticated'){
        router.push('/login');
    }
    if(!session) return;
    const user_id = session.user.id;
    const fetchData = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL+'/checkIfOwner', {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ api_id: id, user_id })
        })
        console.log(res);
        if(res.status === 200) {
          setIsOwner(true);
        }
      } catch(error) {
        console.log(error);
      }
    };

    fetchData();
    console.log(`user is owner ${isOwner}`);
  }, [session, id])
 
  



  return (
    <>
      <Head>
        <title>
          Documentation Page
        </title>
      </Head>
      <Layout>
        <div className="nk-header"></div>
        <section className="section section-sm section-bottom-0 pb-5 has-mask">
          <div className="nk-mask bg-pattern-dot bg-blend-around " />
            <SectionHeading
                overlineTitle="Official Documentation"
                title="Full API Documentation"
                containerWidthClass="col-lg-10 col-xl-9 col-xxl-8 mb-7"
                variant="h1"
                />

            <APIPage id={id} isOwner={isOwner} />
             
         
        </section>
      </Layout>
    </>
  );
}
