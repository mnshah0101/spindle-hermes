import React from 'react';
import Button from '../Button';
import Icon from '../Icon';

export default function CtaStyle4({
  overlineTitle,
  title,
  subtitle,
  btnUrl,
  btnText,
  infoList,
}) {
  return (
    <div className="section-wrap section-wrap-angle section-wrap-angle-top-right bg-darker is-dark rounded-4 has-shape">
      <div className="section-content p-4 pt-3 pt-sm-5 p-sm-6 overflow-hidden">
        <div className="nk-shape bg-shape-blur-n mt-n10p ms-n10p" />
        <div className="nk-shape bg-shape-blur-o mt-n10p me-n20p end-0" />
        <div className="row justify-content-center text-center">
          <div className="col-xl-8 col-xxl-9">
            <div className="block-text">
              <h6 className="overline-title text-primary">{overlineTitle}</h6>
              <h2 className="title">{title}</h2>
              <p className="lead mt-3">{subtitle}</p>
              <ul className="btn-list btn-list-inline">
                <li>
                  <Button
                    href={btnUrl}
                    btnClass="btn btn-lg btn-primary"
                    btnText={btnText}
                    rightIconClass="arrow-long-right"
                  />
                </li>
              </ul>
              <ul className="list list-row gy-0 gx-3">
                {infoList.map((item, index) => (
                  <li key={index}>
                    <Icon
                      icon="check-circle-fill"
                      className="icon text-success"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
