import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
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
    <div className="login-container">
      <div className="login-image-section">
        <button className="back-button" onClick={handleBack}>←</button>
        <div className="image-overlay-text">
          <p>ЗАПОВНІТЬ ВХІД ДО ОБЛІКОВОГО ЗАПИСУ</p>
        </div>
      </div>

      <div className="login-form-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Електронна пошта або мобільний номер</label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
            <p className="input-hint">
              By entering your mobile number... <a href="/">More info about Privacy Policy</a>
            </p>
          </div>

          <div className="input-group">
            <label>Пароль</label>
            <div className="password-wrapper">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="password-toggle">👁</span>
            </div>
            <a href="/" className="forgot-password">Забули свій пароль?</a>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Зберегти інформацію</label>
            <span className="info-icon">i</span>
          </div>

          <button type="submit" className="btn-primary">ПРОДОВЖИТИ</button>

          <div className="register-section">
            <p>У вас ще немає облікового запису? Створіть його:</p>
            <button type="button" className="btn-secondary">СТВОРИТИ АККАУНТ</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;