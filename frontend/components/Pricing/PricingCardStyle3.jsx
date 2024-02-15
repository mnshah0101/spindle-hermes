import React from 'react';
import parse from 'html-react-parser';
import Link from 'next/link';
import Icon from '../Icon';

export default function PricingCardStyle3({
  title,
  price,
  btnUrl,
  btnText,
  featureList,
  featured,
  duration,
}) {
  return (
    <div
      className={`pricing text-center shadow-sm ${
        featured ? 'pricing-featured bg-gradient-primary' : ''
      }`}
    >
      <div className="pricing-body p-5">
        {featured && (
          <div className="badge text-bg-dark rounded-pill position-absolute top-0 end-0 mt-3 me-3">
            Popular
          </div>
        )}
        <h5 className="mb-2">{title}</h5>
        <h3 className="h2 mb-4">
          {price === 'free' ? (
            'Free'
          ) : (
            <>
              ${price.toLowerCase()}
              <span className="caption-text text-muted"> / {duration}</span>
            </>
          )}
        </h3>
        <Link
          href={btnUrl}
          className={`btn ${
            featured ? 'btn-primary' : 'btn-outline-primary'
          } rounded-pill`}
        >
          <span>{btnText}</span>{' '}
          <Icon icon="arrow-long-right" className="icon" />
        </Link>
        <ul className="list gy-3 pt-4">
          {featureList?.map((item, index) => (
            <li key={index}>
              <span>{parse(item)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
