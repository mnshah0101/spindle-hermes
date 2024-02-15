import Head from 'next/head';
import React from 'react';
import Layout2 from '../../components/Layout/Layout2';
import SectionHeadingStyle3 from '../../components/SectionHeading/SectionHeadingStyle3';
import Testimonial from '../../components/Testimonial';
import IconBoxStyle4 from '../../components/IconBox/IconBoxStyle4';
import Button from '../../components/Button';
import SectionHeading from '../../components/SectionHeading';
import IconBoxStyle7 from '../../components/IconBox/IconBoxStyle7';

export default function UsecasePageS2() {
  return (
    <>
      <Head>
        <title>
          UseCase - CopyGen - AI Writer & Copywriting Landing Page Next.js
          Template.
        </title>
      </Head>
      <Layout2>
        <SectionHeadingStyle3
          overlineTitle="UseCase"
          title="How AI Can Enhance Your <span class='text-primary'>Content Strategy</span> and Performance"
          subTitle="AI can help you create and optimize your content faster, better and cheaper. Whether you want to paraphrase or enhance outdated content1, bust writer’s, speed up the research, create titles and outlines for posts."
          containerWidthClass="col-xl-8"
        />
        <section className="section bg-light section-bottom-0 rounded-top-6">
          <div className="container">
            <SectionHeading
              title={`Write high-converting emails in <br className="d-none d-md-block" /> <s>hours</s> minutes`}
            />
            <div className="section-content">
              <div className="row text-center g-gs">
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Website Copy & SEO"
                    subTitle="Missing inspiration for your Landing Page? Generate headlines, meta tags."
                    iconClass="globe"
                    iconBoxBgClass="text-bg-success-soft"
                    href="/usecase-s2/usecase-details-s2"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Social Media & Ads"
                    subTitle="Write Facebook or Google ads, Youtube video descriptions or titles."
                    iconClass="flag"
                    iconBoxBgClass="text-bg-info-soft"
                    href="/usecase-s2/usecase-details-s2"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Blog Section Writing"
                    subTitle="Explain to you how all this mistak idea of pain complete we den ounce with righteous"
                    iconClass="edit"
                    iconBoxBgClass="text-bg-primary-soft"
                    href="/usecase-s2/usecase-details-s2"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Digital Ad Copy"
                    subTitle="Write creative and original advertisement copies for social media channels."
                    iconClass="signal"
                    iconBoxBgClass="text-bg-warning-soft"
                    href="/usecase-s2/usecase-details-s2"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Discount and Sales"
                    subTitle="Pass your request as a command and let AI do the work for you magically."
                    iconClass="percent"
                    iconBoxBgClass="text-bg-purple-soft"
                    href="/usecase-s2/usecase-details-s2"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Job Description"
                    subTitle="Create engaging job descriptions for any position to attract the best candidates"
                    iconClass="briefcase"
                    iconBoxBgClass="text-bg-danger-soft"
                    href="/usecase-s2/usecase-details-s2"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Event Promotion"
                    subTitle="Increase your sign ups and generate more leads"
                    iconClass="puzzle"
                    iconBoxBgClass="text-bg-primary-soft"
                    href="/usecase-s2/usecase-details-s2"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Testimonial & Review"
                    subTitle="Quickly write candid testimonials and reviews for people and services"
                    iconClass="comments"
                    iconBoxBgClass="text-bg-success-soft"
                    href="/usecase-s2/usecase-details-s2"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Keywords Extractor"
                    subTitle="Identify main keywords, keyphrases, and questions in any text"
                    iconClass="tags"
                    iconBoxBgClass="text-bg-info-soft"
                    href="/usecase-s2/usecase-details-s2"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Video Description"
                    subTitle="Create engaging job descriptions for any position to attract the best candidates"
                    iconClass="video"
                    iconBoxBgClass="text-bg-info-soft"
                    href="/usecase-s2/usecase-details-s2"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="Keywords Generator"
                    subTitle="Come up with related keywords, keyphrases, and questions using AI writing assistant"
                    iconClass="file-text"
                    iconBoxBgClass="text-bg-warning-soft"
                    href="/usecase-s2/usecase-details-s2"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle7
                    title="eCommerce Copy"
                    subTitle="Finding Product Names or Product Descriptions can be very time consuming."
                    iconClass="cart"
                    iconBoxBgClass="text-bg-pink-soft"
                    href="/usecase-s2/usecase-details-s2"
                  />
                </div>
              </div>
            </div>
            {/* .section-content */}
          </div>
        </section>
        <section className="section bg-light section-bottom-0">
          <div className="container">
            <div className="section-content">
              <div className="row gx-gs gy-6 justify-content-center align-items-center">
                <div className="col-xl-5 col-lg-8">
                  <div className="block-text pe-xxl-7 text-center text-xl-start">
                    <h2 className="title">CopyGenAI Benefits</h2>
                    <p className="lead">
                      I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings.
                    </p>
                    <ul className="btn-list btn-list-inline gy-0">
                      <li>
                        <Button
                          href="/"
                          btnText="See how it works"
                          btnClass="btn btn-lg btn-primary"
                          rightIconClass="arrow-long-right"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-7">
                  <div className="row">
                    <div className="col-sm-6">
                      <IconBoxStyle4
                        title="Website Copy & SEO"
                        subTitle="Missing inspiration for your Landing Page? Generate headlines, meta tags."
                        iconClass="globe"
                        iconBoxBgClass="bg-primary"
                        titleClass="h3"
                      />
                      <IconBoxStyle4
                        title="Digital Ad Copy"
                        subTitle="Write creative and original advertisement copies for social media channels."
                        iconClass="signal"
                        iconBoxBgClass="bg-warning"
                        variant="mt-gs"
                        titleClass="h3"
                      />
                    </div>
                    <div className="col-sm-6 mt-5">
                      <IconBoxStyle4
                        title="Social Media & Ads"
                        subTitle="Write Facebook or Google ads, Youtube video descriptions or titles."
                        iconClass="flag"
                        iconBoxBgClass="bg-info"
                        titleClass="h3"
                      />
                      <IconBoxStyle4
                        title="Job Description"
                        subTitle="Create engaging job descriptions for any position to attract the best candidates"
                        iconClass="briefcase"
                        iconBoxBgClass="bg-danger"
                        variant="mt-gs"
                        titleClass="h3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-light has-shape">
          <div className="nk-shape bg-shape-blur-m mt-n3 start-50 top-0 translate-middle-x" />
          <div className="container">
            <SectionHeading
              overlineTitle="Testimonials"
              title="CopyGen is rated 4.9/5 stars in <br>over 2,000 reviews"
            />
            <div className="section-content">
              <div className="row g-gs justify-content-center align-items-center">
                <div className="col-lg-4">
                  <Testimonial
                    title="It Gave Me Back Quality Time To Spend w Friends & Family..."
                    subTitle="Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."
                    avatarName="Derek Gehl"
                    avatarDesignation="CEO at Hire & Retain"
                    avatarImgUrl="/images/avatar/author/sm-a.jpg"
                    review={5}
                  />
                </div>
                <div className="col-lg-4">
                  <Testimonial
                    title="A year of organic marketing in about 30 minutes"
                    subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
                    avatarName="Frances Burns"
                    avatarDesignation="Designer at Softnio"
                    avatarImgUrl="/images/avatar/author/sm-b.jpg"
                    review={5}
                  />
                </div>
                <div className="col-lg-4">
                  <Testimonial
                    title="Just wanna shout out the whole team for this amazing tool"
                    subTitle="Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."
                    avatarName="Ashley Lawson"
                    avatarDesignation="Creative at Envato"
                    avatarImgUrl="/images/avatar/author/sm-c.jpg"
                    review={5}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout2>
    </>
  );
}
