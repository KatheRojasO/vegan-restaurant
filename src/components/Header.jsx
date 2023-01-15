import React, { useEffect, useState } from "react";
import {Link as ScrollLink} from 'react-scroll';
import {Link as ReactLink} from "react-router-dom";
import img from "../assets/img/logo-mobile.png";
import data from "../jsonFiles/navbar.json";

export default function Header() {

  const items = data.map((item) => (
    <li className="nav-item" key={item.id}>
      <ReactLink to={item.href}>{item.text}</ReactLink>
    </li>
  ));

  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 400)
      );
    }
  }, []);

  return (
    <nav className={`nav ${ small ? "small" : ""}`}>
      <ScrollLink to='hero'>
        <img src={img} alt="NV-logo"></img>
      </ScrollLink>
      <ul className="menu">{items}</ul>
    </nav>
  );
}
