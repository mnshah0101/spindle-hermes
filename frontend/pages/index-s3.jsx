import React from 'react';
import Layout3 from '../components/Layout/Layout3';
import HeroStyle3 from '../components/Hero/HeroStyle3';
import Head from 'next/head';
import CtaStyle3 from '../components/Cta/CtaStyle3';
import PricingSectionStyle3 from '../components/Pricing/PricingSectionStyle3';
import SectionHeadingStyle2 from '../components/SectionHeading/SectionHeadingStyle2';
import IconBoxStyle4 from '../components/IconBox/IconBoxStyle4';
import Button from '../components/Button';
import IconBoxStyle5 from '../components/IconBox/IconBoxStyle5';
import FeatureCardStyle3 from '../components/FeatureCard/FeatureCardStyle3';
import FeatureCardStyle4 from '../components/FeatureCard/FeatureCardStyle4';
import TestimonialSlider from '../components/TestimonialSlider';
import heroBanner from '../public/images/gfx/banner/b.png';
import featuredImg1 from '../public/images/gfx/process/a.jpg';
import featuredImg2 from '../public/images/gfx/process/b.jpg';
import featuredImg3 from '../public/images/gfx/process/c.jpg';

export default function HomeS3() {
  return (
    <>
      <Head>
        <title>
          CopyGen - AI Writer & Copywriting Landing Page Next.js Template.
        </title>
      </Head>
      <Layout3>
        <HeroStyle3
          title="Get high quality copy written fast <span className='text-gradient-primary'>with AI</span>"
          subTitle="AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost!"
          bnt1Text="Sign up with Google"
          btn1Url="/index-s3"
          btn2Text="Sign up with email"
          btn2Url="/register"
          alertMessage="<span className='text-primary'>*100% free </span> to get started. No credit card required."
          thumbImg={heroBanner}
        />
        <section className="section section-0 has-shape">
          <div className="nk-shape bg-shape-blur-d start-50 bottom-0" />
          <div className="nk-shape bg-shape-blur-e mt-n12 me-n10 end-50" />
          <div className="container">
            <div className="section-content">
              <div className="row text-center g-gs justify-content-center">
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle5
                    variant="text-bg-primary-soft-outline"
                    iconClass="speed"
                    title="Write blogs 10x faster"
                    subTitle="Explain to you how all this mistak idea of pain
                    complete we den ounce with righteous"
                    btnText="Try Blog Writers"
                    btnUrl="/"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle5
                    variant="text-bg-info-soft-outline"
                    iconClass="edit"
                    title="Write higher converting posts"
                    subTitle="Teachings of the great explorer of the truth, the
                    master-builder of human happiness"
                    btnText="Try Social Media Managers"
                    btnUrl="/"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle5
                    variant="text-bg-blue-soft-outline"
                    iconClass="chat-msg"
                    title="Write more engaging emails"
                    subTitle="Praising pain was born and I will give you a
                    complete account of the system"
                    btnText="Email Marketers"
                    btnUrl="/"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lg section-bottom-0 has-shape">
          <div className="nk-shape bg-shape-blur-f me-12 mt-10p end-50" />
          <div className="container">
            <SectionHeadingStyle2
              title='CopyGen helps <span className="text-gradient-primary">76,000+</span> people like you create better content 10X faster.'
              variant="h1"
              containerWidthClass="col-xl-11 col-xxl-10"
              btnUrl="/login"
              btnText="Start for free"
              btnClass="btn btn-lg rounded-pill btn-primary"
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
        <section className="section section-lg section-bottom-0 has-shape">
          <div className="nk-shape bg-shape-blur-g mt-n20p start-50" />
          <div className="nk-shape bg-shape-blur-h translate-middle-y top-50 end-50" />
          <div className="nk-shape bg-shape-blur-i mb-n30p bottom-0 start-50" />
          <div className="container">
            <SectionHeadingStyle2 title="How it works" variant="h1" />
            <FeatureCardStyle3
              number="01"
              title="Select a Template"
              subtitle="Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem
              aperiam, quasi architecto beatae vitae dicta sunt
              explicabo."
              imgUrl={featuredImg1}
              svgBgUrl="/images/svgbg/1.svg"
              svgBgUrlClass="position-absolute top-0 start-0 mt-n5 ms-n3 me-6 z-index-n1"
            />
            <FeatureCardStyle4
              number="02"
              title="Fill in Your Product Details"
              subtitle="Explain with as many details as possible to the AI what you would like to write about."
              featureList={[
                'At vero eos et accusamus et iusto',
                'At vero eos et accusamus et iusto',
              ]}
              imgUrl={featuredImg2}
              svgBgUrl="/images/svgbg/2.svg"
              svgBgUrlClass="position-absolute top-0 start-0 mt-n5 mt-lg-n6 mt-xl-n7 ms-2 ms-sm-3 ms-md-0 ms-lg-1 me-5 me-sm-6 me-md-2 me-lg-0 me-xl-2 z-index-n1"
            />
            <FeatureCardStyle3
              number="03"
              title="Generate AI Content"
              subtitle="Our highly trained AI understands your details and generate unique and human-like content in seconds."
              imgUrl={featuredImg3}
              svgBgUrl="/images/svgbg/3.svg"
              svgBgUrlClass="position-absolute top-0 start-0 mt-n5 ms-n5 z-index-n1"
            />
          </div>
        </section>
        <section className="section section-lg section-bottom-0">
          <div className="container">
            <SectionHeadingStyle2
              title="What amazing content will you create with AI?"
              variant="h1"
            />
            <div className="section-content">
              <div className="row g-gs">
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle4
                    iconBoxBgClass="bg-primary"
                    iconClass="globe"
                    title="Website Copy & SEO"
                    subTitle="Missing inspiration for your Landing Page? Generate headlines, meta tags."
                    variant="h-100"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle4
                    iconBoxBgClass="bg-info"
                    iconClass="flag"
                    title="Social Media & Ads"
                    subTitle="Write Facebook or Google ads, Youtube video descriptions or titles."
                    variant="h-100"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle4
                    iconBoxBgClass="bg-purple"
                    iconClass="edit"
                    title="Blog Section Writing"
                    subTitle="Write Facebook or Google ads, Youtube video descriptions or titles."
                    variant="h-100"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle4
                    iconBoxBgClass="bg-warning"
                    iconClass="signal"
                    title="Digital Ad Copy"
                    subTitle="Write creative and original advertisement copies for social media channels."
                    variant="h-100"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle4
                    iconBoxBgClass="bg-danger"
                    iconClass="briefcase"
                    title="Job Description"
                    subTitle="Create engaging job descriptions for any position to attract the best candidates"
                    variant="h-100"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBoxStyle4
                    iconBoxBgClass="bg-success"
                    iconClass="chat-msg"
                    title="Magic Command"
                    subTitle="Pass your request as a command and let AI do the work for you magically."
                    variant="h-100"
                  />
                </div>
              </div>
            </div>
            <div className="section-actions text-center">
              <ul className="btn-list btn-list-inline g-gs">
                <li>
                  <Button
                    href="/usecase"
                    btnText="View all use-cases"
                    btnClass="btn btn-primary btn-lg rounded-pill"
                    rightIconClass="arrow-long-right"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section section-lg section-bottom-0 has-shape">
          <div className="nk-shape bg-shape-blur-j start-50 top-0" />
          <div className="container">
            <SectionHeadingStyle2
              title="Get in Reasonable Price"
              variant="h1"
            />
            <PricingSectionStyle3 />
          </div>
        </section>
        <CtaStyle3
          title="Ready to get started?"
          subTitle="It's like having access to a team of copywriting experts writing powerful copy for you in 1-click."
          btnText="Get Started For Free"
          btnLink="/login"
        />
      </Layout3>
    </>
  );
}
