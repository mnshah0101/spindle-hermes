import Head from 'next/head';
import React from 'react';
import Layout2 from '../../components/Layout/Layout2';
import SectionHeadingStyle2 from '../../components/SectionHeading/SectionHeadingStyle2';
import Testimonial from '../../components/Testimonial';
import IconBoxStyle10 from '../../components/IconBox/IconBoxStyle10';
import HeroStyle7 from '../../components/Hero/HeroStyle7';
import FeaturedCardStyle10 from '../../components/FeatureCard/FeaturedCardStyle10';
import FeaturedCardStyle11 from '../../components/FeatureCard/FeaturedCardStyle11';
import HeroThumb from '../../public/images/gfx/banner/e.jpg';
import FeatureImgA from '../../public/images/gfx/process/a.jpg';
import FeatureImgB from '../../public/images/gfx/process/b.jpg';
import FeatureImgC from '../../public/images/gfx/process/c.jpg';

export default function UsecaseDetailsPageS2() {
  return (
    <>
      <Head>
        <title>
          Usecase Details - CopyGen - AI Writer & Copywriting Landing Page
          Next.js Template.
        </title>
      </Head>
      <Layout2>
        <HeroStyle7
          title={`Free AI Writing Tool for Generating <span className="text-gradient-primary">Blog Posts.</span>`}
          subTitle="Copygen is the generative AI platform for business that helps your team create content tailored for your brand 10X faster, wherever you work online."
          btn1Text="Sign up with Google"
          btn1Url="/"
          btn2Text="Sign up with email"
          btn2Url="register"
          btnAlert={`<strong className="text-white">*100% free</strong> to get started. No credit card required.`}
          brandTitle="Trusted by 60,000+ freelancers, marketing teams and agencies."
          brandSrcList={[
            '/images/brands/72-b-white.png',
            '/images/brands/72-c-white.png',
            '/images/brands/72-d-white.png',
            '/images/brands/72-e-white.png',
          ]}
          thumbImgUrl={HeroThumb}
        />
        <section className="section bg-white rounded-top-6">
          <div className="container">
            <SectionHeadingStyle2
              overlineTitle="Testimonials"
              title="CopyGen is rated 4.9/5 stars in over 2,000 reviews"
              containerWidthClass="col-lg-8 col-xl-7 col-xxl-6"
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
            <SectionHeadingStyle2
              overlineTitle="How To"
              title="Few steps to write content"
              subTitle="Let our AI assist with most time consuming to write blog <br>
              articles, product descriptions and more."
            />
            <div className="section-content">
              <div className="row gy-3 justify-content-center">
                <div className="col-lg-12">
                  <FeaturedCardStyle10
                    iconBoxClass="border-primary text-bg-primary-soft"
                    imgBgClass="bg-primary"
                    imgUrl={FeatureImgA}
                    imgAlt="Thumbnail"
                    iconUrl="/images/icon/text2.svg"
                    title="Select writing template"
                    subTitle="Simply choose a template from available list to
                    write content for blog posts, landing page, website
                    content etc."
                    featureList={[
                      'Available more than 10 template.',
                      'A clean and minimalist editor.',
                      'Article generator wizard.',
                    ]}
                  />
                </div>
                <div className="col-lg-12">
                  <FeaturedCardStyle11
                    iconBoxClass="border-warning text-bg-warning-soft"
                    variant="shadow-sm"
                    imgBgClass="bg-warning"
                    imgUrl={FeatureImgB}
                    imgAlt="Thumbnail"
                    iconUrl="/images/icon/edit2.svg"
                    title="Describe your topic"
                    subTitle="Provide our AI content writer with few sentences on
                    what you want to write, and it will start writing
                    for you."
                    featureList={[
                      'Simply provide a few input as topic',
                      'Type a topic like "best ways to earn money"',
                      'Facebook Ads, Headlines and other 10+ tools',
                    ]}
                  />
                </div>
                <div className="col-lg-12">
                  <FeaturedCardStyle10
                    iconBoxClass="border-info text-bg-info-soft"
                    variant="shadow-sm"
                    imgBgClass="bg-info"
                    imgUrl={FeatureImgC}
                    imgAlt="Thumbnail"
                    iconUrl="/images/icon/paper2.svg"
                    title="Generate quality content"
                    subTitle="Our powerful AI tools will generate content in few
                    second, then you can export it to wherever you need."
                    featureList={[
                      'Generate content in under 30 seconds.',
                      'All content is unique and original."',
                      'Generate up to 200 words each time.',
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-light">
          <div className="container">
            <SectionHeadingStyle2
              overlineTitle="Benifits"
              title="Copygen helps‍ Bloggers"
              subTitle="Let our AI assist with most time consuming to write blog articles, product descriptions and more."
              containerWidthClass="col-lg-8 col-xl-7 col-xxl-6"
            />
            <div className="section-content">
              <div className="row g-gs justify-content-center text-center">
                <div className="col-xl-4 col-md-6">
                  <IconBoxStyle10
                    title="How-to Blogs"
                    subTitle="You do not need to spend hours to write good content"
                    actionBtnUrl="/"
                    actionBtnText="Try How-to Blogs"
                    iconClass="question"
                    iconBoxBgClass="text-bg-info-soft"
                  />
                </div>
                <div className="col-xl-4 col-md-6">
                  <IconBoxStyle10
                    title="Blog Ideas"
                    subTitle="Using our AI tools and pre-built template to create content briefs."
                    actionBtnUrl="/"
                    actionBtnText="Try Blog Ideas"
                    iconClass="bulb"
                    iconBoxBgClass="text-bg-warning-soft"
                  />
                </div>
                <div className="col-xl-4 col-md-6">
                  <IconBoxStyle10
                    title="Meta Descriptions"
                    subTitle="Use our advanced AI as your personal content writer"
                    actionBtnUrl="/"
                    actionBtnText="Try Meta Descriptions"
                    iconClass="article"
                    iconBoxBgClass="text-bg-primary-soft"
                  />
                </div>
                <div className="col-xl-4 col-md-6">
                  <IconBoxStyle10
                    title="Thought Leadership"
                    subTitle="You can simply copy your desire content and then you can publish."
                    actionBtnUrl="/"
                    actionBtnText="Try Thought Leadership"
                    iconClass="activity-round"
                    iconBoxBgClass="text-bg-blue-soft"
                  />
                </div>
                <div className="col-xl-4 col-md-6">
                  <IconBoxStyle10
                    title="Listicles"
                    subTitle="Our AI blogger builds high-quality posts in minutes. Are you ready to rank"
                    actionBtnUrl="/"
                    actionBtnText="Try Listicles"
                    iconClass="note-add"
                    iconBoxBgClass="text-bg-success-soft"
                  />
                </div>
                <div className="col-xl-4 col-md-6">
                  <IconBoxStyle10
                    title="Feature Stories"
                    subTitle="Let AI write for you in over 40 languages. Our AI can"
                    actionBtnUrl="/"
                    actionBtnText="Try How-to Feature Stories"
                    iconClass="star-round"
                    iconBoxBgClass="text-bg-danger-soft"
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
