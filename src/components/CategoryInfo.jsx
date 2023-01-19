import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img/background-image-1.png";
import img2 from "../assets/img/background-image-2.png";
import img3 from "../assets/img/background-image-3.png";
import img4 from "../assets/img/background-image-4.png";

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
        <img src={img1} className="bg-1" alt="" />
        <p className="category-description">{description}</p>
        <img src={img2} className="bg-2" alt="" />
        <img src={img3} className="bg-3" alt="" />
        <img src={img4} className="bg-4" alt="" />
        {menuItems}
      </div>
    </div>
  );
}
