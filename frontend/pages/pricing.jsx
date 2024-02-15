import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import PricingSection from '../components/Pricing/PricingSection';
import Accordion from '../components/Accordion';
import Cta from '../components/Cta';

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>
          Pricing - CopyGen - AI Writer & Copywriting Landing Page Next.js
          Template.
        </title>
      </Head>
      <Layout>
        <div className="nk-header" />
        <section className="section section-bottom-0 has-shape has-mask">
          <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x" />
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
          <div className="container">
            <SectionHeading
              overlineTitle="Plans & Pricing"
              title="Plans that best suit your business requirements"
              containerWidthClass="col-lg-10 col-xl-9 col-xxl-8"
              variant="h1"
            />
            <PricingSection />
          </div>
        </section>
        <section className="section section-bottom-0">
          <div className="container">
            <SectionHeading
              overlineTitle="FAQ'S"
              title="Frequently Asked Questions"
              containerWidthClass="col-xl-8"
            />
            <Accordion plusMinus />
          </div>
        </section>
        <section className="section section-bottom-0">
          <div className="container">
            <Cta
              overlineTitle="Boost your writing productivity"
              title="End writer’s block today"
              subtitle="It’s like having access to a team of copywriting experts writing
              powerful copy for you in 1-click."
              btnUrl="/login"
              btnText="Start writing for free"
              infoList={[
                'No credit card required',
                'Cancel anytime',
                '10+ tools to expolore',
              ]}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
