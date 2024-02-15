import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import Cta from '../components/Cta';

export default function TermsConditionPage() {
  return (
    <>
      <Head>
        <title>
          Terms & Conditions - CopyGen - AI Writer & Copywriting Landing Page
          Next.js Template.
        </title>
      </Head>
      <Layout>
        <div className="nk-header" />
        <section className="section section-bottom-0 has-mask">
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
          <div className="container">
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-xxl-8 col-xl-9 col-lg-10">
                  <div className="text-center mb-6">
                    <h6 className="overline-title text-primary">CopyGen</h6>
                    <h1 className="title">Terms and Conditions</h1>
                    <ul className="list list-row gx-2">
                      <li>
                        <div className="sub-text fs-5">
                          Last Updated Feb 10, 2023
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="block-typo">
                    <h2>Pros of AI in legal document translation</h2>
                    <p>
                      Must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself,because it is
                      pleasure.
                    </p>
                    <h3>Automated reminders</h3>
                    <p>
                      Complete account of the system, and expound the actual
                      teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects pleasure
                      itself because it is pleasure.
                    </p>
                    <h3>Legal research and background check</h3>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                      bound to ensue.
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
                        Requires cultural, legal, and contextual understanding.
                      </li>
                      <li>
                        Material uses creative language which cannot be
                        translated literally.
                      </li>
                      <li>
                        Language translation needs to be grammatically accurate,
                        with the right understanding{' '}
                      </li>
                    </ul>
                    <p>
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment, so blinded by desire, that they cannot
                      foresee the pain
                    </p>
                    <h2>Human Translators vs. AI Translators</h2>
                    <p>
                      Must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness.
                    </p>
                    <p>
                      Expound the actual teachings of the great explorer of the
                      truth, the master-builder of human happiness. No one
                      rejects, dislikes, or avoids pleasure.
                    </p>
                    <h3>Speed</h3>
                    <p>
                      Complete account of the system, and expound the actual
                      teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects pleasure
                      itself because it is pleasure.
                    </p>
                    <h3>Quality</h3>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                      bound to ensue.
                    </p>
                  </div>
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
