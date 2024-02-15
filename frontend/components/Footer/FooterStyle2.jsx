import React from 'react';
import CtaStyle2 from '../Cta/CtaStyle2';
import MenuWidget from '../Widget/MenuWidget';
import TextWidgetStyle2 from '../Widget/TextWidgetStyle2';
import MenuWidgetStyle2 from '../Widget/MenuWidgetStyle2';
import Copyright from '../Widget/Copyright';
import ctaImg from '../../public/images/gfx/process/c.jpg';
import logoUrl from '../../public/images/logo-dark.png';
import darkLogoUrl from '../../public/images/logo.png';

const toolsMenu = [
  { href: '/', title: 'Article Generator' },
  { href: '/', title: 'Blog Ideas' },
  { href: '/', title: 'Blog Intros' },
  { href: '/', title: 'Blog Outlines' },
  { href: '/', title: 'Product Description' },
];
const resourcesMenu = [
  { href: '/', title: 'Facebook Group' },
  { href: '/', title: 'Discord Community' },
  { href: '/', title: 'Guide and Tutorials' },
  { href: '/', title: 'Request API access' },
];
const companyMenu = [
  { href: '/about', title: 'About us' },
  { href: '/', title: 'Careers' },
  { href: '/pricing-s2', title: 'Pricing' },
  { href: '/contact-s2', title: 'Contact Us' },
  { href: '/', title: 'Wall of Love' },
];
const useCaseMenu = [
  { href: '/usecase-s2/ai-writer', title: 'AI Writer' },
  { href: '/usecase-s2/ai-articel-writer', title: 'AI Articel Writer' },
  { href: '/usecase-s2/content-generator', title: 'Content Generator' },
  { href: '/usecase-s2/ai-content-writing', title: 'AI Content Writing' },
  { href: '/usecase-s2/content-wewriter', title: 'Content Rewriter' },
  { href: '/usecase-s2/blog-post-writer', title: 'Blog Post Writer' },
];
const bottomMenu = [
  { href: '/', title: 'Terms' },
  { href: '/', title: 'Privacy Policy' },
];
const socialList = [
  { href: '/', class: 'facebook-fill' },
  { href: '/', class: 'github-round' },
  { href: '/', class: 'linkedin-round' },
  { href: '/', class: 'youtube-round' },
  { href: '/', class: 'twitter-round' },
];
export default function FooterStyle2() {
  return (
    <footer className="nk-footer">
      <CtaStyle2
        overlineTitle="Boost your writing productivity"
        title="End writer’s block today"
        subtitle="It’s like having access to a team of copywriting experts
        writing powerful copy for you in 1-click."
        btnUrl="/login"
        btnText="Start writing for free"
        infoList={['No credit card required', 'Cancel anytime']}
        imgUrl={ctaImg}
      />
      <section className="section bg-darker is-dark">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-4 col-lg-3 me-auto">
              <TextWidgetStyle2
                logoUrl={logoUrl}
                darkLogoUrl={darkLogoUrl}
                socialList={socialList}
              />
            </div>
            <div className="col-xl-2 col-lg col-md-3 col-6">
              <MenuWidget titleClass="" title="Tools" menuItems={toolsMenu} />
            </div>
            <div className="col-xl-2 col-lg col-md-3 col-6">
              <MenuWidget title="Resources" menuItems={resourcesMenu} />
            </div>
            <div className="col-xl-2 col-lg col-md-3 col-6">
              <MenuWidget title="Company" menuItems={companyMenu} />
            </div>
            <div className="col-xl-2 col-lg col-md-3 col-6">
              <MenuWidget title="Use Case" menuItems={useCaseMenu} />
            </div>
          </div>
        </div>
      </section>
      <div className="bg-darker is-dark">
        <div className="container">
          <hr className="border-opacity-25 border-white m-0" />
          <div className="py-5">
            <div className="row">
              <div className="col-md">
                <Copyright
                  copyrightText="© 2023 CopyGenAI. Template by"
                  copyrightLink="https://softnio.com"
                  copyrightLinkText="Softnio"
                  variant="mb-2 mb-md-0"
                  linkClasses="fw-bold text-white"
                />
              </div>
              <div className="col-md">
                <MenuWidgetStyle2 menuItems={bottomMenu} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
