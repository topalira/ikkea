import "./Signup.css";
import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleBack = () => {
    navigate(-1); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные для входа:', { identifier, password });
  };
  useEffect(() => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';

    return () => {
      if (header) header.style.display = 'block';
      if (footer) footer.style.display = 'block';
    };
  }, []); 

  return (
    <div className="signup">
      {/* LEFT SIDE */}
      <div className="signup-left">
        <img
          src="Signin.jpg"
          alt="room"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="signup-right">
        <div className="form-container">
          <h2>Створіть акаунт</h2>

          <form>
            <div className="input-group">
              <label>Ім'я</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Фамілія</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Дата народження</label>
              <input type="date" />
            </div>

            <div className="input-group">
              <label>Країна</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Адреса</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Мобільний номер</label>
              <input type="tel" />
              <p className="helper-text">
                Ви отримаєте код підтвердження через SMS.
              </p>
            </div>

            <div className="input-group">
              <label>Електронна пошта</label>
              <input type="email" />
            </div>

            <div className="input-group">
              <label>Пароль</label>
              <input type="password" />
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree">
                Я ознайомлений з Політикою конфіденційності
              </label>
            </div>

            <button type="submit">ПРОДОВЖИТИ</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;