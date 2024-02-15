import React from 'react';
import Button from '../Button';
import Image from 'next/image';
import Icon from '../Icon';

export default function FeatureCardStyle7({
  title,
  subTitle,
  featureList,
  imgUrl,
  actionBtnText,
  actionBtnUrl,
}) {
  return (
    <div className="section-content">
      <div className="row g-gs justify-content-center align-items-center flex-lg-row-reverse">
        <div className="col-lg-6 col-md-11">
          <div className="block-gfx ps-xxl-5">
            <Image
              className="w-100"
              src={imgUrl}
              alt="Thumbnail"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="block-text pe-xxl-7">
            <h2 className="title">{title}</h2>
            <p className="lead">{subTitle}</p>
            <ul className="list gy-3 pe-xxl-7">
              {featureList.map((item, index) => (
                <li key={index}>
                  <Icon
                    icon="check-circle-fill"
                    className="icon text-success fs-5"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="btn-list btn-list-inline gy-0">
              <li>
                <Button
                  href={actionBtnUrl}
                  btnText={actionBtnText}
                  btnClass="btn btn-lg btn-primary"
                  rightIconClass="arrow-long-right"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
