import React, { useState, useEffect } from 'react';
import './Footer.css';
import { 
  FaInstagram, 
  FaTwitter, 
  FaTelegramPlane,
  FaCcVisa, 
  FaCcMastercard, 
  FaPaypal, 
  FaApplePay 
} from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Функция для плавной прокрутки
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Это делает прокрутку плавной
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="footer">
      
      {/* Колонки */}
      <div className="col col1">
        <h4>КАТЕГОРІЇ</h4>
        <p>М'які меблі</p>
        <p>Столи та стільці</p>
        <p>Для спальні</p>
        <p>Для вітальні</p>
        <p>Офісні меблі</p>
        <p>Дитячі кімнати</p>
        <p>Шафи та комоди</p>
        <p>Декор та освітлення</p>
        <p>Новинки</p>
      </div>

      <div className="col col2">
        <h4>ПОКУПЦЯМ</h4>
        <p>Оплата і доставка</p>
        <p>Повернення товару</p>
        <p>Гарантія та сервіс</p>
      </div>

      <div className="col col3">
        <h4>ПРО КОМПАНІЮ</h4>
        <p>Наша історія</p>
        <p>Матеріали та якість</p>
        <p>Наші магазини</p>
        <p>Дизайнерам</p>
        <p>Вакансії</p>
        <p>Відгуки</p>
      </div>

      <div className="col col4">
        <h4>КОНТАКТИ</h4>
        <p>м. Київ, вул. Затишна, 1</p>
        <p>+38 (067) 000-00-00</p>
        <p>info@home-style.com.ua</p>
      </div>

      <div className="socials">
        <FaInstagram title="Instagram" />
        <FaTwitter title="Twitter" />
        <FaTelegramPlane title="Telegram" />
        <FaCcVisa title="Visa" />
        <FaCcMastercard title="Mastercard" />
        <FaPaypal title="Paypal" />
        <FaApplePay title="Apple Pay" />
      </div>

      {/* Кнопка вгору */}
      {isVisible && (
        <button className="scroll-top" onClick={scrollToTop}>
          ↑
        </button>
      )}

      {/* Низ футера (юридична інфо) */}
      <div className="bottom">
        <span>© 2026 Home Style. Всі права захищені</span>
        <span>Політика конфіденційності</span>
        <span>Публічна оферта</span>
        <span>Розробка сайту</span>
      </div>

    </footer>
  );
};

export default Footer;