import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import Cta from '../components/Cta';
import SectionHeading from '../components/SectionHeading';
import Testimonial from '../components/Testimonial';
import IconBoxStyle4 from '../components/IconBox/IconBoxStyle4';
import Button from '../components/Button';
import BrandsStyle2 from '../components/Brands/BrandsStyle2';
import FeatureCardStyle7 from '../components/FeatureCard/FeatureCardStyle7';
import featureImg from '../public/images/gfx/about.png';
const brandData = [
  {
    lightUrl: '/images/brands/72-a.png',
    darkUrl: '/images/brands/72-a-white.png',
  },
  {
    lightUrl: '/images/brands/72-b.png',
    darkUrl: '/images/brands/72-b-white.png',
  },
  {
    lightUrl: '/images/brands/72-c.png',
    darkUrl: '/images/brands/72-c-white.png',
  },
  {
    lightUrl: '/images/brands/72-d.png',
    darkUrl: '/images/brands/72-d-white.png',
  },
  {
    lightUrl: '/images/brands/72-e.png',
    darkUrl: '/images/brands/72-e-white.png',
  },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>
          About - CopyGen - AI Writer & Copywriting Landing Page Next.js
          Template.
        </title>
      </Head>
      <Layout>
        <div className="nk-header" />
        <section className="section has-shape has-mask">
          <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x" />
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
          <div className="container">
            <SectionHeading
              overlineTitle="About Us"
              title="Crafting AI-Powered Solutions for Any Company"
              variant="h1"
            />
            <FeatureCardStyle7
              title="Streamline your data management in minutes"
              subTitle="Customization is at the heart of Spindle's philosophy. We understand that every business is unique, with its own specific needs and requirements. That's why Spindle offers unparalleled customization options, allowing you to tailor your data handling and API creation processes precisely to your preferences."
              featureList={[
                'Manage multiple databases, endpoints, and api keys, effortlessly with our intuitive UI.',
                "Instantly optimize your business's development process.",
              ]}
              actionBtnUrl="/"
              actionBtnText="Get Started"
              imgUrl={featureImg}
            />
          </div>
        </section>
        <section className="section section-sm section-0">
          <div className="container">
            <SectionHeading title="Meet the Developers" />
            <BrandsStyle2 brandList={brandData} />
          </div>
        </section>
      </Layout>
    </>
  );
}
