import React from 'react';

import Categories from './components/Categories.js';
import Products from './components/Products.js';

import menu from './resources/menu.js';

export default function App() {
  const [currentCategory, setCurrentCategory] = React.useState('all');

  return (
    <div className="website">

      <h1 className="heading heading--fancy-underline heading--big">Our menu</h1>

      <Categories
        menu={menu}
        setCurrentCategory={setCurrentCategory}
      />

      <Products
        menu={menu}
        currentCategory={currentCategory}
      />

    </div>
  );
}