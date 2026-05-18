import React from "react";
import "./Interiorlayout.css";

const Section = ({ image, text, highlight }) => {
  return (
    <div className="section">
      <div className={`imageWrapper ${highlight ? "highlight" : ""}`}>
        <img src={image} alt="interior" />
      </div>
      <div className="info">
        <h2>ДУША ПРОСТОРУ</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

const Interiorlayout = () => {
  return (
    <div className="container">
      <h1>ІДЕЇ</h1>
      <Section
        image="/inter1.jpg"
        text="Відкрите планування з кухнею та вітальнею в єдиному просторі — це сучасне рішення для тих, хто цінує світло та свободу руху. Шкіряний диван, чорні акценти та живі рослини створюють гармонію тепла й стилю."
        highlight={true}
      />

      <Section
        image="/inter2.jpg"
        text="Бохо-шик у вітальні — це поєднання теплої палітри, етнічного килима та декоративних плетених панно на стіні. Натуральні матеріали, рослини та вінтажні акценти роблять простір живим і неповторним. Кожен елемент розповідає свою історію та запрошує до відпочинку."
      />
    </div>
  );
};

export default Interiorlayout;