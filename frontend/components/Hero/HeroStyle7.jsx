import React from 'react';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '../Icon';

export default function HeroStyle7({
  title,
  subTitle,
  btn1Text,
  btn1Url,
  btn2Text,
  btn2Url,
  btnAlert,
  brandTitle,
  brandSrcList,
  thumbImgUrl,
}) {
  return (
    <section className="nk-header bg-darker is-dark has-mask">
      <div className="nk-mask bg-pattern-dot-white-sm bg-blend-bottom" />
      <div className="nk-hero py-xl-5 overflow-hidden has-shape">
        <div className="nk-shape bg-shape-blur-b mt-n5 start-50 top-50 translate-middle" />
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-11 col-xl-10 col-xxl-9">
              <div className="nk-hero-content py-5 py-lg-6">
                <h1 className="title mb-3 mb-lg-4 display-6">{parse(title)}</h1>
                <p className="lead px-md-8 px-lg-6 px-xxl-12 mb-4 mb-lg-5">
                  {subTitle}
                </p>
                <ul className="btn-list btn-list-inline gy-4">
                  <li>
                    <Link
                      href={btn1Url}
                      className="btn btn-primary btn-lg rounded-pill"
                    >
                      <Icon icon="google" className="icon" />
                      <span>{btn1Text}</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={btn2Url}
                      className="btn btn-light btn-lg rounded-pill"
                    >
                      <span>{btn2Text}</span>
                      <Icon icon="arrow-long-right" className="icon" />
                    </Link>
                  </li>
                </ul>
                <p className="sub-text mt-4">{parse(btnAlert)}</p>
              </div>
              <div className="nk-hero-gfx position-relative">
                <div className="bg-gradient-primary rounded-4 p-0-5 bg-opacity-70">
                  <Image
                    className="w-100 rounded-4"
                    alt="Thumb"
                    src={thumbImgUrl}
                    placeholder="blur"
                  />
                </div>
              </div>
              <div className="nk-hero-content py-6">
                <h6 className="lead-text">{brandTitle}</h6>
                <ul className="d-flex flex-wrap justify-content-center pt-4 has-gap gy-3">
                  {brandSrcList?.map((item, index) => (
                    <li className="px-3 px-sm-5" key={index}>
                      <img className="h-2rem" src={item} alt="Brand" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
