import Image from 'next/image';
import React from 'react';
import Button from '../Button';
import Icon from '../Icon';

export default function CtaStyle2({
  overlineTitle,
  title,
  subtitle,
  btnUrl,
  btnText,
  infoList,
  imgUrl,
}) {
  return (
    <section className="section bg-light section-0 has-mask">
      <div className="nk-mask bg-darker top-50" />
      <div className="container container-xl">
        <div className="section-wrap bg-dark is-dark rounded-4 has-shape overflow-hidden">
          <div className="nk-shape bg-shape-blur-b start-50 top-50 translate-middle" />
          <div className="section-content p-4 p-sm-5 p-xl-7">
            <div className="row justify-content-between align-items-center g-5">
              <div className="col-xl-5 col-lg-6">
                <div className="block-text">
                  <h6 className="overline-title text-primary">
                    {overlineTitle}
                  </h6>
                  <h2 className="title">{title}</h2>
                  <p>{subtitle}</p>
                  <ul className="list list-row gx-3 gy-0">
                    {infoList.map((item, index) => (
                      <li key={index}>
                        <Icon
                          icon="check-circle-fill"
                          className="icon fs-5 text-info"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="btn-list btn-list-inline gy-0">
                    <li>
                      <Button
                        href={btnUrl}
                        btnClass="btn btn-lg btn-primary rounded-pill"
                        btnText={btnText}
                        rightIconClass="arrow-long-right"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 align-self-end">
                <div className="bg-white rounded-top-4">
                  <div className="rounded-top-4 bg-gradient-primary bg-opacity-70 p-5 pb-0 mb-n4 mb-sm-n5 mb-xl-n7">
                    <div className="block-gfx">
                      <Image
                        className="w-100 rounded-top-3 shadow-sm"
                        src={imgUrl}
                        alt="Thumbnail"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
