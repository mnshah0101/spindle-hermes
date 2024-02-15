import Head from 'next/head';
import React from 'react';
import Layout from '../../components/Layout';
import Cta from '../../components/Cta';
import SectionHeading from '../../components/SectionHeading';
import SectionHeadingStyle2 from '../../components/SectionHeading/SectionHeadingStyle2';
import IconBoxStyle7 from '../../components/IconBox/IconBoxStyle7';

export default function UsecasePage() {
  return (
    <>
      <Head>
        <title>
          Use Case - CopyGen - AI Writer & Copywriting Landing Page Next.js
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
              overlineTitle="Use cases"
              title="Write high-converting emails in <br className='d-none d-md-block' /> <s>hours</s> <span className='text-primary'>minutes</span>"
              variant="h1"
              containerWidthClass="col-xl-8"
            />
            <div className="section-content">
              <div className="row text-center g-gs">
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Website Copy & SEO"
                    subTitle="Missing inspiration for your Landing Page? Generate headlines, meta tags."
                    iconClass="globe"
                    iconBoxBgClass="text-bg-success-soft"
                    href="/usecase/usecase-details"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Social Media & Ads"
                    subTitle="Write Facebook or Google ads, Youtube video descriptions or titles."
                    iconClass="flag"
                    iconBoxBgClass="text-bg-info-soft"
                    href="/usecase/usecase-details"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Blog Section Writing"
                    subTitle="Explain to you how all this mistak idea of pain complete we den ounce with righteous"
                    iconClass="edit"
                    iconBoxBgClass="text-bg-primary-soft"
                    href="/usecase/usecase-details"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Digital Ad Copy"
                    subTitle="Write creative and original advertisement copies for social media channels."
                    iconClass="signal"
                    iconBoxBgClass="text-bg-warning-soft"
                    href="/usecase/usecase-details"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Discount and Sales"
                    subTitle="Pass your request as a command and let AI do the work for you magically."
                    iconClass="percent"
                    iconBoxBgClass="text-bg-purple-soft"
                    href="/usecase/usecase-details"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Job Description"
                    subTitle="Create engaging job descriptions for any position to attract the best candidates"
                    iconClass="briefcase"
                    iconBoxBgClass="text-bg-danger-soft"
                    href="/usecase/usecase-details"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Event Promotion"
                    subTitle="Increase your sign ups and generate more leads"
                    iconClass="puzzle"
                    iconBoxBgClass="text-bg-primary-soft"
                    href="/usecase/usecase-details"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Testimonial & Review"
                    subTitle="Quickly write candid testimonials and reviews for people and services"
                    iconClass="comments"
                    iconBoxBgClass="text-bg-success-soft"
                    href="/usecase/usecase-details"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Keywords Extractor"
                    subTitle="Identify main keywords, keyphrases, and questions in any text"
                    iconClass="tags"
                    iconBoxBgClass="text-bg-info-soft"
                    href="/usecase/usecase-details"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Video Description"
                    subTitle="Create engaging job descriptions for any position to attract the best candidates"
                    iconClass="video"
                    iconBoxBgClass="text-bg-info-soft"
                    href="/usecase/usecase-details"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Keywords Generator"
                    subTitle="Come up with related keywords, keyphrases, and questions using AI writing assistant"
                    iconClass="file-text"
                    iconBoxBgClass="text-bg-warning-soft"
                    href="/usecase/usecase-details"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="eCommerce Copy"
                    subTitle="Finding Product Names or Product Descriptions can be very time consuming."
                    iconClass="cart"
                    iconBoxBgClass="text-bg-pink-soft"
                    href="/usecase/usecase-details"
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
