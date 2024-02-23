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
    <div class="card" onClick={onClick}>
  <img class="card-img-top" src={imgUrl} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}</p>
  </div>
</div>
</>
  )
    
}