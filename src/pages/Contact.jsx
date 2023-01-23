import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import Footer from "../components/Footer";
import data from "../jsonFiles/contact.json";
import img1 from "../assets/img/background-image-1.png";

export default function Contact() {
  // Organization -1
  // What happen here, this component is not an array [] but an object {} so why iterate it with a .map function?
  // this code was moved directly to the JSX
  const items = data.map((item) => item);

  return (
    <div id="contact">
      <Header />
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
      <Footer />
    </div>
  );
}
