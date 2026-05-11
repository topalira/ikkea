import React from "react";
import './Cozyset.css';

function Cozyset() {
  const cozysetItems = [
    { id: 1, image: "/coz1.jpg", title: <>Мінімалістичний декор для спальні: одна ваза, одна гілка — і атмосфера вже інша.</> },
    { id: 2, image: "/coz2.jpg", title: <>М'яке крісло у сонячному куті — ідеальне місце для ранкової кави та читання.</> },
    { id: 3, image: "/coz3.jpg", title: <>Темно-синій текстиль та приглушене світло створюють відчуття глибокого відпочинку.</> },
  ];

  return (
    <section className="cozyset">
      <h2 className="cozyset__title">ЗАТИШНІ НАБОРИ</h2>
      <div className="cozyset__container">
        {cozysetItems.map((item, index) => (
         <div
         key={item.id}
         className={`cozyset__item cozyset__item--${index + 1}`}
       >
         <img
           src={item.image}
           alt=""
           className="cozyset__image"
         />

         <div className="cozyset__label">
           {item.title}
         </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cozyset;