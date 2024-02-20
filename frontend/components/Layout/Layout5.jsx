import React from 'react';
import Header from '../Header';
import FooterStyle5 from '../Footer/FooterStyle5';
import Head from 'next/head';
import logoUrl from '../../public/images/logo-dark.png';
import darkLogoUrl from '../../public/images/logo.png';
import { SessionProvider } from 'next-auth/react';

export default function Layout5({ children }) {
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
      <div className="nk-app-root has-mask">
        <div className="nk-mask bg-pattern-dot-white-sm"></div>
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
        <FooterStyle5 />
      </div>
      </SessionProvider>
    </>
  );
}
