import React from "react";
import instagramIcon from "../assets/icons/instagram-icon.png";
import fbIcon from "../assets/icons/fb-icon.png";
import copyIcon from "../assets/icons/copyright_icon.png";

export default function Footer() {

  return (
    <footer id="footer">
      <div className="container">
        <div className="social-media">
          <img src={instagramIcon} alt="instagram-icon" />
          <img src={fbIcon} alt="instagram-icon" />
        </div>
        <div className="copy-right">
          <img src={copyIcon} alt="instagram-icon" />
          <p>Nordic Vegans 2023</p>
        </div>
      </div>
    </footer>
  );
}
