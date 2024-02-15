import React from 'react';
import parse from 'html-react-parser';
import Link from 'next/link';
import Icon from '../Icon';

export default function SectionHeadingStyle2({
  overlineTitle,
  title,
  subTitle,
  variant,
  containerWidthClass,
  btnText,
  btnUrl,
  btnClass,
}) {
  return (
    <div className="section-head">
      <div className="row justify-content-center text-center">
        <div
          className={
            containerWidthClass
              ? containerWidthClass
              : 'col-lg-9 col-xl-8 col-xxl-7'
          }
        >
          {overlineTitle && (
            <div className="badge text-bg-primary-soft-outline text-uppercase text-tracking-1 rounded-pill px-3 py-2 mb-3">
              {overlineTitle}
            </div>
          )}
          {title && (
            <h2 className={`title ${variant ? variant : ''}`}>
              {parse(title)}
            </h2>
          )}
          {subTitle && <p className="lead">{parse(subTitle)}</p>}
          {btnText && (
            <Link
              href={btnUrl}
              className={`${btnClass ? btnClass : 'btn btn-lg btn-primary'}`}
            >
              <span>{btnText}</span>{' '}
              <Icon icon="arrow-long-right" className="icon" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
