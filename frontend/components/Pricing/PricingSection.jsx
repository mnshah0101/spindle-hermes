import React from 'react';
import PricingCard from './PricingCard';

export default function PricingSection({ withPopular }) {
  return (
    <div className="section-content">
      <div className="row g-gs justify-content-center">
        <div className="col-lg-4 col-md-6">
          <PricingCard
            title="Bronze"
            price="9"
            btnUrl="/login"
            btnText="Start free trial today"
            featureList={[
              '<strong>10,000</strong> Monthly Word Limit',
              '<strong>10+</strong> Templates',
              '30+ Languages',
              'Advance Editor Tool',
              'Regular Technical Support',
              'Unlimited Logins',
              'Newest Features',
            ]}
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <PricingCard
            featured
            title="Silver"
            price="19"
            btnUrl="/login"
            btnText="Start free trial today"
            featureList={[
              '<strong>20,000</strong> Monthly Word Limit',
              '<strong>10+</strong> Templates',
              '50+ Languages',
              'Advance Editor Tool',
              'Regular Technical Support',
              'Unlimited Logins',
              'Newest Features',
            ]}
            withPopular={withPopular}
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <PricingCard
            title="Diamond"
            price="39"
            btnUrl="/login"
            btnText="Start free trial today"
            featureList={[
              '<strong>50,000</strong> Monthly Word Limit',
              '<strong>15+</strong> Templates',
              '70+ Languages',
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
