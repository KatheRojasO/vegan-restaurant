import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import data from "../jsonFiles/mainpage.json";
import img1 from "../assets/img/background-image-1.png";
import img2 from "../assets/img/background-image-2.png";
import img3 from "../assets/img/background-image-3.png";
import img4 from "../assets/img/background-image-4.png";

export default function MainPage() {
  const items = data.categories.map((item) => (
    <li
      className={item.invert ? "menu-option-right" : "menu-option-left"}
      key={item.id}
    >
      <img className="option-img" src={item.image} alt="menu-option" />
      <div className="option-description">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <Link to={item.href}>{item.text}</Link>
      </div>
    </li>
  ));

  return (
    <section id="main-page">
      <Header />
      <Hero />
      <div className="container">
        <p className="page-description">{data.description}</p>
        {items}
      </div>
      <Footer />
    </section>
  );
}
