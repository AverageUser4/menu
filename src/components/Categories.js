import React from 'react';

export default function Categories({ menu, setCurrentCategory }) {
  const categories = [...new Set(['all'].concat(menu.map(product => product.category)))];

  const categoryElements = categories.map(category =>
    <li key={category}>
      
      <button 
        className="categories__button"
        onClick={() => setCurrentCategory(category)}
      >
        {category}
      </button>

    </li>
  );

  return (
    <ul className="categories">

      {categoryElements}

    </ul>
  );
}