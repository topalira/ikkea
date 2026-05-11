import React from "react";
import './Productset.css';

function Productset() {
  const productsetItems = [
    { id: 1, image: "/productset1.jpg" },
    { id: 2, image: "/productset2.jpg" },
    { id: 3, image: "/productset3.jpg" },
    { id: 4, image: "/productset4.jpg" },
  ];

  return (
    <section className="productset">
      <h2 className="productset__title">ТОВАРИ З ОДНОГО НАБОРУ</h2>
      <p className="productset__p">Стильні деталі для вітальні — від крісла до декоративних полиць. Кожен елемент набору підібраний так, щоб створити єдиний<br/> теплий образ кімнати. Натуральні матеріали, спокійні відтінки та продуманий декор перетворюють звичайний простір на місце, де хочеться бути.</p>

      <div className="productset__container">
        {productsetItems.map((item, index) => (
          <div
            key={item.id}
            className={`productset__item productset__item--${index + 1}`}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        ))}
      </div>
    </section>
  );
}
export default Productset;