import React from 'react';
import parse from 'html-react-parser';
import Button from '../Button';
import Image from 'next/image';

export default function HeroStyleThree({
  title,
  subTitle,
  bnt1Text,
  btn1Url,
  btn2Text,
  btn2Url,
  alertMessage,
  thumbImg,
}) {
  return (
    <section className="nk-header has-shape">
      <div className="nk-shape bg-shape-blur-c ms-n20p mt-n20p start-50 translate-middle-x" />
      <div className="nk-hero py-7 py-lg-11">
        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-lg-between flex-lg-row-reverse g-gs">
            <div className="col-sm-10 col-md-7 col-lg-6">
              <div className="nk-hero-gfx px-2 px-sm-0 ps-lg-5 ps-xxl-0">
                <Image src={thumbImg} alt="Thumbnail" placeholder="blur" />
              </div>
            </div>
            <div className="col-md-11 col-lg-6 col-xxl-6">
              <div className="nk-hero-content text-center text-lg-start">
                <h1 className="title display-6 mb-3 mb-lg-4">{parse(title)}</h1>
                <p className="lead mb-4 mb-lg-5 pe-xxl-6">{parse(subTitle)}</p>
                <ul className="btn-list btn-list-inline gx-4 gy-4">
                  <li>
                    <Button
                      href={btn1Url}
                      btnText={bnt1Text}
                      btnClass="btn btn-lg rounded-pill btn-primary"
                      leftIconClass="google"
                    />
                  </li>
                  <li>
                    <Button
                      href={btn2Url}
                      btnText={btn2Text}
                      btnClass="btn btn-lg rounded-pill btn-secondary"
                      rightIconClass="arrow-long-right"
                    />
                  </li>
                </ul>
                <p className="mt-4">{parse(alertMessage)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
