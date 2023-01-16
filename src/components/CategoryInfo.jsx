import React from "react";
import img1 from "../assets/img/background-image-1.png";
import img2 from "../assets/img/background-image-2.png";
import img3 from "../assets/img/background-image-3.png";
import img4 from "../assets/img/background-image-4.png";

export default function CategoryInfo({ categoryInfo }) {
  const { title, description, image, alt, options } = categoryInfo;

  const menuItems = options.map((menuItem) => (
    <li className="category-option" key={menuItem.id}>
      <img className="menu-img" src={menuItem.image} alt={menuItem.alt}></img>
      <h2>{menuItem.title}</h2>
      <p>{menuItem.description}</p>
    </li>
  ));

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
