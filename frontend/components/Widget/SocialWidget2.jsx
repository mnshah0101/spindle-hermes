import React from 'react';
import Icon from '../Icon';

export default function SocialWidget2() {
  return (
    <ul className="btn-list btn-list-inline gx-2">
      <li>
        <a className="btn btn-light btn-icon" href="#">
          <Icon icon="facebook-f" className="icon fs-5" />
        </a>
      </li>
      <li>
        <a className="btn btn-light btn-icon" href="#">
          <Icon icon="google" className="icon fs-5" />
        </a>
      </li>
      <li>
        <a className="btn btn-light btn-icon" href="#">
          <Icon icon="apple" className="icon fs-5" />
        </a>
      </li>
    </ul>
  );
}
