import React, { useEffect, useState } from "react";
import {Link} from 'react-scroll';
import img from "../assets/img/logo-mobile.png";
import data from "../jsonFiles/navbar.json";

export default function Header() {

  const items = data.map((item) => (
    <li className="nav-item" key={item.id}>
      <a href={item.href}>{item.text}</a>
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
      <Link to='hero'>
        <img src={img} alt="NV-logo"></img>
      </Link>
      <ul className="menu">{items}</ul>
    </nav>
  );
}
