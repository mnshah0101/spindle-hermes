import React, { useState } from 'react';
import Icon from '../Icon';
import AccountForm from './AccountForm';
import Databases from './DatabasesShow';
import APIKeys from './APIKeys';


export default function Tab() {
  const [active, setActive] = useState(1);
  return (
    <div className="section-content">
      <div className="overflow-hidden">
        <ul className="nav nav-tabs nav-tabs-stretch mb-5" role="tablist">
          <li className="w-100 w-sm-50 w-lg-auto">
            <button
              className={`nav-link w-100 w-lg-auto ${
                active === 1 ? 'active' : ''
              }`}
              onClick={() => setActive(1)}
            >
              <Icon icon="setting" className="icon" />
              <span>My Account</span>
            </button>
          </li>
          <li className="w-100 w-sm-50 w-lg-auto">
            <button
              className={`nav-link w-100 w-lg-auto ${
                active === 2 ? 'active' : ''
              }`}
              onClick={() => setActive(2)}
            >
              <Icon icon="user" className="icon" />
              <span>My API Keys</span>
            </button>
          </li>
          <li className="w-100 w-sm-50 w-lg-auto">
            <button
              className={`nav-link w-100 w-lg-auto ${
                active === 3 ? 'active' : ''
              }`}
              onClick={() => setActive(3)}
            >
              <Icon icon="dashboard" className="icon" />
              <span>My Databases</span>
            </button>
          </li>
          <li className="w-100 w-sm-50 w-lg-auto">
            <button
              className={`nav-link w-100 w-lg-auto ${
                active === 4 ? 'active' : ''
              }`}
              onClick={() => setActive(4)}
            >
              <Icon icon="article" className="icon" />
              <span>Documentation</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content p-5 card border-0 rounded-4 shadow-sm">
        <div
          className={`tab-pane p-lg-3 fade ${
            active === 1 ? 'show active' : ''
          }`}
        >
          <AccountForm />
        </div>
        <div
          className={`tab-pane p-lg-3 fade ${
            active === 2 ? 'show active' : ''
          }`}
        >
          <APIKeys />
        </div>
        <div
          className={`tab-pane p-lg-3 fade ${
            active === 3 ? 'show active' : ''
          }`}
        >
          <Databases />
        </div>
        <div
          className={`tab-pane p-lg-3 fade ${
            active === 4 ? 'show active' : ''
          }`}
        >
          // Content for the Documentation Section goes here
        </div>
      </div>
    </div>
  );
}