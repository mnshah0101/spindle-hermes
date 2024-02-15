import Link from 'next/link';
import React, { useState } from 'react';

export default function DropDown({ children, menuTitle, megaMenuClass }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const handelMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };
  return (
    <>
      <span
        className="nk-menu-link nk-menu-toggle"
        onClick={handelMobileToggle}
      >
        <span className="nk-menu-text">{menuTitle}</span>
      </span>
      <div
        className={`${
          megaMenuClass
            ? `nk-menu-dropdown ${megaMenuClass}`
            : 'nk-menu-dropdown'
        } ${mobileToggle ? 'd-block' : ''}`}
      >
        {children}
      </div>
    </>
  );
}
