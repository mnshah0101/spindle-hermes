import Head from 'next/head';
import React from 'react';
import Layout from '../../components/Layout';
import Cta from '../../components/Cta';
import SectionHeading from '../../components/SectionHeading';
import CardStyle3 from '../../components/Card/CardStyle3';
import Image from 'next/image';
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
];

export default function BlogSinglePage() {
  return (
    <>
      <Head>
        <title>
          Blog Single - CopyGen - AI Writer & Copywriting Landing Page Next.js
          Template.
        </title>
      </Head>
      <Layout>
        <div className="nk-header" />
        <section className="section has-mask">
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
          <div className="container">
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-xxl-8 col-xl-9 col-lg-10">
                  <div className="text-center">
                    <h6 className="overline-title text-primary">CopyGen</h6>
                    <h1 className="title">
                      Are AI Translators Reliable for Legal Document
                      Translation?
                    </h1>
                    <ul className="list list-row gx-2">
                      <li>
                        <div className="sub-text fs-5">Feb 10, 2023</div>
                      </li>
                      <li>
                        <Icon icon="dot" className="icon mx-0" />
                      </li>
                      <li>
                        <div className="sub-text fs-5">11 min read</div>
                      </li>
                    </ul>
                    <div className="my-5">
                      <Image
                        className="rounded-4 w-100"
                        src="/images/blog/cover.jpg"
                        width={1140}
                        height={848}
                        alt="Thumb"
                      />
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="block-typo">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using Content here, content here,
                        making it look like readable English.
                      </p>
                      <p>
                        Explain to you how all this mistaken idea of denouncing
                        pleasure and praising pain was born and I will give you
                        a complete account of the system, and expound the actual
                        teachings of the great.
                      </p>
                      <h2>Pros of AI in legal document translation</h2>
                      <p>
                        Must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth, the master-builder of human happiness. No one
                        rejects, dislikes, or avoids pleasure itself,because it
                        is pleasure.
                      </p>
                      <h3>Automated reminders</h3>
                      <p>
                        Complete account of the system, and expound the actual
                        teachings of the great explorer of the truth, the
                        master-builder of human happiness. No one rejects
                        pleasure itself because it is pleasure.
                      </p>
                      <h3>Legal research and background check</h3>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment, so
                        blinded by desire, that they cannot foresee the pain and
                        trouble that are bound to ensue.
                      </p>
                      <h3>Helps address linguistic limitation</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae{' '}
                      </p>
                      <ul>
                        <li>
                          Content to be translated is of high priority and needs
                          accurate translation.
                        </li>
                        <li>
                          Requires cultural, legal, and contextual
                          understanding.
                        </li>
                        <li>
                          Material uses creative language which cannot be
                          translated literally.
                        </li>
                        <li>
                          Language translation needs to be grammatically
                          accurate, with the right understanding{' '}
                        </li>
                      </ul>
                      <p>
                        We denounce with righteous indignation and dislike men
                        who are so beguiled and demoralized by the charms of
                        pleasure of the moment, so blinded by desire, that they
                        cannot foresee the pain
                      </p>
                      <h2>Human Translators vs. AI Translators</h2>
                      <p>
                        Must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth, the master-builder of human happiness.
                      </p>
                      <Image
                        className="rounded-4 w-100"
                        src="/images/blog/cover.jpg"
                        width={1140}
                        height={848}
                        alt="Thumb"
                      />
                      <p>
                        Expound the actual teachings of the great explorer of
                        the truth, the master-builder of human happiness. No one
                        rejects, dislikes, or avoids pleasure.
                      </p>
                      <h3>Speed</h3>
                      <p>
                        Complete account of the system, and expound the actual
                        teachings of the great explorer of the truth, the
                        master-builder of human happiness. No one rejects
                        pleasure itself because it is pleasure.
                      </p>
                      <h3>Quality</h3>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment, so
                        blinded by desire, that they cannot foresee the pain and
                        trouble that are bound to ensue.
                      </p>
                    </div>
                    <ul className="btn-list gy-3 ps-xl-6 ps-lg-4 ps-3">
                      <li>
                        <a className="link-secondary" href="#">
                          <Icon icon="facebook-circle" className="icon fs-3" />
                        </a>
                      </li>
                      <li>
                        <a className="link-secondary" href="#">
                          <Icon icon="twitter" className="icon fs-3" />
                        </a>
                      </li>
                      <li>
                        <a className="link-secondary" href="#">
                          <Icon icon="linkedin-round" className="icon fs-3" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-sm section-0">
          <div className="container">
            <SectionHeading title="Similar Posts" />
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
