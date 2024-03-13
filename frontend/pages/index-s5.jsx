import Head from 'next/head';
import React from 'react';
import Layout5 from '../components/Layout/Layout5';
import HeroStyle5 from '../components/Hero/HeroStyle5';
import SectionHeadingStyle2 from '../components/SectionHeading/SectionHeadingStyle2';
import Accordion from '../components/Accordion';
import PricingSectionStyle4 from '../components/Pricing/PricingSectionStyle4';
import IconBoxStyle6 from '../components/IconBox/IconBoxStyle6';
import CardStyle2 from '../components/Card/CardStyle2';
import FeatureCard from '../components/FeatureCard';
import Brands from '../components/Brands';
import TestimonialStyle2 from '../components/Testimonial/TestimonialStyle2';
import heroBanner from '../public/images/gfx/banner/g.jpg';
import featureImg from '../public/images/gfx/feature/b.png';
const brandData = [
  {
    lightUrl: '/images/brands/72-a.png',
    darkUrl: '/images/brands/72-a-tone-white.png',
  },
  {
    lightUrl: '/images/brands/72-b.png',
    darkUrl: '/images/brands/72-b-tone-white.png',
  },
  {
    lightUrl: '/images/brands/72-c.png',
    darkUrl: '/images/brands/72-c-tone-white.png',
  },
  {
    lightUrl: '/images/brands/72-d.png',
    darkUrl: '/images/brands/72-d-tone-white.png',
  },
  {
    lightUrl: '/images/brands/72-e.png',
    darkUrl: '/images/brands/72-e-tone-white.png',
  },
];
const testimonialData = [
  {
    avatarImageUrl: '/images/avatar/author/sm-e.jpg',
    avatarName: 'Ozioma Egwuonwu',
    avatarDesignation: 'CEO at Hire & Retain',
    title: 'Great app - Easy to use',
    subtitle:
      'Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy...gotta love that. ✌️',
  },
  {
    avatarImageUrl: '/images/avatar/author/sm-n.jpg',
    avatarName: 'Derek Gehl',
    avatarDesignation: 'CEO at Hire & Retain',
    title: 'Time Saving and Better Than PLR Content',
    subtitle:
      'CpoyGen is a fantastic tool for writing product descriptions and getting started on blog posts. No longer do I have to stare at a blank screen trying to figure out how to flesh out a topic beyond 50 words. For me, CopyGen replaces buying PLR content that I would similarly edit and personalize. This saves me time because I can actually tailor to my keyword and niche needs.',
  },
  {
    avatarImageUrl: '/images/avatar/author/sm-m.jpg',
    avatarName: 'Frances Burns',
    avatarDesignation: 'CEO at Hire & Retain',
    title: 'Like the name the Software also very SIMPLE to use',
    subtitle:
      'I was impressed I have to say, from the time it took me to come up with this stuff, your system improved my productivity. I think you have a creative tool, properly postured, it can generate alot of positive impact.',
  },
  {
    avatarImageUrl: '/images/avatar/author/sm-o.jpg',
    avatarName: 'Merri Evans',
    avatarDesignation: 'CEO at Hire & Retain',
    title: 'A year of organic marketing in about 30 minutes',
    subtitle:
      'Writing articles has never been easier for me. Since I started using CopyGen, I only need a few minutes 🎉',
  },
  {
    avatarImageUrl: '/images/avatar/author/sm-b.jpg',
    avatarName: 'Ben Tortora',
    avatarDesignation: 'CEO at Hire & Retain',
    title: 'Just wanna shout out the whole team for this amazing tool',
    subtitle:
      'I love it! The simplicity of writing and designing in one app 🎉 Makes social media marketing a breeze ❤️',
  },
  {
    avatarImageUrl: '/images/avatar/author/sm-p.jpg',
    avatarName: 'Martin Schoel',
    avatarDesignation: 'CEO at Hire & Retain',
    title: "They've hit a home run with this AI tool",
    subtitle:
      'I was literally speechless from the originality of the content that my very first CopyGen test was able to produce from only a small sample of my original content. I was anticipating useless gibberish, but was instead genuinely dumbfounded. I stared at it in amazement for a solid 3 minutes while the idea machine in my head spun wildly, and I contemplated',
  },
];

export default function HomeS5() {
  return (
    <>
      <Head>
        <title>
          CopyGen - AI Writer & Copywriting Landing Page Next.js Template.
        </title>
      </Head>
      <Layout5>
        <HeroStyle5
          upTitle="Welcome to CopyGen.ai"
          title="Create amazing <span className='text-gradient-primary'>web content</span> posts10X faster with AI."
          subTitle="Elegantly structured content with references in just a few clicks."
          bnt1Text="Sign up with Google"
          btn1Url="/index-s5"
          btn2Text="Sign up with email"
          btn2Url="/register"
          alertMessage="<strong>*100% free </strong> to get started. No credit card required."
          thumbImgUrl={heroBanner}
        />
        <section className="section section-lg section-bottom-0">
          <div className="container">
            <Brands
              brandList={brandData}
              title="Join hundreds of teams that rely on our AI Article Writer to create better content faster"
              actionBtnUrl="/login"
              actionBtnText="Start Free Trial"
            />
          </div>
        </section>
        <section className="section section-lg section-bottom-0">
          <div className="container">
            <SectionHeadingStyle2
              title="Increase profits and efficiency with our AI text generator"
              subTitle="An AI text generator can help businesses increase profits by improving their content marketing strategy. By leveraging the power of artificial intelligence a faster rate than ever before."
              variant="h1"
              containerWidthClass="col-lg-9 col-xl-9 px-xxl-5"
            />
            <FeatureCard
              imgUrl={featureImg}
              imgAlt="Feature Thumb"
              title="Full-length article drafts gives you a solid base for writing."
              subTitle="With an AI text generator, businesses can create high-quality content in a fraction of the time it would take to create the same content manually."
              subTitleClass="lead"
              featureList={[
                'The AI-generated text is always fresh and relevant.',
                'The AI-generated text is guaranteed to be unique and original.',
                'The AI-generated text is SEO-friendly and authoritative.',
                'AI text generators can help businesses create content that is more engaging and personalized to their customers needs',
              ]}
              listIconClass="check-circle-fill text-info fs-4"
            />
          </div>
        </section>
        <section className="section section-lg section-bottom-0 has-shape">
          <div className="nk-shape bg-shape-border-d mt-n8 mt-lg-n9 start-50 translate-middle-x" />
          <div className="container">
            <SectionHeadingStyle2
              title="Content generation made easy"
              subTitle="Give our AI a few descriptions and we'll automatically create blog articles, product descriptions and more for you within just few second."
              containerWidthClass="col-lg-9 col-xl-7"
            />
            <div className="section-content">
              <div className="row g-gs">
                <div className="col-lg-4">
                  <CardStyle2
                    title="Trustworthy Research"
                    subTitle="Simply choose a template from available list to write content for blog posts, landing page, website content etc."
                    imgUrl="/images/number/1-light.png"
                    imgAlt="1"
                    imgHeight="101"
                    imgWidth="42"
                  />
                </div>
                <div className="col-lg-4">
                  <CardStyle2
                    title="Time Efficiency"
                    subTitle="Provide our AI content writer with few sentences on
                    what you want to write, and it will start writing
                    for you."
                    imgUrl="/images/number/2-light.png"
                    imgAlt="2"
                    imgHeight="103"
                    imgWidth="64"
                  />
                </div>
                <div className="col-lg-4">
                  <CardStyle2
                    title="SEO Efficiency"
                    subTitle="Our powerful AI tools will generate content in few
                    second, then you can export it to wherever you need."
                    imgUrl="/images/number/3-light.png"
                    imgAlt="3"
                    imgHeight="103"
                    imgWidth="66"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lg section-bottom-0">
          <div className="container">
            <SectionHeadingStyle2
              title="How will CopyGen unlock your creative potential?"
              subTitle="Copygen.ai allows you to create multiple pieces of content quickly and efficiently, increasing your productivity and freeing up time to focus on other important tasks."
              variant="h1"
              containerWidthClass="col-lg-9 col-xl-7 col-xxl-8"
            />
            <div className="section-content">
              <div className="row gy-gs gx-xxl-9">
                <div className="col-md-6">
                  <IconBoxStyle6
                    title="Write copy & content that converts"
                    subTitle="You can generate high-quality content in seconds, saving you valuable time that you can spend on other important tasks."
                    iconClass="note-add"
                  />
                </div>
                <div className="col-md-6">
                  <IconBoxStyle6
                    title="Brainstorm new ideas."
                    subTitle="An interview-style show featuring industry leaders, experts, and influencers, covering topics ranging from tech, politics, art, and more."
                    iconClass="bulb"
                  />
                </div>
                <div className="col-md-6">
                  <IconBoxStyle6
                    title="10X your content output"
                    subTitle="Use templates to streamline your content creation process. This can include templates for blog posts, social media posts, videos, and more."
                    iconClass="activity-round"
                  />
                </div>
                <div className="col-md-6">
                  <IconBoxStyle6
                    title="Write better, everywhere."
                    subTitle="Reading widely can help improve your writing skills by exposing you to different writing styles, grammar structures, and vocabulary."
                    iconClass="text-a"
                  />
                </div>
                <div className="col-md-6">
                  <IconBoxStyle6
                    title="Create content in 26 languages"
                    subTitle="Copygen can read and write content in 25 languages including English, Spanish, Japanese, and Portuguese."
                    iconClass="text2"
                  />
                </div>
                <div className="col-md-6">
                  <IconBoxStyle6
                    title="Build an AI-Powered business."
                    subTitle="Building an AI-powered business is an ongoing process, and requires ongoing investment in data, technology, and expertise."
                    iconClass="puzzle"
                  />
                </div>
                <div className="col-md-6">
                  <IconBoxStyle6
                    title="Collaborate with your team"
                    subTitle="Clear communication is key to successful collaboration. Be sure to express your ideas clearly and listen actively to others."
                    iconClass="presentation"
                  />
                </div>
                <div className="col-md-6">
                  <IconBoxStyle6
                    title="Have fun! CopyGen is a joy."
                    subTitle="AI is an exciting, new technology that can unlock your imagination to create some amazing things."
                    iconClass="happy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-lg section-bottom-0 has-shape">
          <div className="nk-shape bg-shape-border-f ms-40p mt-8 start-50 translate-middle-x" />
          <div className="container">
            <SectionHeadingStyle2
              title="See what AI writers have to say"
              subTitle="This is a straightforward and commonly used header that lets customers <br>know they are looking at different pricing options."
              variant="h1"
              containerWidthClass="col-lg-10 col-xl-9 col-xxl-8"
            />
            <div className="custom-isotop">
              {testimonialData.map((item, index) => (
                <TestimonialStyle2
                  key={index}
                  avatarImgUrl={item.avatarImageUrl}
                  avatarName={item.avatarName}
                  avatarDesignation={item.avatarDesignation}
                  title={item.title}
                  subTitle={item.subtitle}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-lg section-bottom-0">
          <div className="container">
            <SectionHeadingStyle2
              title="Plans that best suit your business requirements"
              subTitle="This is a straightforward and commonly used header that lets customers know <br>they are looking at different pricing options."
              variant="h1"
              containerWidthClass="col-lg-9 col-xl-7 col-xxl-8"
            />
            <PricingSectionStyle4 />
          </div>
        </section>
        <section className="section section-lg has-shape">
          <div className="nk-shape bg-shape-border-e ms-n25p mt-2 start-50 translate-middle-x" />
          <div className="container">
            <div className="nk-shape bg-shape-wormhole-a mt-n45p mt-xl-n40p mt-xxl-n35p ms-2 start-50 top-100 translate-middle-x" />
            <SectionHeadingStyle2
              title="Questions & Answers"
              subTitle="This is a straightforward and commonly used header that lets customers know <br>they are looking at different pricing options."
              variant="h1"
              containerWidthClass="col-lg-9 col-xl-7 col-xxl-8"
            />
            <Accordion
              variant="accordion-separated"
              accordionItemVariant="border-0 bg-gradient-light"
            />
          </div>
        </section>
      </Layout5>
    </>
  );
}
