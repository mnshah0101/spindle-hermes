import React, { useState } from 'react';
import PricingCardStyle2 from './PricingCardStyle2';

export default function PricingSectionStyle2() {
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
          Yearly
          <span className="badge text-bg-success-soft fw-normal text-uppercase smaller rounded-pill position-absolute ms-n5 mb-2 mb-sm-0 ms-sm-3 translate-middle-sm-y start-100 bottom-100 bottom-sm-auto top-sm-50">
            Save 12%
          </span>
        </div>
      </div>
      <div className="row g-gs">
        <div className="col-xxl-4 col-xl-4">
          <PricingCardStyle2
            featured
            title="Pro"
            price={toggle ? '190' : '19'}
            duration={toggle ? 'yearly' : 'month'}
            mainFeature="For content marketers, bloggers, freelancers & startups"
            alertMessage="Try out all features to determine what works best for you"
            btnText={toggle ? 'Get Committed' : 'Get Started'}
            btnUrl="/"
            featureTitle="Everything in Free, plus"
            featureList={[
              '<strong>50,000</strong> Words Limit',
              '<strong>10+</strong> Templates',
              '50+ Languages',
              'Advance Editor Tool',
              'Priority support',
              'Unlimited Logins',
              'Access New Features',
            ]}
          />
        </div>
        <div className="col-xxl-4 col-xl-4 col-md-6 order-xl-first">
          <PricingCardStyle2
            title="Free"
            price="0"
            duration="month"
            mainFeature="Access to AI writer features to help you get a taste of AI writing."
            alertMessage="Try out all features to determine what works best for you"
            btnText="Start Writing for Free"
            btnUrl="/"
            featureTitle="Give a try for free"
            featureList={[
              '<strong>4,500</strong> Words',
              '<strong>5+</strong> Templates',
              '10+ Languages',
              'AI Article Writer',
              'Advance Editor Tool',
              'Regular support',
            ]}
          />
        </div>
        <div className="col-xxl-4 col-xl-4 col-md-6">
          <PricingCardStyle2
            title="Custom"
            price="custom"
            duration="month"
            mainFeature="Design your custom package for teams and business needs"
            alertMessage="Take your business to the another level with custom package and support."
            btnText="Request for Demo"
            btnUrl="contact"
            featureTitle="Everything in Pro, plus"
            featureList={[
              '<strong>Custom pricing</strong>',
              'Custom number of users',
              'Custom number of words',
              'Manage team member',
              'Premium support',
            ]}
          />
        </div>
      </div>
    </div>
  );
}
