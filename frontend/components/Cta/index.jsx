import React from 'react';
import Button from '../Button';
import Icon from '../Icon';

export default function Cta({
  overlineTitle,
  title,
  subtitle,
  btnUrl,
  btnText,
  infoList,
}) {
  return (
    <div className="section-wrap bg-primary bg-opacity-10 rounded-4">
      <div className="section-content bg-pattern-dot-sm p-4 p-sm-6">
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
