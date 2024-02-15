import Link from 'next/link';
import React from 'react';
import Icon from '../Icon';

export default function CtaStyle3({ title, subTitle, btnText, btnLink }) {
  return (
    <section className="section section-lg has-shape">
      <div className="nk-shape bg-shape-blur-k end-50 top-0" />
      <div className="nk-shape bg-shape-blur-l start-50 top-75" />
      <div className="container">
        <div className="section-content">
          <div className="row justify-content-center text-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="block-text">
                <h2 className="title h1">{title}</h2>
                <p className="lead mt-3">{subTitle}</p>
                <ul className="btn-list btn-list-inline">
                  <li>
                    <Link
                      href={btnLink}
                      className="btn btn-lg btn-primary rounded-pill"
                    >
                      <span>{btnText}</span>
                      <Icon icon="arrow-long-right" className="icon" />
                    </Link>
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
