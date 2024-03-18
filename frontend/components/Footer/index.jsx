import React from 'react';
import { useState } from 'react';
import MenuWidget from '../Widget/MenuWidget';
import TextWidget from '../Widget/TextWidget';
import Copyright from '../Widget/Copyright';
import logoUrl from '../../public/images/logos/spindle_med_purple.png';
import ContactInfo from '../ContactInfo';
import darkLogoUrl from '../../public/images/logos/spindle_med_white.png';

const useCaseMenu = [
  { href: '/', title: 'Data Migration' },
  { href: '/', title: 'Data Analysis' },
];
const aboutMenu = [
  { href: '/login', title: 'Login' },
  { href: '/register', title: 'Sign up' },
];
const copygenMenu = [
  { href: '/', title: 'FAQs' }];

export default function Footer() {
  const [onContact, setOnContact] = useState(false);

  function handleClicked(e) {
    setOnContact(!onContact);
  }

  function handleClose() {
    setOnContact(false);
  }

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
              <p className="link-base my-1" onClick={(e) => handleClicked(e)} style={{ cursor: 'pointer' }} >Contact</p>
              {onContact && <ContactInfo onClose={handleClose}/>}
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
