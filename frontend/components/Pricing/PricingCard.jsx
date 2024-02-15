import React from 'react';
import parse from 'html-react-parser';
import Icon from '../Icon';

export default function PricingCard({
  title,
  price,
  btnUrl,
  btnText,
  featureList,
  featured,
  withPopular,
}) {
  return (
    <div
      className={featured ? 'pricing pricing-featured bg-primary' : 'pricing'}
    >
      <div className="pricing-body p-5">
        {withPopular && (
          <div className="badge text-bg-dark rounded-pill position-absolute top-0 end-0 px-3 py-2 mt-3 me-3">
            Popular
          </div>
        )}
        <div className="text-center">
          <h5 className="mb-3">{title}</h5>
          <h3 className="h2 mb-4">
            ${price} <span className="caption-text text-muted"> / month</span>
          </h3>
          <a
            href={btnUrl}
            className={`btn btn-primary btn-block ${
              featured ? '' : 'btn-soft'
            }`}
          >
            {btnText}
          </a>
        </div>
        <ul className="list gy-3 pt-4 ps-2">
          {featureList.map((item, index) => (
            <li key={index}>
              <Icon icon="check" className="icon text-success" />
              <span>{parse(item)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
