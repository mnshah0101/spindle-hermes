import Head from 'next/head';
import React from 'react';
import Layout2 from '../components/Layout/Layout2';
import SectionHeadingStyle3 from '../components/SectionHeading/SectionHeadingStyle3';
import SectionHeading from '../components/SectionHeading';
import Accordion from '../components/Accordion';
import PricingSectionStyle2 from '../components/Pricing/PricingSectionStyle2';

export default function PricingPageS2() {
  return (
    <>
      <Head>
        <title>
          Pricing - CopyGen - AI Writer & Copywriting Landing Page Next.js
          Template.
        </title>
      </Head>
      <Layout2>
        <SectionHeadingStyle3
          overlineTitle="Pricing"
          title="Plans that <span class='text-primary'>start free</span> and fits with your needs"
          subTitle="With our simple plans, supercharge your content writing to helps your business. Let’s make great content together."
          containerWidthClass="col-lg-8 col-xl-7 col-xxl-6"
        />
        <section className="section section-bottom-0 bg-light rounded-top-6">
          <div className="container">
            <PricingSectionStyle2 />
          </div>
        </section>
        <section className="section bg-light">
          <div className="container">
            <SectionHeading
              title="Frequently Asked Questions"
              subTitle="If you have any questions not answered in the FAQ, please do not hesitate to contac us."
              containerWidthClass="col-xl-8"
            />
            <Accordion variant="accordion-separated" plusMinus />
          </div>
        </section>
      </Layout2>
    </>
  );
}
