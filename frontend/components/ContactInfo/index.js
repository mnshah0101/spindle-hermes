// ContactInfo.js
import React from 'react';
import CardStyle5 from '../Card/CardStyle5';

export default function ContactInfo({ onClose }) {
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999
  };

  const modalContentStyle = {
    backgroundColor: '#4d00ff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'relative', // Added position relative to position the close button
  };

  const buttonStyle = {
    marginLeft: 420
  }

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <button className="btn btn-light btn-icon header-menu-toggle" style={buttonStyle} onClick={onClose}>X</button>
        <ul className="row gy-4 pt-4">
          <li className="col-12">
            <CardStyle5
              title="Email"
              subTitle="hermesdevelopergroup@gmail.com"
              iconClass="mail-fill"
            />
          </li>
          <li className="col-12">
            <CardStyle5
              title="Office"
              subTitle="Richmond, Virginia"
              iconClass="map-pin-fill"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
