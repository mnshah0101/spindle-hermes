import Head from 'next/head';
import React from 'react';
import Layout2 from '../components/Layout/Layout2';
import HeroStyle2 from '../components/Hero/HeroStyle2';
import SectionHeading from '../components/SectionHeading';
import Accordion from '../components/Accordion';
import SectionHeadingStyle2 from '../components/SectionHeading/SectionHeadingStyle2';
import PricingSectionStyle2 from '../components/Pricing/PricingSectionStyle2';
import IconBoxStyle2 from '../components/IconBox/IconBoxStyle2';
import FeatureCardStyle2 from '../components/FeatureCard/FeatureCardStyle2';
import IconBoxStyle3 from '../components/IconBox/IconBoxStyle3';
import heroImage from '../public/images/spindle_mongo_db.png';
import featureCardImg1 from '../public/images/gfx/process/a.jpg';
import featureCardImg2 from '../public/images/gfx/process/b.jpg';
import featureCardImg3 from '../public/images/gfx/process/c.jpg';

export default function HomeS2() {
  return (
    <>
      <Head>
        <title>
          Spindle - Automated API and Database Hosting
        </title>
      </Head>
      <Layout2>
        <HeroStyle2
          title="AI Developer for Creating"
          typingText={[
            'Instant APIs',
            1000,
            'Database Hosting',
            1000,
            'Intelligent API Endpoints',
            1000,
          ]}
          subTitle="AI Copywriting is revolutionizing the way content is created. AI can create content for blogs, articles, websites, social media and more."
          imgUrl={heroImage}
          btnText="Start writing for free"
          btnUrl="/login-s2"
          btnAlert="No credit card required"
          brandTitle="Trusted by 60,000+ freelancers, marketing teams and agencies."
          brandSrcList={[
            '/images/brands/72-b-white.png',
            '/images/brands/72-c-white.png',
            '/images/brands/72-d-white.png',
            '/images/brands/72-e-white.png',
          ]}
        />
        <section className="section bg-darker is-dark section-top-0 has-shape">
          <div className="nk-shape bg-shape-blur-a start-50 top-50 translate-middle" />
          <div className="container">
            <SectionHeadingStyle2
              title="Superpower with AI Writer"
              subTitle="Let our AI assist with most time consuming to write blog <br>
              articles, product descriptions and more."
            />
            <div className="section-content">
              <div className="row g-gs">
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle3
                    title="Brainstorm faster"
                    subTitle="Use our advanced AI as your personal content writer or partner for your endless work for your business."
                    iconClass="bulb"
                    variant="text-info bg-info"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle3
                    title="Tools and templates"
                    subTitle="Using our AI tools and pre-built template to create
                    content briefs, write and optimize content in one
                    place."
                    iconClass="cpu"
                    variant="text-primary bg-primary"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle3
                    title="Write content faster"
                    subTitle="You do not need to spend hours to write good content
                    — let our advance AI Writer to get it done."
                    iconClass="spark"
                    variant="text-indigo bg-indigo"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle3
                    title="Repurpose content easily"
                    subTitle="Write and saved once, use everywhere. Also rewrite
                    content for different porpose with minimal effort."
                    iconClass="swap-alt"
                    variant="text-success bg-success"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle3
                    title="Write in Any Language"
                    subTitle="Let AI write for you in over 40 languages. Our AI
                    can write in English, Spanish, French and many more
                    language."
                    iconClass="text"
                    variant="text-danger bg-danger"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle3
                    title="Copy and publish anywhere"
                    subTitle="You can simply copy your desire content and then you
                    can publish, like Shopify, WordPress, or anywhere."
                    iconClass="file-docs"
                    variant="text-warning bg-warning"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section section-bottom-0 bg-white rounded-top-6"
          id="howto"
        >
          <div className="container">
            <SectionHeadingStyle2
              overlineTitle="How To"
              title="Few steps to write content"
              subTitle="Let our AI assist with most time consuming to write blog <br>
              articles, product descriptions and more."
            />
            <div className="section-content">
              <div className="row gy-3 justify-content-center">
                <div className="col-xxl-12">
                  <FeatureCardStyle2
                    variant="bg-primary"
                    gradientVariant="bg-gradient-primary"
                    imgUrl={featureCardImg1}
                    imgAlt="Thumbnail"
                    iconUrl="/images/icon/text.svg"
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
                <div className="col-xxl-12">
                  <FeatureCardStyle2
                    variant="bg-warning"
                    gradientVariant="bg-gradient-warning"
                    imgUrl={featureCardImg2}
                    imgAlt="Thumbnail"
                    iconUrl="/images/icon/edit.svg"
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
                <div className="col-xxl-12">
                  <FeatureCardStyle2
                    variant="bg-info"
                    gradientVariant="bg-gradient-info"
                    imgUrl={featureCardImg3}
                    imgAlt="Thumbnail"
                    iconUrl="/images/icon/paper.svg"
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
        <section className="section bg-white has-mask" id="usecase">
          <div className="nk-mask bg-pattern-dot-sm bg-blend-around" />
          <div className="container">
            <SectionHeadingStyle2
              overlineTitle="Use Cases"
              title="Generate in seconds using AI"
              subTitle="Let our AI assist with most time consuming to write blog
              articles, <br>product descriptions and more."
              variant="h1"
            />
            <div className="section-content">
              <div className="row justify-content-center">
                <div className="col-xxl-11">
                  <div className="row gy-6 gx-5 text-center">
                    <div className="col-sm-6 col-lg-4">
                      <IconBoxStyle2
                        title="Blog Post & Articles"
                        subTitle="Generate optimized blog post and articles to get
                        organic traffic - making you visible on the world."
                        imgUrl="/images/icon/articles.svg"
                        imgHeight="32"
                        imgWidth="32"
                      />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <IconBoxStyle2
                        title="Product Description"
                        subTitle="Create a perfect description for your products to
                        engage your customers to click and buy."
                        imgUrl="/images/icon/product-discription.svg"
                        imgHeight="32"
                        imgWidth="32"
                        variant="text-bg-success-soft-outline"
                      />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <IconBoxStyle2
                        title="Social Media Ads"
                        subTitle="Create ads copies for your social media - make an
                        impact with your online marketing campaigns."
                        imgUrl="/images/icon/hand-mic.svg"
                        imgHeight="32"
                        imgWidth="32"
                        variant="text-bg-purple-soft-outline"
                      />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <IconBoxStyle2
                        title="Product Benefits"
                        subTitle="Create a bullet point list of your product benefits that appeal to your customers to purchase."
                        imgUrl="/images/icon/praying-hand.svg"
                        imgHeight="32"
                        imgWidth="32"
                        variant="text-bg-info-soft-outline"
                      />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <IconBoxStyle2
                        title="Suggest Improvements"
                        subTitle="Need to improve your existing content? Our AI will
                        rewrite and improve the content for you."
                        imgUrl="/images/icon/stock-up.svg"
                        imgHeight="32"
                        imgWidth="32"
                        variant="text-bg-primary-soft-outline"
                      />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <IconBoxStyle2
                        title="Landing Page Content"
                        subTitle="Write very attractive headlines, slogans or
                        paragraph for your landing page of your website."
                        imgUrl="/images/icon/website.svg"
                        imgHeight="32"
                        imgWidth="32"
                        variant="text-bg-indigo-soft-outline"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-bottom-0 bg-light" id="pricing">
          <div className="container">
            <SectionHeadingStyle2
              overlineTitle="Pricing"
              title="Plans that start free and <br> fits with your needs"
              subTitle="With our simple plans, supercharge your content writing to
              helps your <br> business. Let’s make great content together."
              variant="h1"
            />
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
