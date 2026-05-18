import React from "react";
import './Ideadecor.css';

function Ideadecor() {
  const decor = [
    {
      id: 1,
      title: "ІДЕЇ ДЛЯ ОФОРМЛЕННЯ",
      text: <>Сучасний інтер'єр — це баланс між функціональністю та естетикою. Скандинавський стиль із теплими акцентами зі
        шкіри та натуральної зелені створює відчуття затишку без зайвого перевантаження. Відкрите планування поєднує кухню та
        вітальню в єдиний живий простір, де кожна деталь має значення. Правильно підібране освітлення — підвісні світильники та
        відкриті лампи розжарювання — додає характеру та глибини. Рослини стають природними акцентами, що пом'якшують геометрію меблів
        і наповнюють кімнату свіжістю. </>
    },
  ];

  return (
    <section className="ideadecor">
      <div className="ideadecor__container">
        {decor.map((item) => (
          <div key={item.id} className="ideadecor__block">
            <h2 className="ideadecor__title">{item.title}</h2>
            <p className="ideadecor__text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ideadecor;