import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import Cta from '../components/Cta';
import SectionHeading from '../components/SectionHeading';
import FeatureCardStyle8 from '../components/FeatureCard/FeatureCardStyle8';
import FeatureCardStyle9 from '../components/FeatureCard/FeatureCardStyle9';
import IconBoxStyle9 from '../components/IconBox/IconBoxStyle9';
import featureImgA from '../public/images/gfx/process/a.jpg';
import featureImgB from '../public/images/gfx/process/b.jpg';
import featureImgC from '../public/images/gfx/process/c.jpg';
const featureData = [
  {
    title: 'Write content faster',
    subTitle:
      'You do not need to spend hours to write good content — let our advance AI Writer to get it done.',
    iconClass: 'spark',
    iconBoxBgClass: 'text-bg-info-soft-outline',
  },
  {
    title: 'Tools and templates',
    subTitle:
      'Using our AI tools and pre-built template to create content briefs, write and optimize content in one place.',
    iconClass: 'cpu',
    iconBoxBgClass: 'text-bg-warning-soft-outline',
  },
  {
    title: 'Brainstorm faster',
    subTitle:
      'Use our advanced AI as your personal content writer or partner for your endless work for your business.',
    iconClass: 'bulb',
    iconBoxBgClass: 'text-bg-primary-soft-outline',
  },
  {
    title: 'Copy and publish anywhere',
    subTitle:
      'You can simply copy your desire content and then you can publish, like Shopify, WordPress, or anywhere.',
    iconClass: 'file-docs',
    iconBoxBgClass: 'text-bg-purple-soft-outline',
  },
  {
    title: 'Repurpose content easily',
    subTitle:
      'Write and saved once, use everywhere. Also rewrite content for different porpose with minimal effort.',
    iconClass: 'swap-alt',
    iconBoxBgClass: 'text-bg-success-soft-outline',
  },
  {
    title: 'Write in Any Language',
    subTitle:
      'Let AI write for you in over 40 languages. Our AI can write in English, Spanish, French and many more language.',
    iconClass: 'text',
    iconBoxBgClass: 'text-bg-danger-soft-outline',
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Head>
        <title>
          Features - CopyGen - AI Writer & Copywriting Landing Page Next.js
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
              overlineTitle="Feature"
              title="Generate AI-powered content in 1 click."
              containerWidthClass="col-lg-8 col-xl-7 col-xxl-6"
              variant="h1"
            />
            <div className="section-content">
              <div className="row g-gs">
                {featureData.map((item, index) => (
                  <div className="col-md-6 col-xl-4" key={index}>
                    <IconBoxStyle9
                      title={item.title}
                      subTitle={item.subTitle}
                      iconClass={item.iconClass}
                      iconBoxBgClass={item.iconBoxBgClass}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section section-bottom-0">
          <div className="container">
            <SectionHeading
              overlineTitle="How it works"
              title="Few steps to write content"
              containerWidthClass="col-lg-8 col-xl-7 col-xxl-6"
            />
            <FeatureCardStyle8
              number="01"
              title="Select a Template"
              subTitle="Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem
              aperiam, quasi architecto beatae vitae dicta sunt
              explicabo."
              imgUrl={featureImgA}
              imgBgClass="bg-info bg-opacity-50"
            />
            <div className="sction-sap text-center py-3 d-none d-md-block">
              <svg
                className="h-3rem h-sm-5rem h-lg-7rem"
                viewBox="0 0 444 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M442.989 1C443.49 18.4197 426.571 53.2592 354.892 53.2591C265.293 53.2591 126.139 53.2591 80.0875 53.2591C34.0366 53.2591 7.00663 85.784 0.999979 111"
                  stroke="currentColor"
                  strokeDasharray="7 7"
                />
              </svg>
            </div>
            <div className="h-3rem d-md-none" />
            <FeatureCardStyle9
              number="02"
              title="Fill in Your Product Details"
              subTitle="Explain with as many details as possible to the AI what you would
              like to write about."
              featureList={[
                'At vero eos et accusamus et iusto',
                'At vero eos et accusamus et iusto',
              ]}
              imgUrl={featureImgB}
              imgBgClass="bg-primary bg-opacity-40"
            />
            <div className="sction-sap text-center py-3 d-none d-md-block">
              <svg
                className="h-3rem h-sm-5rem h-lg-7rem"
                viewBox="0 0 444 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.01068 1C0.510125 18.7364 17.4289 54.2093 89.1082 54.2093C178.707 54.2093 317.861 54.2093 363.912 54.2093C409.963 54.2093 436.993 87.3256 443 113"
                  stroke="currentColor"
                  strokeDasharray="7 7"
                />
              </svg>
            </div>
            <div className="h-3rem d-md-none" />
            <FeatureCardStyle8
              number="03"
              title="Generate AI Content"
              subTitle="Our highly trained AI understands your details and
              generate unique and human-like content in seconds."
              imgUrl={featureImgC}
              imgBgClass="bg-pink bg-opacity-30"
            />
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
