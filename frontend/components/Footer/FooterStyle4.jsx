import React from 'react';
import Copyright from '../Widget/Copyright';
import MenuWidgetStyle2 from '../Widget/MenuWidgetStyle2';
import MenuWidget from '../Widget/MenuWidget';
import TextWidget from '../Widget/TextWidget';
import logoUrl from '../../public/images/logo-dark.png';
import darkLogoUrl from '../../public/images/logo.png';

const useCaseMenu = [
  { href: '/usecase/ai-wewriter', title: 'AI Rewriter' },
  { href: '/usecase/ai-articel-writer', title: 'AI Articel Writer' },
  { href: '/usecase/creative-writing', title: 'Creative writing' },
  { href: '/usecase/content-generator', title: 'Content Generator' },
  { href: '/usecase/ai-content-writing', title: 'AI Content Writing' },
  { href: '/usecase/content-rewriter', title: 'Content Rewriter' },
  { href: '/usecase/blog-post-writer', title: 'Blog Post Writer' },
];

const aboutMenu = [
  { href: '/pricing', title: 'Pricing' },
  { href: '/login', title: 'Login' },
  { href: '/register', title: 'Sign up' },
  { href: '/index-s4', title: 'Privacy Policy' },
  { href: '/terms-condition', title: 'Terms & Conditions' },
];

const copygenMenu = [
  { href: '/contact', title: 'Contact Us' },
  { href: '/index-s4', title: 'FAQs' },
  { href: '/index-s4', title: 'Affiliate Program' },
];

const bottomMenu = [
  { href: '/terms-condition', title: 'Terms' },
  { href: '/index-s4', title: 'Privacy Policy' },
];

export default function FooterStyle4() {
  return (
    <footer className="nk-footer bg-darker is-dark has-mask has-shape pt-6 overflow-hidden">
      <div className="nk-mask bg-angle bg-angle-bottom bg-angle-flip bg-angle-white" />
      <div className="nk-shape bg-shape-blur-n ms-n30p mt-n20p start-50 translate-middle-x" />
      <div className="nk-shape bg-shape-blur-o ms-30p mb-n30p start-50 translate-middle-x" />
      <div className="section section-sm bg-transparent">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-4 col-lg-7 col-md-9 me-auto">
              <TextWidget
                variant="pe-xxl-5"
                logoUrl={logoUrl}
                darkLogoUrl={darkLogoUrl}
                title="Save time. Get inspired."
                titleClass="mb-3"
                subTitle="CopyGen is an artificial intelligence trained to automate important tasks such as writing optimized product descriptions, high-converting ad copy, blog outlines, and more!"
              />
            </div>
            <div className="col-xl">
              <div className="row g-gs">
                <div className="col-lg-4 col-sm-4 col-6">
                  <MenuWidget
                    titleClass="overline-title text-heading mb-4"
                    title="Use Case"
                    menuItems={useCaseMenu}
                  />
                </div>
                <div className="col-lg-4 col-sm-4 col-6">
                  <MenuWidget
                    titleClass="overline-title text-heading mb-4"
                    title="About"
                    menuItems={aboutMenu}
                  />
                </div>
                <div className="col-lg-4 col-sm-4 col-6">
                  <MenuWidget
                    titleClass="overline-title text-heading mb-4"
                    title="CopyGen"
                    menuItems={copygenMenu}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-0 bg-transparent">
        <hr className="border-opacity-25 border-primary m-0" />
        <div className="container">
          <div className="py-4">
            <div className="row">
              <div className="col-md">
                <Copyright
                  copyrightText="Copyright © 2023. Template Made by"
                  copyrightLink="https://softnio.com"
                  copyrightLinkText="Softnio"
                  variant="mb-2 mb-md-0"
                  linkClasses="fw-bold text-white"
                />
              </div>
              <div className="col-md">
                <MenuWidgetStyle2
                  menuItems={bottomMenu}
                  linkColorClass="link-base"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
