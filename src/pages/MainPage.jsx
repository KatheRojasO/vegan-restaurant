import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import data from "../jsonFiles/mainpage.json";
import img1 from "../assets/img/background-image-1.png";
import img2 from "../assets/img/background-image-2.png";
import img3 from "../assets/img/background-image-3.png";
import img4 from "../assets/img/background-image-4.png";

export default function MainPage() {
  const items = data.map((item) => (
    <li className="menu-option" key={item.id}>
      <img className="option-img" src={item.image} alt="menu-option"></img>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <a href={item.href}>{item.text}</a>
    </li>
  ));

  return (
    <section id="main-page">
      <Header />
      <Hero />
      <div className="container">
        <img src={img1} className="bg-1" alt="" />
        <img src={img2} className="bg-2" alt="" />
        <img src={img3} className="bg-3" alt="" />
        <img src={img4} className="bg-4" alt="" />
        <p className="page-description">
          A refreshingly inviting, communal and upbeat restaurant featuring
          seasonally and creative vegan cuisine that resembles what other might
          be eating.
        </p>
        {items}
      </div>
      <Footer />
    </section>
  );
}
