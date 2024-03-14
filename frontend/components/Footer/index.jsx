import React from 'react';
import MenuWidget from '../Widget/MenuWidget';
import TextWidget from '../Widget/TextWidget';
import Copyright from '../Widget/Copyright';
import logoUrl from '../../public/images/logos/spindle_med_purple.png';
import darkLogoUrl from '../../public/images/logos/spindle_med_white.png';

const useCaseMenu = [
  { href: '/usecase/data-migration', title: 'Data Migration' },
  { href: '/usecase/data-analysis', title: 'Data Analysis' },
  { href: '/usecase/e-commerce', title: 'E-Commerce' },
  { href: '/usecase/supply-chain', title: 'Supply Chain Management' },
  { href: '/usecase/crm', title: 'CRM' },
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
  { href: '/', title: 'FAQs' }];

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
                title="Spindle"
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
                subTitle="Automatically generate and host dozens of APIs for your projects."
              />
              <Copyright
                copyrightText="© 2024 Spindle by Hermes Group"
                copyrightLink="https://hermesgroup.dev"
                copyrightLinkText="HERMES"
                variant="text-heading mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
