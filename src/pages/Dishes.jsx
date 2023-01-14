import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "../jsonFiles/dishes.json";
import img1 from "../assets/img/background-image-1.png";
import img2 from "../assets/img/background-image-2.png";
import img3 from "../assets/img/background-image-3.png";
import img4 from "../assets/img/background-image-4.png";

export default function Dishes() {

  const dishes = data.map((dish) => (
    <li className="dish-option" key={dish.id}>
      <img className="menu-img" src={dish.image} alt={dish.alt}></img>
      <h2>{dish.title}</h2>
      <p>{dish.description}</p>
    </li>
  ));

  return (
    <div id="dishes">
      <Header />
      <div className="dishes-hero">
        <h1 className="dishes-title">Dishes</h1>
      </div>
      <div className="container">
        <img src={img1} className="item-1" alt="" />
        <p className="dishes-description">Turning tomatoes into tuna, cashews into stretchy mozzarella, and banana peels into pulled “pork” is a creative culinary challenge that many vegans love to take on.</p>
        <img src={img2} className="item-2" alt="" />
        <img src={img3} className="item-3" alt="" />
        <img src={img4} className="item-4" alt="" />
        {dishes}
      </div>
      <Footer />
    </div>
  );
}
