import React from 'react';
import './Card.css';

export function Card ({ title, category, price, imageUrl }) {
  return (
    <div className="card2-container">
      <div className="card2-image-box">
        <img src={imageUrl} alt={title} className="card2-img" />
      </div>
      <div className="card2-details">
        <h3 className="card2-title">{title}</h3>
        <p className="card2-subtitle">{category}</p>
        <span className="card2-price">{price}$</span>
      </div>
    </div>
  );
};

export default Card;