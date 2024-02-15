import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';
import Icon from '../Icon';

export default function HeroStyle4({
  title,
  subTitle,
  thumbImg,
  brandTitle,
  brandSrcList,
}) {
  return (
    <section className="nk-header bg-darker is-dark has-mask overflow-hidden">
      <div className="nk-shape bg-shape-blur-pp ms-n30p mt-n20p start-50 translate-middle-x" />
      <div className="nk-shape bg-shape-blur-o ms-30p mb-n30p start-50 translate-middle-x" />
      <div className="nk-shape bg-shape-blur-p ms-n50p mt-40p start-50 translate-middle-y" />
      <div className="nk-mask bg-pattern-noise-a" />
      <div className="nk-mask bg-angle bg-angle-bottom bg-angle-white" />
      <div className="nk-hero pt-sm-5 pt-lg-5 pb-6 pb-sm-8 pb-lg-9">
        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-xl-between flex-lg-row-reverse g-gs">
            <div className="col-sm-10 col-md-7 col-lg-6 col-xl-5">
              <div className="nk-hero-gfx mt-n5 mb-n6 my-xl-0 ms-xl-n8 me-xl-n6">
                <Image
                  className="w-100"
                  src={thumbImg}
                  alt="Hero"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="col-md-11 col-lg-9 col-xl-6 col-xxl-6">
              <div className="nk-hero-content text-center text-xl-start">
                <h1 className="title display-6 mb-3 mb-lg-4">{parse(title)}</h1>
                <p className="lead mb-4 mb-lg-5 pe-xxl-6">{parse(subTitle)}</p>
                <div className="pt-2 pb-5">
                  <form action="/index-s4">
                    <div className="d-flex flex-column flex-sm-row bg-white rounded-3 p-2 mx-sm-4 mx-lg-0 me-xxl-11">
                      <div className="d-flex align-items-center flex-grow-1">
                        <div className="text-primary me-3 ps-3 fs-4">
                          <Icon icon="mail" className="icon" />
                        </div>
                        <div className="form-group flex-grow-1">
                          <div className="form-control-wrap">
                            <input
                              className="form-control-plaintext"
                              type="email"
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group mt-2 mt-sm-0">
                        <button className="btn btn-lg btn-primary w-100">
                          Sign Up Free
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-xl-start pt-2">
                  <ul className="d-flex align-items-center has-gap g-1 text-warning">
                    <li className="d-inline-flex">
                      <Icon icon="star-fill" className="icon fs-5" />
                    </li>
                    <li className="d-inline-flex">
                      <Icon icon="star-fill" className="icon fs-5" />
                    </li>
                    <li className="d-inline-flex">
                      <Icon icon="star-fill" className="icon fs-5" />
                    </li>
                    <li className="d-inline-flex">
                      <Icon icon="star-fill" className="icon fs-5" />
                    </li>
                    <li className="d-inline-flex">
                      <Icon icon="star-fill" className="icon fs-5" />
                    </li>
                  </ul>
                  <span className="fs-5 ms-3">{brandTitle}</span>
                </div>
                <ul className="d-flex flex-wrap justify-content-center justify-content-xl-start pt-3 has-gap gy-3">
                  {brandSrcList?.map((item, index) => (
                    <li className="px-3" key={index}>
                      <img className="h-1-5rem" src={item} alt="Brand" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
