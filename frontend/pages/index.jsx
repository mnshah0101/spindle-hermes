import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import HeroStyle2 from '../components/Hero/HeroStyle2';
import SectionHeading from '../components/SectionHeading';
import Accordion from '../components/Accordion';
import SectionHeadingStyle2 from '../components/SectionHeading/SectionHeadingStyle2';
import PricingSectionStyle2 from '../components/Pricing/PricingSectionStyle2';
import IconBoxStyle2 from '../components/IconBox/IconBoxStyle2';
import FeatureCardStyle2 from '../components/FeatureCard/FeatureCardStyle2';
import IconBoxStyle3 from '../components/IconBox/IconBoxStyle3';
import heroImage from '../public/images/spindle_mongo_db.png';
import featureCardImg1 from '../public/images/csvexample.png';
import featureCardImg2 from '../public/images/dbexample.png';
import featureCardImg3 from '../public/images/apiexample.png';

export default function HomeS2() {
  return (
    <>
      <Head>
        <title>
          Spindle - Automated API and Database Hosting
        </title>
      </Head>
      <Layout>
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
         subTitle="Revolving the way you manage your data. Automatically create mongodb and APIs from CSV."
          imgUrl={heroImage}
          btnText="Get started for free"
          btnUrl="/login"
          btnAlert="No credit card required"
          brandTitle="Spindle is powered by OPENAI's GPT-4 through Langchain. We also use MongoDB for your databases."
          brandSrcList={[
            '/images/mongo_logo.png',
            '/images/langchain_logo.png',
          ]}
        />
       <section className="section bg-darker is-dark section-top-0 has-shape">
  <div className="nk-shape bg-shape-blur-a start-50 top-50 translate-middle" />
  <div className="container">
    <SectionHeadingStyle2
      title="Automate Your Database and API with AI"
      subTitle="Upload a .csv file and let our AI create a MongoDB, generate API endpoints and host them on the fly."
    />
    <div className="section-content">
      <div className="row g-gs">
        <div className="col-md-6 col-xl-4">
          <IconBoxStyle3
            title="Easy CSV Upload"
            subTitle="Upload your CSV data and our system automatically parses it and creates a Mongoose schema."
            iconClass="upload"
            variant="text-info bg-info"
          />
        </div>
        <div className="col-md-6 col-xl-4">
          <IconBoxStyle3
            title="Automated MongoDB Creation"
            subTitle="We run code in a VM to create a Mongo collection in our database from your CSV, and upload your inputted data into MongoDB."
            iconClass="file"
            variant="text-primary bg-primary"
          />
        </div>
        <div className="col-md-6 col-xl-4">
          <IconBoxStyle3
            title="API Endpoint Generation"
            subTitle="We automatically create basic API endpoints with CRUD functionality and host them."
            iconClass="server"
            variant="text-indigo bg-indigo"
          />
        </div>
        <div className="col-md-6 col-xl-4">
          <IconBoxStyle3
            title="Interactive Dashboard"
            subTitle="View your API with the documentation we made in a user-friendly dashboard."
            iconClass="dashboard"
            variant="text-success bg-success"
          />
        </div>
        <div className="col-md-6 col-xl-4">
          <IconBoxStyle3
            title="Prompt New Endpoints"
            subTitle="Create new endpoints with natural language commands."
            iconClass="pen"
            variant="text-danger bg-danger"
          />
        </div>
        <div className="col-md-6 col-xl-4">
          <IconBoxStyle3
            title="Optimized For Developers"
            subTitle="Our system intelligently handles all the heavy lifting, so you can focus on what counts."
            iconClass="code"
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
      title="Steps to create your MongoDB & APIs"
      subTitle="Ease through the process of MongoDB database creation and API generation using your CSV files."
    />
    <div className="section-content">
      <div className="row gy-3 justify-content-center">
        <div className="col-xxl-12">
          <FeatureCardStyle2
            variant="bg-primary"
            gradientVariant="bg-gradient-primary"
            imgUrl={featureCardImg1}
            imgAlt="Thumbnail"
            iconUrl="/images/icon/edit.svg"
            title="Submit your CSV"
            subTitle="Simply upload your CSV file. We will parse it and generate a mongoose schema."
            featureList={[
              'Supports all types of CSV files.',
              'Secure and fast parsing.',
              'Automatic mongoose schema generation.',
            ]}
          />
        </div>
        <div className="col-xxl-12">
          <FeatureCardStyle2
            variant="bg-warning"
            gradientVariant="bg-gradient-warning"
            imgUrl={featureCardImg2}
            imgAlt="Thumbnail"
            iconUrl="/images/icon/paper.svg"
            title="Create your database"
            subTitle="The parsed CSV data will be used to create a MongoDB collection in our database."
            featureList={[
              'Automatic MongoDB creation from CSV.',
              'All data securely established in MongoDB.',
              'Instant database creation on our VM.',
            ]}
          />
        </div>
        <div className="col-xxl-12">
          <FeatureCardStyle2
            variant="bg-info"
            gradientVariant="bg-gradient-info"
            imgUrl={featureCardImg3}
            imgAlt="Thumbnail"
            iconUrl="/images/icon/website.svg"
            title="Generate your APIs"
            subTitle="We'll create basic API endpoints with CRUD functionality and host them for you."
            featureList={[
              'Automatic API endpoint generation.',
              'Built-in CRUD functionality.',
              'APIs hosted on our secure VM.',
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
              title="Setup in minutes, no coding necessary"
              subTitle="Input a csv. Our AI will generate a MongoDB, API endpoints, 
              and even allow custom endpoint generation through natural language."
              variant="h1"
            />
            <div className="section-content">
              <div className="row justify-content-center">
                <div className="col-xxl-11">
                  <div className="row gy-6 gx-5 text-center">
                    <div className="col-sm-6 col-lg-4">
                      <IconBoxStyle2
                        title="Parse CSV"
                        subTitle="Input a csv to get started. It's that simple!"
                        imgUrl="/images/icon/articles.svg"
                        imgHeight="32"
                        imgWidth="32"
                      />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <IconBoxStyle2
                        title="Generate MongoDB"
                        subTitle="We auto-generate a MongoDB based on your csv."
                        imgUrl="/images/icon/product-discription.svg"
                        imgHeight="32"
                        imgWidth="32"
                        variant="text-bg-success-soft-outline"
                      />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <IconBoxStyle2
                        title="Create API Endpoints"
                        subTitle="We create RESTful API endpoints with full CRUD functionality on your data."
                        imgUrl="/images/icon/hand-mic.svg"
                        imgHeight="32"
                        imgWidth="32"
                        variant="text-bg-purple-soft-outline"
                      />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <IconBoxStyle2
                        title="Customize Endpoints"
                        subTitle="From the dashboard, create custom endpoints using natural language."
                        imgUrl="/images/icon/praying-hand.svg"
                        imgHeight="32"
                        imgWidth="32"
                        variant="text-bg-info-soft-outline"
                      />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <IconBoxStyle2
                        title="Hosted API"
                        subTitle="Code for endpoints run in a dedicated VM when API calls are made."
                        imgUrl="/images/icon/stock-up.svg"
                        imgHeight="32"
                        imgWidth="32"
                        variant="text-bg-primary-soft-outline"
                      />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <IconBoxStyle2
                        title="Fully Documented"
                        subTitle="Every API comes with full documentation for ease of use."
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
 
        <section className="section bg-light">
          <div className="container">
            <SectionHeading
              title="Frequently Asked Questions"
              subTitle="If you have any questions not answered in the FAQ, please do not hesitate to contact us."
              containerWidthClass="col-xl-8"
            />
            <Accordion variant="accordion-separated" plusMinus />
          </div>
        </section>
      </Layout>
    </>
  );
}
