import React from 'react';
import Header from '../Header';
import FooterStyle2 from '../Footer';
import Head from 'next/head';
import logoUrl from '../../public/images/logos/spindle_med_purple.png';
import darkLogoUrl from '../../public/images/logos/spindle_med_white.png';
import { SessionProvider } from 'next-auth/react';
export default function Layout2({ children }) {
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
      <div className="nk-app-root  bg-darker">
        <Header
          varient="is-transparent is-dark on-dark"
          logoUrl={logoUrl}
          darkLogoUrl={darkLogoUrl}
          actionBtnText="Deploy"
          actionBtnClass="btn btn-outline-primary rounded-pill"
          actionBtnUrl="/deploy"
          menuPosition="me-auto"
          loginBtn="Sign in"
        />
        <main className="nk-pages">{children}</main>
        <FooterStyle2 />
      </div>
     </SessionProvider>
    </>
  );
}
