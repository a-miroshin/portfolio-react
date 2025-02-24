import React from "react";

import telegramIcon from "./icons/telegram.svg";
import instagramIcon from "./icons/instagram.svg";
import linkedinIcon from "./icons/linkedin.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="socials">
        <li>
          <a href="https://t.me/a_miroshin">
            <img src={telegramIcon} alt="Telegram" title="Telegram" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/miroshin_draw/">
            <img src={instagramIcon} alt="Instagram" title="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alexander-miroshin/">
            <img src={linkedinIcon} alt="LinkedIn" title="LinkedIn" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
