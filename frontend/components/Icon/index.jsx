import React from 'react';

export default function Icon({ icon, className }) {
  return <em className={`ni ni-${icon} ${className ? className : ''}`} />;
}
