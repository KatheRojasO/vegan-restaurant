import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import Footer from "../components/Footer";
import data from "../jsonFiles/contact.json";
import img1 from "../assets/img/background-image-1.png";

export default function Contact() {
  const items = data.map((item) => (
    <div className="container">
      <div className="contact-info">
        <img className="owner" src={item.image} alt={item.alt} />
        <img className="bg-img" src={img1} alt="bg-1" />
        <h2>Opening Times</h2>
        <p>{item.times}</p>
        <h2>Book a table</h2>
        <Form />
        <h2>Address</h2>
        <p>{item.address}</p>
        <p>{item.city}</p>
        <img className="map" src={item.map} alt="map"></img>
      </div>
    </div>
  ));

  return (
    <div id="contact">
      <Header />
      {items}
      <Footer />
    </div>
  );
}
