import Head from 'next/head';
import React from 'react';
import Layout4 from '../components/Layout/Layout4';
import HeroStyle4 from '../components/Hero/HeroStyle4';
import CtaStyle4 from '../components/Cta/CtaStyle4';
import SectionHeading from '../components/SectionHeading';
import PricingSection from '../components/Pricing/PricingSection';
import Testimonial from '../components/Testimonial';
import Accordion from '../components/Accordion';
import FeatureCardStyle5 from '../components/FeatureCard/FeatureCardStyle5';
import Tab from '../components/Tab';
import heroBanner from '../public/images/gfx/banner/f.png';
import fetureImg1 from '../public/images/gfx/process/a-alt.png';
import fetureImg2 from '../public/images/gfx/process/b-alt.png';
import fetureImg3 from '../public/images/gfx/process/c-alt.png';

export default function HomeS4() {
  return (
    <>
      <Head>
        <title>
          CopyGen - AI Writer & Copywriting Landing Page Next.js Template.
        </title>
      </Head>
      <Layout4>
        <HeroStyle4
          title="Scale your content strategy <span>with AI</span>"
          subTitle="AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost!"
          thumbImg={heroBanner}
          brandTitle="Based on 10,000+ reviews on"
          brandSrcList={[
            '/images/brands/72-b-tone-white.png',
            '/images/brands/72-c-tone-white.png',
            '/images/brands/72-d-tone-white.png',
            '/images/brands/72-e-tone-white.png',
          ]}
        />
        <section className="section section-lg section-bottom-0">
          <div className="container">
            <SectionHeading
              overlineTitle="How it works"
              title="Instruct to our AI and generate copy"
            />
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-sm-6 col-lg-4">
                  <FeatureCardStyle5
                    title="Select writing template"
                    subTitle="Simply choose a template from available list to write content for blog posts, landing page, website content."
                    imgUrl={fetureImg1}
                  />
                </div>
                <div className="col-sm-6 col-lg-4">
                  <FeatureCardStyle5
                    title="Describe your topic"
                    subTitle="Provide our AI content writer with few sentences on what you want to write, and it will start writing for you."
                    imgUrl={fetureImg2}
                  />
                </div>
                <div className="col-md-6 col-lg-4">
                  <FeatureCardStyle5
                    title="Select writing template"
                    subTitle="Our powerful AI tools will generate content in few second, then you can export it to wherever you need."
                    imgUrl={fetureImg3}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lg">
          <div className="container">
            <SectionHeading
              overlineTitle="Copygen.AI Overview"
              title="What amazing content will you <br>create with AI?"
            />
            <Tab />
          </div>
        </section>
        <section className="section section-lg section-0">
          <div className="container">
            <CtaStyle4
              overlineTitle="Boost your writing productivity"
              title="End writer’s block today"
              subtitle="It’s like having access to a team of copywriting experts writing powerful copy for you in 1-click."
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
        <section className="section section-lg section-bottom-0">
          <div className="container">
            <SectionHeading
              overlineTitle="Pricing"
              title="Start your content writing with AI"
            />
            <PricingSection withPopular />
          </div>
        </section>
        <section className="section section-lg section-bottom-0">
          <div className="container">
            <SectionHeading
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
          </div>
        </section>
        <section className="section section-lg ">
          <div className="container">
            <SectionHeading
              overlineTitle="FAQ's"
              title="Frequently Asked Questions"
            />
            <Accordion plusMinus />
          </div>
        </section>
      </Layout4>
    </>
  );
}
