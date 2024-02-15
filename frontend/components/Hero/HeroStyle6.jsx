import React from 'react';
import parse from 'html-react-parser';
import Button from '../Button';
import Image from 'next/image';

export default function HeroStyle6({
  overlineTitle,
  title,
  subTitle,
  btnUrl,
  btnText,
  thumbImgUrl,
}) {
  return (
    <section className="has-mask">
      <div className="nk-mask bg-gradient-a opacity-30" />
      <div className="nk-mask bg-pattern-dot-sm bg-blend-top" />
      <div className="nk-hero pt-lg-9 pb-lg-11 pt-2 pb-6 pb-sm-8">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-center flex-lg-row-reverse">
            <div className="col-lg-6 col-md-9">
              <div className="nk-hero-gfx mx-sm-n5">
                <Image src={thumbImgUrl} alt="Hero" placeholder="blur" />
              </div>
            </div>
            <div className="col-lg-6 col-md-11 text-center text-lg-start">
              <div className="nk-hero-content">
                <h5 className="mb-1 text-warning">{parse(overlineTitle)}</h5>
                <h1 className="display-6 mb-3 mb-lg-4">{parse(title)}</h1>
                <p className="lead mb-4 mb-lg-5 me-xl-5">{parse(subTitle)}</p>
                <ul className="btn-list btn-list-inline">
                  <li>
                    <Button
                      href={btnUrl}
                      btnText={btnText}
                      btnClass="btn btn-primary btn-lg"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
