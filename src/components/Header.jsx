import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/img/logo.png";
import data from "../jsonFiles/navbar.json";

export default function Header() {
  const items = data.map((item) => (
    <li className="nav-item" key={item.id}>
      <Link to={item.href}>{item.text}</Link>
    </li>
  ));

  return (
    <nav>
      <Link to="/">
        <img src={img} alt="NV-logo"></img>
      </Link>
      <ul className="menu">{items}</ul>
    </nav>
  );
}
