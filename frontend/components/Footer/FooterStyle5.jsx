import React from 'react';
import Button from '../Button';
import MenuWidget from '../Widget/MenuWidget';
import ContactWidget from '../Widget/ContactWidget';
import Copyright from '../Widget/Copyright';
import SocialWidget from '../Widget/SocialWidget';
import Logo from '../Logo';
import logoUrl from '../../public/images/logo-dark.png';
import darkLogoUrl from '../../public/images/logo.png';

const useCaseMenu = [
  { href: '/', title: 'AI Writer' },
  { href: '/', title: 'AI Articel Writer' },
  { href: '/', title: 'Content Generator' },
  { href: '/', title: 'Content Rewriter' },
  { href: '/', title: 'Blog Post Writer' },
];

const aboutMenu = [
  { href: '/', title: 'Pricing' },
  { href: '/', title: 'Login' },
  { href: '/', title: 'Sign up' },
  { href: '/', title: 'Privacy Policy' },
  { href: '/', title: 'Terms & Conditions' },
];

const socialList = [
  { href: '/', class: 'facebook-fill' },
  { href: '/', class: 'twitter-round' },
  { href: '/', class: 'youtube-round' },
];

export default function FooterStyle5() {
  return (
    <footer className="nk-footer pt-4 pt-lg-7">
      <div className="section section-top-0">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 col-md-9 me-auto">
              <div className="block-text">
                <Logo
                  logoUrl={logoUrl}
                  darkLogoUrl={darkLogoUrl}
                  linkClasses="logo-link mb-4"
                  href="/"
                />
                <p className="fs-4 text-heading">
                  Earn up to 30% Lifetime Commission as an Affiliate!
                </p>
                <ul className="btn-list btn-list-inline g-0">
                  <li>
                    <Button
                      href="/"
                      btnText="Become an Affiliate"
                      btnClass="btn btn-lg btn-primary"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
              <MenuWidget
                titleClass="overline-title text-heading mb-3"
                title="Use Case"
                menuItems={useCaseMenu}
              />
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
              <MenuWidget
                titleClass="overline-title text-heading mb-3"
                title="About"
                menuItems={aboutMenu}
              />
            </div>
            <div className="col-lg-3 col-sm-4">
              <ContactWidget
                title="Contacts"
                subTitle="If you need help using our service, or have a question about it, please feel free to contact us."
                email="support@copygen.ai"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <hr className="border-opacity-25 border-white m-0" />
        <div className="py-5">
          <div className="row">
            <div className="col-md">
              <Copyright
                copyrightText="© 2023 CopyGenAI. Template by"
                copyrightLink="https://softnio.com"
                copyrightLinkText="Softnio"
                variant="mb-2 mb-md-0"
                linkClasses="fw-bold text-heading"
              />
            </div>
            <div className="col-md">
              <SocialWidget
                socialList={socialList}
                variant="ustify-content-start justify-content-md-end"
                iconSizeClass="fs-4"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
