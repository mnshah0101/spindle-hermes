import React from 'react';
import Icon from '../Icon';

export default function IconBoxStyle6({ title, subTitle, iconClass }) {
  return (
    <div className="feature feature-inline">
      <div className="feature-media">
        <div className="text-gradient-primary fs-2 d-inline-flex">
          <Icon icon={iconClass} className="icon" />
        </div>
      </div>
      <div className="feature-text">
        <h4 className="title">{title}</h4>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}
