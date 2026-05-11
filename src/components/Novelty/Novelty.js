import React from "react";
import './Novelty.css';

function Novelty() {
  const noveltyItems = [
    { id: 1, image: "/nov1.jpg", title: <>Живі рослини та натуральне дерево — основа скандинавського<br /> затишку у вітальні.</> },
    { id: 2, image: "/nov2.jpg", title: <>М'які текстури та пастельні відтінки створюють <br />атмосферу спокою та домашнього тепла. </> },
    { id: 3, image: "/nov3.jpg", title: <>Кам'яна стіна та камін як центр кімнати — класика, <br />що ніколи не виходить з моди.</> },
  ];

  return (
    <section className="novelty">
      <h2 className="novelty__title">НОВИНКИ</h2>
      <div className="novelty__container">
        {noveltyItems.map((item, index) => (
         <div
         key={item.id}
         className={`novelty__item novelty__item--${index + 1}`}
       >
         <img
           src={item.image}
           alt=""
           className="novelty__image"
         />

         <div className="novelty__label">
           {item.title}
         </div>
          </div>
        ))}
      </div>


    </section>
  );
}

export default Novelty;