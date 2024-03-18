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
import Accordion from '../components/Accordion';

const featureData = [
  {
    title: 'Effortless Data Management',
    subTitle:
      'Simplify data management tasks and handle multiple databases, endpoints, and API keys effortlessly with Spindle’s intuitive UI.',
    iconClass: 'spark',
    iconBoxBgClass: 'text-bg-info-soft-outline',
  },
  {
    title: 'Customizable Solutions',
    subTitle:
      'Tailor data handling and API creation processes to your preferences with Spindle’s flexible and customizable platform.',
    iconClass: 'cpu',
    iconBoxBgClass: 'text-bg-warning-soft-outline',
  },
  {
    title: 'Seamless Data Organization',
    subTitle:
      'Organize data seamlessly across diverse databases, endpoints, and security protocols with Spindle’s user-friendly interface.',
    iconClass: 'bulb',
    iconBoxBgClass: 'text-bg-primary-soft-outline',
  },
  {
    title: 'Optimized Development Pipeline',
    subTitle:
      'Streamline your development pipeline for maximum efficiency and productivity with Spindle’s optimized tools and features.',
    iconClass: 'file-docs',
    iconBoxBgClass: 'text-bg-purple-soft-outline',
  },
  {
    title: 'Flexible Content Repurposing',
    subTitle:
      'Maximize content value and reach by repurposing content effortlessly across different platforms with Spindle’s advanced features.',
    iconClass: 'swap-alt',
    iconBoxBgClass: 'text-bg-success-soft-outline',
  },
  {
    title: 'Multi-Language Support',
    subTitle:
      'Create content in over 40 languages effortlessly with Spindle’s advanced AI capabilities, expanding your global reach.',
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
                  overlineTitle="FAQ'S"
                  title="Frequently Asked Questions"
                  containerWidthClass="col-xl-8"
                />
                <Accordion plusMinus />
              </div>
            </section>
      </Layout>
    </>
  );
}
