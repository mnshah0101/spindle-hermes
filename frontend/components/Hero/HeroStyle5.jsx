import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';
import Button from '../Button';

export default function HeroStyle5({
  upTitle,
  title,
  subTitle,
  bnt1Text,
  btn1Url,
  btn2Text,
  btn2Url,
  alertMessage,
  thumbImgUrl,
}) {
  return (
    <header className="nk-header has-shape">
      <div className="nk-shape bg-shape-blur-q mt-n20p ms-10p start-50 translate-middle-x" />
      <div className="nk-shape bg-shape-blur-r mt-n10p ms-n10p start-50 translate-middle-x" />
      <div className="nk-shape bg-shape-border-a mt-n10 ms-40p start-50 top-100 translate-middle-x" />
      <div className="nk-shape bg-shape-border-b mt-n9 ms-30p start-50 translate-middle-x" />
      <div className="nk-shape bg-shape-border-c mt-12 ms-n40p start-50 translate-middle-x" />
      <div className="nk-hero pt-4 pt-lg-6 pt-xl-12 pb-xl-4">
        <div className="container">
          <div className="row g-gs align-items-center justify-content-center justify-content-xl-between flex-xl-row-reverse text-center text-xl-start">
            <div className="col-xl-6 col-xxl-5 col-lg-7 col-md-10">
              <div className="nk-hero-gfx me-xxl-n7">
                <div className="p-1 rounded-3 bg-gradient-primary">
                  <Image
                    className="w-100 rounded-3"
                    alt="Banner"
                    src={thumbImgUrl}
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-11">
              <div className="nk-hero-content">
                {upTitle && (
                  <h5 className="text-uppercase fw-normal mb-3">
                    {parse(upTitle)}
                  </h5>
                )}
                <h1 className="title mb-3 mb-lg-4">{parse(title)}</h1>
                <p className="lead ">{parse(subTitle)}</p>
                <ul className="btn-list btn-list-inline py-3 gy-3">
                  <li>
                    <Button
                      href={btn1Url}
                      btnText={bnt1Text}
                      btnClass="btn btn-primary btn-lg"
                      leftIconClass="google"
                    />
                  </li>
                  <li>
                    <Button
                      href={btn2Url}
                      btnText={btn2Text}
                      btnClass="btn btn-light btn-lg"
                      rightIconClass="arrow-long-right"
                    />
                  </li>
                </ul>
                <p className="sub-text mt-2">{parse(alertMessage)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
