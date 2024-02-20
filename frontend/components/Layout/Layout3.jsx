import React from 'react';
import Header from '../Header';
import FooterStyle3 from '../Footer/FooterStyle3';
import Head from 'next/head';
import logoUrl from '../../public/images/logo-green-dark.png';
import darkLogoUrl from '../../public/images/logo-green.png';
import { SessionProvider } from 'next-auth/react';

export default function LayoutThree({ children }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="CopyGen - AI Writer & Copywriting Landing Page Next.js Template."
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <SessionProvider>
      <div className="nk-app-root">
        <Header
          varient="has-border"
          logoUrl={logoUrl}
          darkLogoUrl={darkLogoUrl}
          actionBtnText="Get Started"
          actionBtnClass="btn btn-primary"
          actionBtnUrl="/"
          menuPosition="mx-auto"
          language
        />
        <main className="nk-pages">{children}</main>
        <FooterStyle3 />
      </div>
      </SessionProvider>
    </>
  );
}
