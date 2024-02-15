import React from 'react';
import Button from '../Button';
import parse from 'html-react-parser';
import Icon from '../Icon';

export default function PricingCardStyle4({
  title,
  highlighText,
  price,
  duration,
  btnUrl,
  btnText,
  featureList,
  active,
  popular,
  featured,
}) {
  return (
    <div className="pricing shadow-none">
      <div className="pricing-body p-5 bg-gradient-light">
        <div className="position-relative">
          {active && (
            <div className="badge bg-dark bg-opacity-30 border border-white border-opacity-10 rounded-pill position-absolute top-0 end-0 px-2">
              Active
            </div>
          )}
          {popular && (
            <div className="badge bg-primary rounded-pill position-absolute position-md-static position-lg-absolute  top-0 end-0 mb-3 px-2">
              Most Popular
            </div>
          )}
          <div className="fs-6 mb-2">{title}</div>
          <h5 className="mb-3">{highlighText}</h5>
          <h3 className="h2 mb-4">
            {price.toLowerCase() === 'free' ? (
              'Free'
            ) : (
              <>
                ${price}
                <span className="caption-text text-muted">/ {duration}</span>
              </>
            )}
          </h3>
          <Button
            href={btnUrl}
            btnText={btnText}
            btnClass={`btn btn-lg btn-block rounded-1 ${
              featured
                ? 'btn-primary'
                : 'bg-dark bg-opacity-30 text-white hover-bg-primary'
            }`}
            rightIconClass="arrow-long-right"
          />
        </div>
        <ul className="list list-sap-border gx-0 gy-3 pt-5">
          {featureList.map((item, index) => (
            <li key={index}>
              <Icon icon="check" className="icon text-primary" />{' '}
              <span>{parse(item)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
