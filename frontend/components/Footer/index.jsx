import React from 'react';
import MenuWidget from '../Widget/MenuWidget';
import TextWidget from '../Widget/TextWidget';
import Copyright from '../Widget/Copyright';
import logoUrl from '../../public/images/logo-dark.png';
import darkLogoUrl from '../../public/images/logo.png';

const useCaseMenu = [
  { href: '/usecase/ai-writer', title: 'AI Writer' },
  { href: '/usecase/ai-articel-writer', title: 'AI Articel Writer' },
  { href: '/usecase/content-generator', title: 'Content Generator' },
  { href: '/usecase/ai-content-writing', title: 'AI Content Writing' },
  { href: '/usecase/content-rewriter', title: 'Content Rewriter' },
  { href: '/usecase/blog-post-writer', title: 'Blog Post Writer' },
];
const aboutMenu = [
  { href: '/pricing', title: 'Pricing' },
  { href: '/login', title: 'Login' },
  { href: '/register', title: 'Sign up' },
  { href: '/terms-condition', title: 'Privacy Policy' },
  { href: '/terms-condition', title: 'Terms & Conditions' },
];
const copygenMenu = [
  { href: '/contact', title: 'Contact Us' },
  { href: '/', title: 'FAQs' },
  { href: '/', title: 'Affiliate Program' },
];

export default function Footer() {
  return (
    <footer className="nk-footer">
      <div className="section">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-3 col-sm-4 col-6">
              <MenuWidget
                titleClass="overline-title text-heading mb-3"
                title="Use Case"
                menuItems={useCaseMenu}
              />
            </div>
            <div className="col-xl-2 col-sm-4 col-6">
              <MenuWidget
                titleClass="overline-title text-heading mb-3"
                title="About"
                menuItems={aboutMenu}
              />
            </div>
            <div className="col-xl-2 col-sm-4 col-6">
              <MenuWidget
                titleClass="overline-title text-heading mb-3"
                title="CopyGen"
                menuItems={copygenMenu}
              />
            </div>
            <div className="col-xl-4 col-lg-7 col-md-9 me-auto order-xl-first">
              <TextWidget
                logoUrl={logoUrl}
                darkLogoUrl={darkLogoUrl}
                logoWidth="125"
                logoHeight="26"
                title="Save time. Get inspired."
                subTitle="Automatically genarate blog articles, website copy, landing
                pages & digital ads for your business in seconds. Unleash
                the most advanced AI writer to boost your traffic and
                productitvity."
              />
              <Copyright
                copyrightText="© 2023 CopyGenAI. Template Made By"
                copyrightLink="https://softnio.com"
                copyrightLinkText="Softnio"
                variant="text-heading mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
