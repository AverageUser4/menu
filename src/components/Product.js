import React from 'react';

export default function Product({ name, price, image, desc }) {
  return (
    <article className="product">

      <img src={image} className="product__image"/>

      <div className="product__text">

        <div className="product__text-top">

          <h2 className="heading product__name">{name}</h2>

          <span className="product__price">${price}</span>

        </div>

        <p className="product__desc">{desc}</p>

      </div>

    </article>
  );
}