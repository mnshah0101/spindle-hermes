import React from 'react';

export default function ContactWidget({ title, subTitle, email }) {
  return (
    <div className="wgs">
      <h6 className="wgs-title overline-title text-heading mb-3">{title}</h6>
      <p>{subTitle}</p>
      <a href={`mailto:${email}`} className="link link-primary">
        {email}
      </a>
    </div>
  );
}
