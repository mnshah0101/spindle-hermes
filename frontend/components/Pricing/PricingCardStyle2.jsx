import Link from 'next/link';
import React from 'react';
import parse from 'html-react-parser';
import Icon from '../Icon';

export default function PricingCardStyle2({
  featured,
  title,
  price,
  duration,
  mainFeature,
  alertMessage,
  btnText,
  btnUrl,
  featureTitle,
  featureList,
}) {
  return (
    <div className={`h-100 ${featured ? '' : 'pt-xl-6'}`}>
      <div
        className={`pricing h-100 ${
          featured ? 'pricing-featured bg-gradient-primary' : ''
        }`}
      >
        <div
          className={`pricing-body h-100 p-5 ${
            featured
              ? ' pt-3 p-md-0 pt-md-0 p-xl-5 pt-xl-3 d-md-flex d-xl-block'
              : ''
          }`}
        >
          <div
            className={`text-center ${
              featured ? 'p-md-5 p-xl-0 w-md-50 w-xl-100' : ''
            }`}
          >
            {featured && (
              <div className="badge bg-gradient-primary bg-opacity-20 gradient-angle-90 mb-4 px-3 py-2 rounded-pill small text-primary text-tracking-1">
                <div className="p-1">Most Popurlar</div>
              </div>
            )}
            <h3 className="mb-3">{title}</h3>
            {price === 'custom' ? (
              <div className="media media-middle media-2xl bg-light rounded-pill mb-4 mt-3">
                <Icon icon="building" className="icon" />
              </div>
            ) : (
              <h3 className="display-5 mb-3">
                ${price}{' '}
                <span className="caption-text text-muted"> / {duration}</span>
              </h3>
            )}

            <p className={`fw-bold ${featured ? 'text-primary' : ''}`}>
              {mainFeature}
            </p>
            <div className="bg-light px-4 py-2 mb-4 smaller rounded-1">
              {alertMessage}
            </div>
            <div className="px-4">
              <Link
                href={btnUrl}
                className={`btn btn-block rounded-pill ${
                  featured ? 'btn-primary' : 'btn-outline-primary'
                }`}
              >
                {btnText}
              </Link>
            </div>
          </div>
          {featured && (
            <div className="d-none d-md-block d-xl-none border-start h-100"></div>
          )}
          <div
            className={`pt-4 ${
              featured ? 'p-md-5 p-xl-0 pt-xl-4 w-md-50 w-xl-100' : ''
            }`}
          >
            <h5 className="fw-medium pb-1">{featureTitle}</h5>
            <ul className="list gy-3">
              {featureList?.map((item, index) => (
                <li key={index}>
                  <Icon
                    icon="check-circle-fill"
                    className="icon fs-4 text-info "
                  />
                  <span>{parse(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
