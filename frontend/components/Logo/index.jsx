import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Logo({ logoUrl, darkLogoUrl, linkClasses }) {
  return (
    <Link href="/" className={`${linkClasses ? linkClasses : 'logo-link'}`}>
      <div className="logo-wrap">
        <Image height={126*7} width={26*7} className="logo-img logo-light" src={darkLogoUrl} alt="Logo" />
        <Image height={126*7} width={26*7} className="logo-img logo-dark" src={logoUrl} alt="Logo" />
      </div>
    </Link>
  );
}
