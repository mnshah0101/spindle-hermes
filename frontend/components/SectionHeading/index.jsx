import React from 'react';
import parse from 'html-react-parser';

export default function SectionHeading({
  title,
  subTitle,
  overlineTitle,
  variant,
  containerWidthClass,
  children,
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
            <h6 className="overline-title text-primary">{overlineTitle}</h6>
          )}
          {title && (
            <h2 className={`title ${variant ? variant : ''}`}>
              {parse(title)}
            </h2>
          )}
          {subTitle && <p className="lead">{parse(subTitle)}</p>}
          {children}
        </div>
      </div>
    </div>
  );
}
