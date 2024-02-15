import React from 'react';
import Header from '../Header';
import FooterStyle4 from '../Footer/FooterStyle4';
import Head from 'next/head';
import logoUrl from '../../public/images/logo-dark.png';
import darkLogoUrl from '../../public/images/logo.png';

export default function Layout4({ children }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="CopyGen - AI Writer & Copywriting Landing Page Next.js Template."
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div className="nk-app-root">
        <Header
          varient="is-transparent is-dark on-dark"
          logoUrl={logoUrl}
          darkLogoUrl={darkLogoUrl}
          actionBtnText="Get Started"
          actionBtnClass="btn btn-primary"
          actionBtnUrl="/"
          menuPosition="mx-auto"
          language
        />
        <main className="nk-pages">{children}</main>
        <FooterStyle4 />
      </div>
    </>
  );
}
