import Head from 'next/head';
import React from 'react';
import Layout from '../../components/Layout';
import Cta from '../../components/Cta';
import SectionHeadingStyle2 from '../../components/SectionHeading/SectionHeadingStyle2';
import TestimonialSlider from '../../components/TestimonialSlider';
import HeroStyle6 from '../../components/Hero/HeroStyle6';
import SectionHeading from '../../components/SectionHeading';
import IconBoxStyle8 from '../../components/IconBox/IconBoxStyle8';
import FeatureCardStyle8 from '../../components/FeatureCard/FeatureCardStyle8';
import FeatureCardStyle9 from '../../components/FeatureCard/FeatureCardStyle9';
import heroThumb from '../../public/images/gfx/banner/d.png';
import featureImgA from '../../public/images/gfx/process/a.jpg';
import featureImgB from '../../public/images/gfx/process/b.jpg';
import featureImgC from '../../public/images/gfx/process/c.jpg';

export default function UsecaseDetailsPage() {
  return (
    <>
      <Head>
        <title>
          Use Case Details - CopyGen - AI Writer & Copywriting Landing Page
          Next.js Template.
        </title>
      </Head>
      <Layout>
        <div className="nk-header" />
        <HeroStyle6
          overlineTitle="Get Your Free Today!"
          title="Create amazing <span className='text-gradient-primary'>social posts</span> 10X faster with AI"
          subTitle="AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost!"
          btnUrl="/"
          btnText="Get Started It's Free"
          thumbImgUrl={heroThumb}
        />
        <section className="section section-lg section-bottom-0 has-shape">
          <div className="nk-shape bg-shape-blur-f me-12 mt-10p end-50" />
          <div className="container">
            <SectionHeadingStyle2
              title='CopyGen helps <span className="text-gradient-primary">76,000+</span> people like you create better content 10X faster.'
              variant="h1"
              containerWidthClass="col-xl-11 col-xxl-10"
              btnUrl="/"
              btnText="Start for free"
            />
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-xxl-10">
                  <TestimonialSlider />
                </div>
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
            <SectionHeading
              overlineTitle="Learn about besnifits"
              title="Copygen helps‍ Social Media Managers"
              containerWidthClass="col-lg-8 col-xl-7 col-xxl-6"
            />
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-xl-4 col-md-6">
                  <IconBoxStyle8
                    title="Facebook Posts"
                    subTitle="You do not need to spend hours to write good content"
                    btnLink="/"
                    btnText="Try Facebook Posts"
                    iconBoxBgClass="text-info border-info"
                    iconClass="note-add"
                  />
                </div>
                <div className="col-xl-4 col-md-6">
                  <IconBoxStyle8
                    title="YouTube Descriptions"
                    subTitle="Using our AI tools and pre-built template to create content briefs."
                    btnLink="/"
                    btnText="Try YouTube Descriptions"
                    iconBoxBgClass="text-warning border-warning"
                    iconClass="bulb"
                  />
                </div>
                <div className="col-xl-4 col-md-6">
                  <IconBoxStyle8
                    title="Pinterest Descriptions"
                    subTitle="Use our advanced AI as your personal content writer"
                    btnLink="/"
                    btnText="Try Pinterest Descriptions"
                    iconBoxBgClass="text-primary border-primary"
                    iconClass="article"
                  />
                </div>
                <div className="col-xl-4 col-md-6">
                  <IconBoxStyle8
                    title="Instagram Captions"
                    subTitle="You can simply copy your desire content and then you can publish."
                    btnLink="/"
                    btnText="Try Instagram Captions"
                    iconBoxBgClass="text-blue border-blue"
                    iconClass="activity-round"
                  />
                </div>
                <div className="col-xl-4 col-md-6">
                  <IconBoxStyle8
                    title="LinkedIn Posts"
                    subTitle="Write and saved once, use everywhere."
                    btnLink="/"
                    btnText="Try LinkedIn Posts"
                    iconBoxBgClass="text-success border-success"
                    iconClass="note-add"
                  />
                </div>
                <div className="col-xl-4 col-md-6">
                  <IconBoxStyle8
                    title="TikTok Scripts"
                    subTitle="Let AI write for you in over 40 languages. Our AI can"
                    btnLink="/"
                    btnText="Try TikTok Scripts"
                    iconBoxBgClass="text-danger border-danger"
                    iconClass="star-round"
                  />
                </div>
              </div>
            </div>
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
