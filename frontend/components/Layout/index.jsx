import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Head from 'next/head';
import logoUrl from '../../public/images/logo-dark.png';
import darkLogoUrl from '../../public/images/logo.png';

export default function Layout({ children }) {
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
          varient="is-transparent"
          logoUrl={logoUrl}
          darkLogoUrl={darkLogoUrl}
          actionBtnText="Start Writing"
          actionBtnClass="btn btn-primary"
          actionBtnUrl="/"
          menuPosition="mx-auto"
          loginBtn="Login"
        />
        <main className="nk-pages">{children}</main>
        <Footer />
      </div>
    </>
  );
}
