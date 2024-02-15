import Link from 'next/link';
import React from 'react';
import Icon from '../Icon';

export default function Button({
  href,
  btnText,
  btnClass,
  leftIconClass,
  rightIconClass,
}) {
  return (
    <Link href={href} className={btnClass}>
      {leftIconClass && <Icon icon={leftIconClass} className="icon" />}
      <span>{btnText}</span>
      {rightIconClass && <Icon icon={rightIconClass} className="icon" />}
    </Link>
  );
}
