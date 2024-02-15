import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Logo({ logoUrl, darkLogoUrl, linkClasses }) {
  return (
    <Link href="/" className={`${linkClasses ? linkClasses : 'logo-link'}`}>
      <div className="logo-wrap">
        <Image className="logo-img logo-light" src={darkLogoUrl} alt="Logo" />
        <Image className="logo-img logo-dark" src={logoUrl} alt="Logo" />
      </div>
    </Link>
  );
}
