import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/img/logo.png";
import data from "../jsonFiles/navbar.json";

export default function Header() {
  const items = data.map((item) => (
    <li className="nav-item" key={item.id}>
      <Link to={item.href}>{item.text}</Link>
    </li>
  ));

  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 50)
      );
    }
  }, []);

  return (
    <nav className={`nav ${small ? "small" : ""}`}>
      <Link to="/">
        <img src={img} alt="NV-logo"></img>
      </Link>
      <ul className="menu">{items}</ul>
    </nav>
  );
}
