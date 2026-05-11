import React from "react";
import "./Features.css";

function Features() {
  const items = [
    {
      id: 1,
      icon: "/delivery.png",
      title: "Доставка",
      text: "Доставляємо замовлення по всій Україні. Надійна упаковка гарантує збереження кожного предмету набору.",
    },
    {
      id: 2,
      icon: "/payment.png",
      title: "Оплата",
      text: "Зручна оплата онлайн або при отриманні. Підтримуємо всі популярні платіжні системи та картки.",
    },
    {
      id: 3,
      icon: "/organization.png",
      title: "Організація",
      text: "Кожен набір укомплектований та готовий до використання. Продумане зберігання — без зайвого клопоту.",
    },
    {
      id: 4,
      icon: "/planning.png",
      title: "Планування",
      text: "Допоможемо підібрати набір під ваш простір та стиль. Консультація дизайнера — безкоштовно.",
    },
  ];

  return (
    <section className="features">
      <div className="features__container">
        {items.map((item) => (
          <div key={item.id} className="features__card">
            <img
              className="features__icon"
              src={item.icon}
              alt={item.title}
            />
            <h3 className="features__title">{item.title}</h3>
            <p className="features__text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;