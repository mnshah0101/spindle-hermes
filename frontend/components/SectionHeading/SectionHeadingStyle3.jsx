import React from 'react';
import parse from 'html-react-parser';

export default function SectionHeadingStyle3({
  overlineTitle,
  title,
  subTitle,
  containerWidthClass,
}) {
  return (
    <section className="nk-header bg-darker is-dark has-mask">
      <div className="nk-mask bg-pattern-dot-white-sm bg-blend-bottom" />
      <div className="nk-page-head">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div
              className={`${
                containerWidthClass ? containerWidthClass : 'col-xl-9'
              }`}
            >
              {overlineTitle && (
                <div className="badge text-bg-primary text-uppercase text-tracking-1 rounded-pill px-3 py-2 mb-3">
                  {parse(overlineTitle)}
                </div>
              )}

              {title && <h1 className="title mb-3">{parse(title)}</h1>}
              {subTitle && <p className="lead">{parse(subTitle)}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
