import Head from 'next/head';

import Hero from '../components/Hero';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import IconBox from '../components/IconBox';
import Card from '../components/Card';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import Accordion from '../components/Accordion';
import Cta from '../components/Cta';
import PricingSection from '../components/Pricing/PricingSection';
import heroImage from '../public/images/spindle_mongo_db.png';
import FeatureCardImg from '../public/images/gfx/feature/a.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Spindle - Automatic API Generation and Deployment
        </title>
      </Head>
      <Layout>
        <Hero
          title="Deploy A Database With Hundreds of API Endpoints in a Single Click"
          subTitle="Spindle is a revolutionary tool that allows you to create a MongoDB database with a host of your own custom API endpoints from a csv."
          href="/login"
          btnText="Start deploying for free"
          alertText="No credit card required"
          imgUrl={heroImage}
          imgAlt="Banner"
        />
        <section className="section section-bottom-0 has-shape">
          <div className="nk-shape bg-shape-blur-a mt-8 start-50 top-0 translate-middle-x" />
          <div className="container">
            <SectionHeading
              overlineTitle="Get started for free"
              title="AI Generate content in seconds"
              subTitle="Give our AI a few descriptions and we'll automatically create blog articles, product descriptions and more for you within just few second."
            />
            <div className="section-content">
              <div className="row text-center g-gs">
                <div className="col-md-6 col-xl-4">
                  <IconBox
                    title="Blog Post & Articles"
                    subTitle="Generate optimized blog post and articles to get organic traffic - making you visible to the world."
                    iconClass="book-read"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBox
                    title="Product Description"
                    subTitle="Create a perfect description for your products to
                    engage your customers to click and buy."
                    iconClass="card-view"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBox
                    title="Social Media Ads"
                    subTitle="Create ads copies for your social media - make an impact with your online marketing campaigns."
                    iconClass="facebook-f"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBox
                    title="Product Benefits"
                    subTitle="Create a bullet point list of your product benefits that appeal to your customers to purchase."
                    iconClass="grid-plus"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBox
                    title="Landing Page Content"
                    subTitle="Write very attractive headlines, slogans or paragraph for your landing page of your website."
                    iconClass="layout2"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <IconBox
                    title="Suggest Improvements"
                    subTitle="Need to improve your existing content? Our AI will
                    rewrite and improve the content for you."
                    iconClass="loader"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section has-mask">
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-10p mb-3" />
          <div className="container">
            <SectionHeading
              overlineTitle="How it works"
              title="Instruct to our AI and generate copy"
              subTitle="Give our AI a few descriptions and we'll automatically
              create blog articles, product descriptions and more for you
              within just few second."
            />
            <div className="section-content">
              <div className="row g-gs">
                <div className="col-lg-4">
                  <Card
                    title="Select writing template"
                    subTitle="Simply choose a template from available list to write
                    content for blog posts, landing page, website content
                    etc."
                    imgUrl="/images/number/1.png"
                    imgAlt="1"
                    imgHeight="101"
                    imgWidth="42"
                  />
                </div>
                <div className="col-lg-4">
                  <Card
                    title="Describe your topic"
                    subTitle="Provide our AI content writer with few sentences on
                    what you want to write, and it will start writing for
                    you."
                    imgUrl="/images/number/2.png"
                    imgAlt="2"
                    imgHeight="103"
                    imgWidth="64"
                  />
                </div>
                <div className="col-lg-4">
                  <Card
                    title="Generate quality content"
                    subTitle="Our powerful AI tools will generate content in few
                    second, then you can export it to wherever you need."
                    imgUrl="/images/number/3.png"
                    imgAlt="3"
                    imgHeight="103"
                    imgWidth="66"
                  />
                </div>
              </div>
            </div>
            <div className="section-actions text-center">
              <ul className="btn-list btn-list-inline gx-gs gy-3">
                <li>
                  <Button
                    href="/login"
                    btnClass="btn btn-primary btn-lg"
                    btnText="Start free trial today"
                  />
                </li>
                <li>
                  <Button
                    href="/"
                    btnClass="btn btn-primary btn-soft btn-lg"
                    btnText="See action in video"
                    leftIconClass="play"
                  />
                </li>
              </ul>
            </div>
            <FeatureCard
              imgUrl={FeatureCardImg}
              imgAlt="Feature Thumb"
              title="AI Generate content in seconds"
              subTitle="Generate copy that converts for business bios, facebook ads,
              product descriptions, emails, landing pages, social ads, and more."
              featureList={[
                'Create article that are complete in less than 15 seconds.',
                'Save hundreds of hours with our AI article generator.',
                'Improve your copy with the article rewriter.',
              ]}
              listIconClass="minus text-primary"
            />
          </div>
        </section>
        <section className="section section-bottom-0 section-top-0">
          <div className="container">
            <SectionHeading
              overlineTitle="Pricing"
              title="Start your content writing with AI"
              subTitle="With our simple plans, supercharge your content <br>writing to
              helps your business."
            />
            <PricingSection />
          </div>
        </section>
        <section className="section section-bottom-0">
          <div className="container">
            <SectionHeading title="Frequently Asked Questions" />
            <Accordion plusMinus />
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
