// import Image from 'next/image';
import Image from 'next/image';
import React from 'react';
import Button from '../Button';

export default function Hero({
  title,
  subTitle,
  href,
  btnText,
  alertText,
  imgUrl,
  imgAlt,
}) {
  return (
    <section className="nk-header has-mask">
      <div className="nk-mask bg-gradient-a" />
      <div className="nk-mask bg-pattern-dot bg-blend-top" />
      <div className="nk-hero pt-xl-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              <div className="nk-hero-content py-5 py-lg-6">
                <h1 className="title mb-3 mb-lg-4">{title}</h1>
                <p className="lead px-md-8 px-lg-6 mb-4 mb-lg-5">{subTitle}</p>
                <ul className="btn-list btn-list-inline">
                  <li>
                    <Button
                      href={href}
                      btnClass="btn btn-secondary btn-lg"
                      btnText={btnText}
                    />
                  </li>
                </ul>
                <p className="sub-text mt-2">{alertText}</p>
              </div>
              <div className="nk-hero-gfx">
                <Image
                  className="w-100 rounded-top-4"
                  src={imgUrl}
                  alt={imgAlt}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
