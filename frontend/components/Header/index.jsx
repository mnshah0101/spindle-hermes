import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ModeSwitch from '../ModeSwitch';
import Button from '../Button';
import { useRouter } from 'next/router';
import Icon from '../Icon';
import Logo from '../Logo';
import { useSession } from 'next-auth/react';

export default function HeaderStyle1({
  varient,
  logoUrl,
  darkLogoUrl,
  language,
  loginBtn,
  actionBtnText,
  actionBtnUrl,
  actionBtnClass,
  menuPosition,
}) {
  const router = useRouter();
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isLanguage, setIsLanguage] = useState(false);

  const { data: session } = useSession();
  const [user, setUser] = useState(null);



useEffect(() => {
  if (session) {
    setUser(session.user);
  }
}, [session]);


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);
  return (
    <header
      className={`nk-header-main nk-menu-main will-shrink ignore-mask ${
        mobileToggle ? 'header-menu-shown' : ''
      } ${varient ? varient : ''} ${isSticky ? 'has-fixed' : ''}`}
    >
      <div className="container">
        <div className="nk-header-wrap">
          <div className="nk-header-logo">
            <Logo logoUrl={logoUrl} darkLogoUrl={darkLogoUrl} href="/" />
          </div>
          <div className="nk-header-toggle">
            <ModeSwitch />
            <button
              className="btn btn-light btn-icon header-menu-toggle"
              onClick={() => !setMobileToggle(!mobileToggle)}
            >
              <Icon icon="menu" className="icon" />
            </button>
          </div>
          {mobileToggle && (
            <div
              className="header-menu-overlay"
              onClick={() => setMobileToggle(!mobileToggle)}
            />
          )}
          <nav
            className={`nk-header-menu nk-menu ${
              mobileToggle ? 'header-menu-active' : ''
            }`}
          >
            <ul
              className={`nk-menu-list ${
                menuPosition ? menuPosition : 'mx-auto'
              }`}
            >
                <li
                className={`nk-menu-item ${
                  router.pathname === '/' ? 'active' : ''
                }`}
              >
                <Link href="/" className="nk-menu-link">
                  <span className="nk-menu-text">Home</span>
                </Link>
              </li>
              <li
                className={`nk-menu-item ${
                  router.pathname === '/usecase' ? 'active' : ''
                }`}
              >
                <Link href="/usecase" className="nk-menu-link">
                  <span className="nk-menu-text">Use Cases</span>
                </Link>
              </li>
              <li
                className={`nk-menu-item ${
                  router.pathname === '/features' ? 'active' : ''
                }`}
              >
                <Link href="/features" className="nk-menu-link">
                  <span className="nk-menu-text">Features</span>
                </Link>
              </li>
               <li
                className={`nk-menu-item ${
                  router.pathname === '/about' ? 'active' : ''
                }`}
              >
                <Link href="/about" className="nk-menu-link">
                  <span className="nk-menu-text">About</span>
                </Link>
              </li>
              
            </ul>
            <div className="mx-2 d-none d-lg-block">
            </div>
            <ul className="nk-menu-buttons flex-lg-row-reverse">
              <li>
                <Button
                  href={actionBtnUrl ? actionBtnUrl : '/'}
                  btnText={actionBtnText}
                  btnClass={actionBtnClass}
                />
              </li>
                <li>
                  {user ? (<div>
                  <Link className="link link-dark" href="/dashboard">
                    <span className="nk-menu-text">Dashboard</span>
                    </Link>
                    </div>
                    ) : (
                  <Link className="link link-dark" href="/login">
                    <span className="nk-menu-text">{loginBtn}</span>
                      </Link>
                  )}
                   
                 
                
                </li>
              {language && (
                <li className="dropdown">
                  <span
                    className={`link link-base fw-medium dropdown-toggle ${
                      isLanguage ? 'show' : ''
                    }`}
                    onClick={() => setIsLanguage(!isLanguage)}
                  >
                    En (US)
                  </span>
                  <ul
                    className={`dropdown-menu dropdown-menu-end shadow-sm border-0 ${
                      isLanguage ? 'show' : ''
                    }`}
                  >
                    <li>
                      <Link
                        className="dropdown-item link-base py-2 px-4"
                        href="/"
                      >
                        Albanian (SQ)
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item link-base py-2 px-4"
                        href="/"
                      >
                        Chinese (ZS)
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item link-base py-2 px-4"
                        href="/"
                      >
                        French (FR)
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
