import React from 'react';
import PricingCardStyle4 from './PricingCardStyle4';

export default function PricingSectionStyle4() {
  return (
    <div className="section-content">
      <div className="row g-gs justify-content-center">
        <div className="col-lg-4">
          <PricingCardStyle4
            featured
            popular
            title="Silver"
            highlighText="Unlimited Words"
            price="139"
            duration="monthly"
            btnUrl="/login"
            btnText="Start free trial today"
            featureList={[
              '<strong>50,000</strong> Monthly Word Limit',
              '<strong>10+</strong> Templates',
              '50+ Languages',
              'Advance Editor Tool',
              'Regular Technical Support',
              'Unlimited Logins',
              'Newest Features',
            ]}
          />
        </div>
        <div className="col-lg-4 col-md-6 order-lg-first">
          <PricingCardStyle4
            active
            title="Basic"
            highlighText="Limited Words"
            price="Free"
            duration="monthly"
            btnUrl="/login"
            btnText="Start free trial today"
            featureList={[
              '<strong>5,000</strong> Monthly Word Limit',
              '<strong>5+</strong> Templates',
              '50+ Languages',
              'Advance Editor Tool',
              'Regular Technical Support',
              'Unlimited Logins',
              'Newest Features',
            ]}
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <PricingCardStyle4
            title="Diamond"
            highlighText="Customized Plan"
            price="269"
            duration="monthly"
            btnUrl="/login"
            btnText="Start free trial today"
            featureList={[
              '<strong>10,000</strong> Monthly Word Limit',
              '<strong>8+</strong> Templates',
              '50+ Languages',
              'Advance Editor Tool',
              'Regular Technical Support',
              'Unlimited Logins',
              'Newest Features',
            ]}
          />
        </div>
      </div>
    </div>
  );
}
