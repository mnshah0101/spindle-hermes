import Image from 'next/image';
import React from 'react';

export default function DatabaseCard({
  title,
  imgUrl,
  description,
  link
}) {

  function onClick () {
    window.location = link;
  
  }

  return (
    <>
    <div className="card" onClick={onClick}>
  <img className="card-img-top" src={imgUrl} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
  </div>
</div>
</>
  )
    
}