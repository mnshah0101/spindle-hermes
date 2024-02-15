import React from 'react';
import Button from '../Button';
import Icon from '../Icon';

export default function IconBoxStyle10({
  title,
  subTitle,
  iconClass,
  iconBoxBgClass,
  actionBtnUrl,
  actionBtnText,
}) {
  return (
    <div className="card rounded-4 border-0 shadow-sm h-100">
      <div className="card-body">
        <div className="feature px-xl-2">
          <div className="feature-media">
            <div
              className={`media media-middle media-2xl rounded-3 ${iconBoxBgClass}`}
            >
              <Icon icon={iconClass} className="icon" />
            </div>
          </div>
          <div className="feature-text">
            <h3 className="title">{title}</h3>
            <p className="line-clamp-2">{subTitle}</p>
            <Button
              href={actionBtnUrl}
              btnText={actionBtnText}
              btnClass="link link-primary"
              rightIconClass="arrow-long-right fs-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
