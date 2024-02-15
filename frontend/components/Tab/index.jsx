import React, { useState } from 'react';
import FeatureCardStyle6 from '../FeatureCard/FeatureCardStyle6';
import Icon from '../Icon';
import featureImgA from '../../public/images/gfx/usecase/a.jpg';
import featureImgB from '../../public/images/gfx/usecase/b.jpg';
import featureImgC from '../../public/images/gfx/usecase/c.jpg';
import featureImgD from '../../public/images/gfx/usecase/d.jpg';
import featureImgE from '../../public/images/gfx/usecase/e.jpg';

export default function Tab() {
  const [active, setActive] = useState(1);
  return (
    <div className="section-content">
      <div className="overflow-hidden">
        <ul className="nav nav-tabs nav-tabs-stretch mb-5" role="tablist">
          <li className="w-100 w-sm-50 w-lg-auto">
            <button
              className={`nav-link w-100 w-lg-auto ${
                active === 1 ? 'active' : ''
              }`}
              onClick={() => setActive(1)}
            >
              <Icon icon="flag" className="icon" />
              <span>Social Media &amp; Ads</span>
            </button>
          </li>
          <li className="w-100 w-sm-50 w-lg-auto">
            <button
              className={`nav-link w-100 w-lg-auto ${
                active === 2 ? 'active' : ''
              }`}
              onClick={() => setActive(2)}
            >
              <Icon icon="globe" className="icon" />
              <span>Website Copy &amp; SEO</span>
            </button>
          </li>
          <li className="w-100 w-sm-50 w-lg-auto">
            <button
              className={`nav-link w-100 w-lg-auto ${
                active === 3 ? 'active' : ''
              }`}
              onClick={() => setActive(3)}
            >
              <Icon icon="edit" className="icon" />
              <span>Blog Section Writing</span>
            </button>
          </li>
          <li className="w-100 w-sm-50 w-lg-auto">
            <button
              className={`nav-link w-100 w-lg-auto ${
                active === 4 ? 'active' : ''
              }`}
              onClick={() => setActive(4)}
            >
              <Icon icon="briefcase" className="icon" />
              <span>eCommerce Copy</span>
            </button>
          </li>
          <li className="w-100 w-sm-50 w-lg-auto">
            <button
              className={`nav-link w-100 w-lg-auto ${
                active === 5 ? 'active' : ''
              }`}
              onClick={() => setActive(5)}
            >
              <Icon icon="chat-msg" className="icon" />
              <span>Magic Command</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content p-5 card border-0 rounded-4 shadow-sm">
        <div
          className={`tab-pane p-lg-3 fade ${
            active === 1 ? 'show active' : ''
          }`}
        >
          <FeatureCardStyle6
            imgUrl={featureImgA}
            title="Generate months of social media content in minutes"
            subTitle="Simply choose a template from available list to write content for blog posts, landing page, website content etc."
            subTitleClass="lead"
            featureList={[
              'Analyze your business cost easily with group transaction thorugh tagging feature.',
              'Arrange your business expenses by date, name, etc.',
              'Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.',
            ]}
          />
        </div>
        <div
          className={`tab-pane p-lg-3 fade ${
            active === 2 ? 'show active' : ''
          }`}
        >
          <FeatureCardStyle6
            imgUrl={featureImgB}
            title="Improve Your Website's Visibility and User Experience"
            subTitle="Your website copy is one of the most important factors in determining whether or not people stay on your website and take the actions you want them to take. It needs to be clear,
            concise, and engaging, while also providing valuable information that visitors will find useful."
            featureList={[
              'Establish trust: By providing helpful and informative content, you can establish yourself as an authority in your field and build trust with your audience.',
              'Build credibility: When your website appears at the top of search results, it can help to build credibility and trust with your audience.',
            ]}
          />
        </div>
        <div
          className={`tab-pane p-lg-3 fade ${
            active === 3 ? 'show active' : ''
          }`}
        >
          <FeatureCardStyle6
            imgUrl={featureImgC}
            title="Engage Your Audience and Build Your Brand"
            subTitle="In today's digital age, a blog is an essential tool for any business looking to build its brand and engage with its audience."
            subTitleClass="lead mb-5"
            title2="1. Identify your target audience"
            subTitle2="Before you start writing, it's important to identify who your target audience is. Who are you trying to reach with your blog? What are their interests and pain points?"
            title3="2. Choose relevant topics"
            subTitle3="Your blog topics should be relevant to your business and your audience. Think about the questions and concerns your customers"
          />
        </div>
        <div
          className={`tab-pane p-lg-3 fade ${
            active === 4 ? 'show active' : ''
          }`}
        >
          <FeatureCardStyle6
            imgUrl={featureImgD}
            title="Introducing our new Wireless Bluetooth Earbuds!"
            subTitle="Experience music like never before with our cutting-edge Wireless Bluetooth Earbuds. With advanced noise-cancelling technology and crystal-clear sound, you'll be able to fully immerse yourself in your favorite tunes."
            subTitleClass="lead"
            subTitle2="Our earbuds are ergonomically designed to fit comfortably in your ears, and they're so lightweight that you'll hardly know you're wearing them. They're also sweat-proof and
            water-resistant, so you can take them with you wherever you go, whether you're running, hiking, or just lounging by the pool."
          />
        </div>
        <div
          className={`tab-pane p-lg-3 fade ${
            active === 5 ? 'show active' : ''
          }`}
        >
          <FeatureCardStyle6
            imgUrl={featureImgE}
            title="Quickly write candid testimonials and reviews for people and services"
            subTitle={`"I've been shopping with this company for years, and I can honestly say that their customer service is second to none. I highly recommend this company to anyone looking for a great shopping experience."`}
            subTitleClass="lead"
            subTitle2={`Our earbuds are ergonomically designed to fit comfortably in your ears, and they're so lightweight that you'll hardly know you're wearing them. They're also sweat-proof and water-resistant, so you can take them with you wherever you go, whether you're running, hiking, or just lounging by the
            pool.`}
          />
        </div>
      </div>
    </div>
  );
}
