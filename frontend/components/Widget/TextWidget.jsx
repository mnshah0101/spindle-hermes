import React from 'react';
import Logo from '../Logo';

export default function TextWidget({
  logoUrl,
  darkLogoUrl,
  title,
  subTitle,
  variant,
  titleClass,
}) {
  return (
    <div className={variant ? `block-text ${variant}` : 'block-text'}>
      <Logo
        logoUrl={logoUrl}
        darkLogoUrl={darkLogoUrl}
        href="/"
        linkClasses="logo-link mb-4"
      />
      {title && <h4 className={`title ${titleClass}`}>{title}</h4>}
      <p>{subTitle}</p>
    </div>
  );
}
