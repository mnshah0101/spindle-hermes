import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Icon from '../Icon';

export default function CardStyle3({
  href,
  thumbImgUrl,
  thumbImgWidth,
  thumbImgHeight,
  category,
  title,
  avatarImgUrl,
  avatarName,
  date,
  time,
}) {
  return (
    <div className="card border-0 shadow-tiny rounded-4 blog-post">
      <div className="card-body p-4">
        <Link className="d-block" href={href ? href : '/'}>
          <Image
            className="rounded-4 w-100"
            src={thumbImgUrl}
            width={thumbImgWidth}
            height={thumbImgHeight}
            alt="Thumbnail"
          />
        </Link>
        <Link
          href="/"
          className="badge px-3 py-2 mt-4 mb-3 text-bg-primary-soft fw-normal rounded-pill"
        >
          {category}
        </Link>
        <h3>
          <Link href={href ? href : '/'} className="link-dark line-clamp-2">
            {title}
          </Link>
        </h3>
        <div className="d-flex pt-4">
          <div className="media media-lg media-middle media-lg rounded-pill">
            <Image src={avatarImgUrl} width={48} height={48} alt="Avatar" />
          </div>
          <div className="media-info ms-3">
            <h6 className="mb-1">{avatarName}</h6>
            <ul className="list list-row gx-1">
              <li>
                <div className="sub-text">{date}</div>
              </li>
              <li>
                <Icon icon="dot" className="icon mx-0" />
              </li>
              <li>
                <div className="sub-text">{time}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
