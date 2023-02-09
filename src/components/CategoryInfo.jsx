import React from "react";
import { Link } from "react-router-dom";

export default function CategoryInfo({ categoryInfo, categoryName }) {
  const { title, description, image, alt, options } = categoryInfo;

  const menuItems = options.map((menuItem) => {
    const productUrl = `/${categoryName}/${menuItem.id}`;

    return (
      <li className="category-option" key={menuItem.id}>
        <Link to={productUrl}>
          <img src={menuItem.image} alt={menuItem.alt}></img>
        </Link>
        <div className="description">
          <h2>{menuItem.title}</h2>
          <p>{menuItem.description}</p>
        </div>
      </li>
    );
  });

  return (
    <div id="category-info">
      <div className="category-hero">
        <h1>{title}</h1>
        <img src={image} alt={alt}></img>
      </div>
      <div className="container">
        <p className="category-description">{description}</p>
        {menuItems}
      </div>
    </div>
  );
}
