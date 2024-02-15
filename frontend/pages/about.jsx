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
              title="Every Company Is A Content Company"
              variant="h1"
            />
            <FeatureCardStyle7
              title="Generate months of social media content in minutes"
              subTitle="Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
              featureList={[
                'Analyze your business cost easily with group transaction thorugh tagging feature.',
                'Arrange your business expenses by date, name, etc.',
              ]}
              actionBtnUrl="/"
              actionBtnText="Get Started"
              imgUrl={featureImg}
            />
          </div>
        </section>
        <section className="section section-sm section-0">
          <div className="container">
            <SectionHeading title="Who uses our product" />
            <BrandsStyle2 brandList={brandData} />
          </div>
        </section>
        <section className="section section-bottom-0 has-shape">
          <div className="nk-shape bg-shape-blur-m ms-n8 start-50 top-50 ms-n25 translate-middle-y" />
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
                        titleClass="h3"
                        subTitle="Missing inspiration for your Landing Page? Generate headlines, meta tags."
                        iconClass="globe"
                        iconBoxBgClass="bg-primary"
                      />
                      <IconBoxStyle4
                        title="Digital Ad Copy"
                        titleClass="h3"
                        subTitle="Write creative and original advertisement copies for social media channels."
                        iconClass="signal"
                        iconBoxBgClass="bg-warning"
                        variant="mt-gs"
                      />
                    </div>
                    <div className="col-sm-6 mt-5">
                      <IconBoxStyle4
                        title="Social Media & Ads"
                        titleClass="h3"
                        subTitle="Write Facebook or Google ads, Youtube video descriptions or titles."
                        iconClass="flag"
                        iconBoxBgClass="bg-info"
                      />
                      <IconBoxStyle4
                        title="Job Description"
                        titleClass="h3"
                        subTitle="Create engaging job descriptions for any position to attract the best candidates"
                        iconClass="briefcase"
                        iconBoxBgClass="bg-danger"
                        variant="mt-gs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-bottom-0 has-shape">
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
        <section className="section section-bottom-0">
          <div className="container">
            <Cta
              overlineTitle="Boost your writing productivity"
              title="End writer’s block today"
              subtitle="It’s like having access to a team of copywriting experts writing
              powerful copy for you in 1-click."
              btnUrl="/"
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
