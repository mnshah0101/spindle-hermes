import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Head from 'next/head';
import logoUrl from '../../public/images/logos/spindle_med_purple.png';
import darkLogoUrl from '../../public/images/logos/spindle_med_white.png';
import { SessionProvider } from 'next-auth/react';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Spindle - Create a MongoDB database with a host of your own custom API endpoints a single click."
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
          <SessionProvider>
      <div className="nk-app-root">
      
        <Header
          varient="is-transparent"
          logoUrl={logoUrl}
          darkLogoUrl={darkLogoUrl}
          actionBtnText="Deploy "
          actionBtnClass="btn btn-primary"
          actionBtnUrl="/deploy"
          menuPosition="mx-auto"
          loginBtn="Login"
        />
      
        <main className="nk-pages">{children}</main>
       
        <Footer />

      </div>
      </SessionProvider>
    </>
  );
}
