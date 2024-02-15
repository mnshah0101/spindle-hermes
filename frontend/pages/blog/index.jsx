import Head from 'next/head';
import React from 'react';
import Layout from '../../components/Layout';
import Cta from '../../components/Cta';
import SectionHeading from '../../components/SectionHeading';
import CardStyle3 from '../../components/Card/CardStyle3';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
const blogData = [
  {
    href: '/blog/blog-single',
    thumbImgUrl: '/images/blog/a.jpg',
    thumbImgWidth: 740,
    thumbImgHeight: 408,
    category: 'CopyGen',
    title: 'How Content Generators Work & How To Use Them Effectively',
    avatarImgUrl: '/images/avatar/author/sm-d.jpg',
    avatarName: 'Ashley Lawson',
    date: 'Feb 10, 2023',
    time: '11 min read',
  },
  {
    href: '/blog/blog-single',
    thumbImgUrl: '/images/blog/b.jpg',
    thumbImgWidth: 740,
    thumbImgHeight: 408,
    category: 'Artificial Intelligence',
    title: 'What Is An AI Writing Assistant, And How Is It Beneficial?',
    avatarImgUrl: '/images/avatar/author/sm-e.jpg',
    avatarName: 'Frances Burns',
    date: 'Feb 9, 2023',
    time: '8 min read',
  },
  {
    href: '/blog/blog-single',
    thumbImgUrl: '/images/blog/c.jpg',
    thumbImgWidth: 740,
    thumbImgHeight: 408,
    category: 'Content Marketing',
    title: '15 Uses of Content Generator Tools and Why You Need Them',
    avatarImgUrl: '/images/avatar/author/sm-g.jpg',
    avatarName: 'John Carter',
    date: 'Feb 9, 2023',
    time: '10 min read',
  },
  {
    href: '/blog/blog-single',
    thumbImgUrl: '/images/blog/d.jpg',
    thumbImgWidth: 740,
    thumbImgHeight: 408,
    category: 'CopyGen',
    title: '5 Reasons Why CopyGenAI Is the Best AI Writing Assistant',
    avatarImgUrl: '/images/avatar/author/sm-g.jpg',
    avatarName: 'Derek Gehl',
    date: 'Feb 7, 2023',
    time: '5 min read',
  },
  {
    href: '/blog/blog-single',
    thumbImgUrl: '/images/blog/e.jpg',
    thumbImgWidth: 740,
    thumbImgHeight: 408,
    category: 'CopyGen',
    title: 'How AI Helps with Online Content Creation',
    avatarImgUrl: '/images/avatar/author/sm-h.jpg',
    avatarName: 'John Carter',
    date: 'Feb 7, 2023',
    time: '9 min read',
  },
  {
    href: '/blog/blog-single',
    thumbImgUrl: '/images/blog/f.jpg',
    thumbImgWidth: 740,
    thumbImgHeight: 408,
    category: 'Content Marketing',
    title: 'Are AI Translators Reliable for Legal Document Translation?',
    avatarImgUrl: '/images/avatar/author/sm-i.jpg',
    avatarName: 'John Carter',
    date: 'Feb 7, 2023',
    time: '12 min read',
  },
  {
    href: '/blog/blog-single',
    thumbImgUrl: '/images/blog/g.jpg',
    thumbImgWidth: 740,
    thumbImgHeight: 408,
    category: 'CopyGen',
    title: '5 Reasons Why CopyGenAI Is the Best AI Writing Assistant',
    avatarImgUrl: '/images/avatar/author/sm-j.jpg',
    avatarName: 'John Carter',
    date: 'Feb 6, 2023',
    time: '11 min read',
  },
  {
    href: '/blog/blog-single',
    thumbImgUrl: '/images/blog/h.jpg',
    thumbImgWidth: 740,
    thumbImgHeight: 408,
    category: 'Artificial Intelligence',
    title: '12 Best AI Content Generators To Choose From',
    avatarImgUrl: '/images/avatar/author/sm-k.jpg',
    avatarName: 'Aastha Thakur',
    date: 'Feb 5, 2023',
    time: '6 min read',
  },
  {
    href: '/blog/blog-single',
    thumbImgUrl: '/images/blog/i.jpg',
    thumbImgWidth: 740,
    thumbImgHeight: 408,
    category: 'Content Marketing',
    title: 'How We Designed a World-Class AI-Powered Content Tool',
    avatarImgUrl: '/images/avatar/author/sm-l.jpg',
    avatarName: 'Mavis Mata',
    date: 'Feb 3, 2023',
    time: '19 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>
          Blog - CopyGen - AI Writer & Copywriting Landing Page Next.js
          Template.
        </title>
      </Head>
      <Layout>
        <div className="nk-header" />
        <section className="section section-bottom-0 has-shape has-mask">
          <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x" />
          <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-50 translate-middle-x" />
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
          <div className="container">
            <SectionHeading
              overlineTitle="Blog"
              title="News, tips and resources about copygenAI"
              variant="h1"
              containerWidthClass="col-lg-9 col-xl-7 col-xxl-6"
            >
              <label
                id="blog-search"
                className="d-flex align-items-center border rounded-3 py-2 px-4 mt-5 mt-lg-7 bg-white"
              >
                <Icon icon="search" className="icon me-3 fs-3" />
                <input
                  type="text"
                  name="blog-search"
                  className="form-control form-control-lg form-control-plaintext"
                  placeholder="Search for articles"
                  required
                />
              </label>
            </SectionHeading>
            <div className="section-content">
              <div className="row g-gs">
                {blogData.map((item, index) => (
                  <div className="col-md-6 col-xl-4" key={index}>
                    <CardStyle3
                      href={item.href}
                      thumbImgUrl={item.thumbImgUrl}
                      thumbImgWidth={item.thumbImgWidth}
                      thumbImgHeight={item.thumbImgHeight}
                      category={item.category}
                      title={item.title}
                      avatarImgUrl={item.avatarImgUrl}
                      avatarName={item.avatarName}
                      date={item.date}
                      time={item.time}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="section-actions text-center">
              <ul className="btn-list btn-list-inline g-gs">
                <li>
                  <Button
                    href="blog"
                    btnText="Previous"
                    btnClass="btn btn-primary btn-soft btn-lg"
                    leftIconClass="arrow-long-left"
                  />
                </li>
                <li>
                  <Button
                    href="blog"
                    btnText="Next"
                    btnClass="btn btn-primary btn-lg"
                    rightIconClass="arrow-long-right"
                  />
                </li>
              </ul>
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
