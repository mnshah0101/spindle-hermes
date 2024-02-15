import Link from 'next/link';
import React from 'react';
import Icon from '../Icon';

export default function CardStyle4({
  title,
  subTitle,
  actionBtnUrl,
  actionBtnText,
}) {
  return (
    <div className="card h-100 rounded-4 border-0 shadow-sm">
      <div className="card-body">
        <div className="feature">
          <div className="feature-text">
            <h3 className="title">{title}</h3>
            <p>{subTitle}</p>
            <Link className="link link-primary" href={actionBtnUrl}>
              <span className="fw-bold">{actionBtnText}</span>
              <Icon icon="arrow-long-right" className="icon fs-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
