import Link from 'next/link';
import React from 'react';

export default function Copyright({
  copyrightText,
  copyrightLink,
  copyrightLinkText,
  variant,
  linkClasses,
}) {
  return (
    <p className={`nk-copyright ${variant ? variant : ''}`}>
      {copyrightText}{' '}
      <Link
        target="_blank"
        href={copyrightLink}
        className={linkClasses ? linkClasses : ''}
      >
        {copyrightLinkText}
      </Link>
    </p>
  );
}
