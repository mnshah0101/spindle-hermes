import React from 'react';
import SocialWidget from './SocialWidget';
import Logo from '../Logo';

export default function TextWidgetStyle2({ logoUrl, darkLogoUrl, socialList }) {
  return (
    <div className="block-text">
      <Logo
        logoUrl={logoUrl}
        darkLogoUrl={darkLogoUrl}
        href="/"
        linkClasses="logo-link mb-4"
      />
      <SocialWidget socialList={socialList} iconSizeClass="fs-3" />
    </div>
  );
}
