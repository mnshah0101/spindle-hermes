import React from 'react';
import Header from '../Header';
import FooterStyle2 from '../Footer/FooterStyle2';
import Head from 'next/head';
import logoUrl from '../../public/images/logo-dark.png';
import darkLogoUrl from '../../public/images/logo.png';

export default function Layout2({ children }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="CopyGen - AI Writer & Copywriting Landing Page Next.js Template."
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div className="nk-app-root  bg-darker">
        <Header
          varient="is-transparent is-dark on-dark"
          logoUrl={logoUrl}
          darkLogoUrl={darkLogoUrl}
          actionBtnText="Get Started"
          actionBtnClass="btn btn-outline-primary rounded-pill"
          actionBtnUrl="/"
          menuPosition="me-auto"
          loginBtn="Sign in"
        />
        <main className="nk-pages">{children}</main>
        <FooterStyle2 />
      </div>
    </>
  );
}
