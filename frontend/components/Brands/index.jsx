import React from 'react';

export default function Brands({
  brandList,
  title,
  actionBtnUrl,
  actionBtnText,
}) {
  return (
    <div className="section-content">
      <div className="row justify-content-center text-center g-gs">
        <div className="col-xxl-10">
          <ul className="d-flex flex-wrap justify-content-center has-gap gy-3">
            {brandList?.map((item, index) => (
              <li key={index} className="px-3 px-xl-5">
                <img
                  className="h-2rem visible-on-dark-mode"
                  src={item.darkUrl}
                  alt="Brand"
                />
                <img
                  className="h-2rem visible-on-light-mode"
                  src={item.lightUrl}
                  alt="Brand"
                />
              </li>
            ))}
          </ul>
          <p className="fs-4 pt-5 mt-xl-3 ">{title}</p>
          <ul className="btn-list btn-list-inline pt-3 pt-xl-4">
            <li>
              <a href={actionBtnUrl} className="btn btn-primary btn-lg">
                <span>{actionBtnText}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
