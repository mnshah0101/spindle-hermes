import React from 'react';

export default function TestimonialStyle2({
  avatarImgUrl,
  avatarName,
  avatarDesignation,
  title,
  subTitle,
}) {
  return (
    <div className="card border-0 shadow-none rounded-4 bg-gradient-light">
      <div className="card-body">
        <div className="d-flex pb-5">
          <div className="media media-lg media-middle media-lg rounded-pill">
            <img src={avatarImgUrl} alt="Avatar" />
          </div>
          <div className="media-info ms-3">
            <h5 className="mb-1">{avatarName}</h5>
            <div className="sub-text">{avatarDesignation}</div>
          </div>
        </div>
        <h4 className="title mb-3">{title}</h4>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}
