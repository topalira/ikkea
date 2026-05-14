import React from "react";
import "./Footer.css";
import { 
  FaInstagram, FaTwitter, FaTelegramPlane,
  FaCcVisa, FaCcMastercard, FaPaypal, FaApplePay 
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">

      <div className="col col1">
        <h4>Заголовок підрозділу</h4>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
      </div>
      <div className="col col2">
        <h4>Заголовок підрозділу</h4>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
      </div>
      <div className="col col3">
        <h4>Заголовок підрозділу</h4>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
      </div>
      <div className="col col4">
        <h4>Заголовок підрозділу</h4>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
      </div>

      {/* десктоп: абсолютные блоки рядом */}
      <div className="socials desktop-only">
        <FaInstagram />
        <FaTwitter />
        <FaTelegramPlane />
      </div>
      <div className="payments desktop-only">
        <FaCcVisa />
        <FaCcMastercard />
        <FaPaypal />
        <FaApplePay />
      </div>

      {/* мобайл: два ряда отдельно */}
      <div className="mobile-icons">
        <div className="socials">
          <FaInstagram />
          <FaTwitter />
          <FaTelegramPlane />
        </div>
        <div className="payments">
          <FaCcVisa />
          <FaCcMastercard />
          <FaPaypal />
          <FaApplePay />
        </div>
      </div>

      <button className="scroll-top">↑</button>

      <div className="bottom">
        <span>Заголовок підрозділу</span>
        <span>Заголовок підрозділу</span>
        <span>Заголовок підрозділу</span>
        <span>Заголовок підрозділу</span>
      </div>

    </div>
  );
};

export default Footer;