import React from 'react';
import TextWidget from '../Widget/TextWidget';
import Copyright from '../Widget/Copyright';
import MenuWidgetStyle2 from '../Widget/MenuWidgetStyle2';
import MenuWidget from '../Widget/MenuWidget';
import ContactInfoList from '../Widget/ContactInfoList';
import logoUrl from '../../public/images/logo-green-dark.png';
import darkLogoUrl from '../../public/images/logo-green.png';

const companyMenu = [
  { href: '/', title: 'About Us' },
  { href: '/', title: 'Careers' },
  { href: '/', title: 'Community' },
  { href: '/', title: 'Creator Program' },
];
const useCaseMenu = [
  { href: '/', title: 'Blog writing' },
  { href: '/', title: 'Social media Ads' },
  { href: '/', title: 'Creative writing' },
  { href: '/', title: 'Magic command' },
];
const useCaseMenu2 = [
  { href: '/', title: 'Contact Us' },
  { href: '/', title: 'Weekly Demos' },
  { href: '/', title: 'Report a Bug' },
  { href: '/', title: 'Request a New Feature' },
];
const bottomMenu = [
  { href: '/', title: 'Terms' },
  { href: '/', title: 'Privacy Policy' },
];
const contactInfoList = [
  { iconClass: 'mail-fill', info: 'support@copygen.com' },
  { iconClass: 'call-alt-fill', info: '+(642) 342 762 44' },
  {
    iconClass: 'map-pin-fill',
    info: '442 Belle St Floor 7, San Francisco, AV 4206',
  },
];

export default function FooterStyle3() {
  return (
    <footer className="nk-footer">
      <div className="section section-sm section-top-0">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-4 col-lg-7 col-md-9 me-auto">
              <TextWidget
                logoUrl={logoUrl}
                darkLogoUrl={darkLogoUrl}
                subTitle="CopyGen is an artificial intelligence trained to automate
                important tasks such as writing optimized product
                descriptions, high-converting ad copy, blog outlines, and
                more!"
                variant="pe-xxl-5"
              />
            </div>
            <div className="col-xl">
              <div className="row g-gs">
                <div className="col-lg-3 col-sm-4 col-6">
                  <MenuWidget
                    titleClass="overline-title text-heading"
                    title="Company"
                    menuItems={companyMenu}
                  />
                </div>
                <div className="col-lg-3 col-sm-4 col-6">
                  <MenuWidget
                    titleClass="overline-title text-heading"
                    title="Use Case"
                    menuItems={useCaseMenu}
                  />
                </div>
                <div className="col-lg-3 col-sm-4 col-6">
                  <MenuWidget
                    titleClass="overline-title text-heading"
                    title="Use Case"
                    menuItems={useCaseMenu2}
                  />
                </div>
                <div className="col-lg-3 col-md-5 col-sm-6">
                  <ContactInfoList
                    title="Get In Touch"
                    menuItems={contactInfoList}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-0">
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
                  linkClasses="fw-bold text-base"
                />
              </div>
              <div className="col-md">
                <MenuWidgetStyle2 menuItems={bottomMenu} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
