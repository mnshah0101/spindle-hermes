import React, { useState } from 'react';
import PricingCardStyle3 from './PricingCardStyle3';

export default function PricingSectionStyleThree() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="section-content">
      <div
        className={`pricing-toggle-wrap mb-5 ${toggle ? 'pricing-yearly' : ''}`}
      >
        <div className="h5 mb-0 pricing-toggle-text monthly">Monthly</div>
        <div className="mx-3">
          <button className="pricing-toggle" onClick={() => setToggle(!toggle)}>
            <span className="pricing-toggle-ball" />
          </button>
        </div>
        <div className="h5 mb-0 pricing-toggle-text yearly position-relative">
          {' '}
          Yearly{' '}
          <span className="badge text-bg-dark fw-normal text-uppercase rounded-pill position-absolute ms-n5 mb-2 mb-sm-0 ms-sm-3 translate-middle-sm-y start-100 bottom-100 bottom-sm-auto top-sm-50">
            Save 25%
          </span>
        </div>
      </div>
      <div className="row g-gs">
        <div className="col-xl-3 col-md-6">
          <PricingCardStyle3
            title="Strater"
            price="free"
            btnUrl="/"
            btnText="Choose Plan"
            featureList={[
              '500 Word Trial',
              '5 languages',
              'Blog Wizard tool',
              '7-day free trial Pro Plan',
              'Dedicated manager',
            ]}
            duration={toggle ? 'yearly' : 'monthly'}
          />
        </div>
        <div className="col-xl-3 col-md-6">
          <PricingCardStyle3
            title="Pro"
            price={toggle ? '28' : '8'}
            btnUrl="/"
            btnText="Choose Plan"
            featureList={[
              'Access to all tools',
              'Priority email support',
              'Access to new features',
              'Unlimited Word Limit',
              'Dedicated manager',
            ]}
            duration={toggle ? 'yearly' : 'monthly'}
            featured
          />
        </div>
        <div className="col-xl-3 col-md-6">
          <PricingCardStyle3
            title="Enterprise"
            price={toggle ? '32' : '11'}
            btnUrl="/"
            btnText="Choose Plan"
            featureList={[
              '50k Word Limit',
              'Unlimited user seats',
              'Prebuilt workflows library',
              'Dedicated manager',
              'Access newest features',
            ]}
            duration={toggle ? 'yearly' : 'monthly'}
          />
        </div>
        <div className="col-xl-3 col-md-6">
          <PricingCardStyle3
            title="Unlimited"
            price={toggle ? '39' : '14'}
            btnUrl="/"
            btnText="Choose Plan"
            featureList={[
              '70k Word Limit',
              '25+ languages',
              'Unlimited user seats',
              'Prebuilt workflows library',
              'Access to newest features',
            ]}
            duration={toggle ? 'yearly' : 'monthly'}
          />
        </div>
      </div>
    </div>
  );
}
