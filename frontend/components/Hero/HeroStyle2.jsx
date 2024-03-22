import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Button from '../Button';

export default function HeroStyle2({
  title,
  typingText,
  subTitle,
  imgUrl,
  btnText,
  btnUrl,
  btnAlert,
  brandTitle,
  brandSrcList,
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
                <h1 className="title mb-3 mb-lg-4 display-6">
                  {title}
                  <div className="text-gradient-primary">
                    <TypeAnimation
                      sequence={typingText}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </div>
                </h1>
                <p className="lead px-md-8 px-lg-6 px-xxl-12 mb-4 mb-lg-5">
                  {subTitle}
                </p>
                <ul className="btn-list btn-list-inline">
                  <li>
                    <a
                      href={btnUrl}
                      className="btn btn-primary btn-lg rounded-pill"
                    >{btnText}</a>
                  </li>
                </ul>
                <p className="sub-text mt-2">{btnAlert}</p>
              </div>
              <div className="nk-hero-gfx position-relative">
                <Image
                  className="w-100 rounded-4"
                  src={imgUrl}
                  alt="Thumbnail"
                  placeholder="blur"
                />
                <div className="d-none d-md-block position-absolute top-0 end-100 me-5 me-lg-8 me-xl-12 mt-n3">
                  <div className="media media-2xl rounded-pill mx-auto">
                    <Image
                      src="/images/avatar/illustration/a.jpg"
                      alt="Avatar"
                      width={72}
                      height={72}
                    />
                  </div>
                  <div className="badge bg-dark p-2 mt-2 fw-normal text-white text-opacity-75">
                    Hobbyist
                  </div>
                </div>
                <div className="d-none d-md-block position-absolute top-50 end-100 me-3 me-lg-4 mt-n5">
                  <div className="media media-2xl rounded-pill mx-auto">
                    <Image
                      src="/images/avatar/illustration/b.jpg"
                      alt="Avatar"
                      width={72}
                      height={72}
                    />
                  </div>
                  <div className="badge bg-dark p-2 mt-2 fw-normal text-white text-opacity-75">
                    Business Owner
                  </div>
                </div>
                <div className="d-none d-md-block position-absolute top-0 start-100 ms-5 ms-lg-7 ms-xl-10 mt-n7">
                  <div className="media media-2xl rounded-pill mx-auto">
                    <Image
                      src="/images/avatar/illustration/c.jpg"
                      alt="Avatar"
                      width={72}
                      height={72}
                    />
                  </div>
                  <div className="badge bg-dark p-2 mt-2 fw-normal text-white text-opacity-75">
                    Developer
                  </div>
                </div>
                <div className="d-none d-md-block position-absolute top-50 start-100 ms-4 ms-lg-5 mt-n2">
                  <div className="media media-2xl rounded-pill mx-auto">
                    <Image
                      src="/images/avatar/illustration/d.jpg"
                      alt="Avatar"
                      width={72}
                      height={72}
                    />
                  </div>
                  <div className="badge bg-dark p-2 mt-2 fw-normal text-white text-opacity-75">
                    Data Scientist
                  </div>
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
