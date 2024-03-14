import Head from 'next/head';
import React from 'react';
import Layout from '../../components/Layout';
import Cta from '../../components/Cta';
import SectionHeading from '../../components/SectionHeading';
import IconBoxStyle7 from '../../components/IconBox/IconBoxStyle7';

export default function UsecasePage() {
  return (
    <>
      <Head>
        <title>
          Use Case - Spindle - Automating API, DB, and Endpoint Creation.
        </title>
      </Head>
      <Layout>
        <div className="nk-header" />
        <section className="section section-bottom-0 has-shape has-mask">
          <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x" />
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
          <div className="container">
            <SectionHeading
              overlineTitle="Use cases"
              title="Transform your data workflows with Spindle"
              variant="h1"
              containerWidthClass="col-xl-8"
            />
            <div className="section-content">
              <div className="row text-center g-gs">
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Automated Data Pipelines"
                    subTitle="Effortlessly create and manage automated data pipelines for seamless data integration."
                    iconClass="globe"
                    iconBoxBgClass="text-bg-success-soft"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Real-time Analytics"
                    subTitle="Gain valuable insights with real-time analytics and data visualization tools."
                    iconClass="flag"
                    iconBoxBgClass="text-bg-info-soft"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="AI-driven Recommendations"
                    subTitle="Leverage AI-driven recommendations to personalize user experiences and boost engagement."
                    iconClass="edit"
                    iconBoxBgClass="text-bg-primary-soft"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Predictive Maintenance"
                    subTitle="Implement predictive maintenance strategies based on data analytics to optimize operations."
                    iconClass="signal"
                    iconBoxBgClass="text-bg-warning-soft"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Data Governance & Compliance"
                    subTitle="Ensure data governance and regulatory compliance with automated monitoring and reporting."
                    iconClass="lock"
                    iconBoxBgClass="text-bg-purple-soft"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Scalable Infrastructure Management"
                    subTitle="Efficiently manage and scale your infrastructure with intelligent automation and monitoring."
                    iconClass="briefcase"
                    iconBoxBgClass="text-bg-danger-soft"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-bottom-0">
          <div className="container">
            <Cta
              overlineTitle="Unlock the power of automation"
              title="Experience seamless data management"
              subtitle="Maximize efficiency and productivity with Spindle's advanced automation tools."
              btnUrl="/login"
              btnText="Get started for free"
              infoList={[
                'No credit card required',
                'Cancel anytime',
                'Explore powerful features',
              ]}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
