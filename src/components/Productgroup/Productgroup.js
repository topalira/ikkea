import React from "react";
import "./Productgroup.css";

function Productgroup() {
  const items = [
    { id: 1, image: "/product-group1.jpg" },
    { id: 2, image: "/product-group2.jpg" },
    { id: 3, image: "/product-group3.jpg" },
    { id: 4, image: "/product-group4.jpg" },
  ];

  return (
    <section className="product-group">
      <h2 className="product-group__title">ТОВАРИ З ОДНОГО НАБОРУ</h2>
      <p className="product-group__p">Набори столових приборів — це не просто функціональність, а деталь, що завершує образ вашого столу. Мідні, золоті та срібні відтінки гармонійно поєднуються з будь-якою посудою. Ідеально для щоденного використання та святкової сервіровки. Кожен предмет у наборі виготовлений з якісних матеріалів і зберігає естетику роками. Компактне зберігання у висувному ящику — порядок на кухні без зусиль.</p>

      <div className="product-group__container">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`product-group__item product-group__item--${index + 1}`}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        ))}
      </div>
    </section>
  );
}

export default Productgroup;