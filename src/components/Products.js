import React from 'react';

import Product from './Product.js';

export default function Products({ menu, currentCategory }) {
  const productElements = menu.filter(product => 
    product.category === currentCategory || currentCategory === 'all')
      .map(product =>
        <Product
          key={product.id}
          name={product.title}
          category={product.category}
          price={product.price}
          image={product.img}
          desc={product.desc}
        />
      );

  return (
    <main className="products-grid">

      {productElements}

    </main>
  )
}