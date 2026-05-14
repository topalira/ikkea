import React from "react";
import "./RecommendTitle.css";

const data = [
  "ТЕПЛИЙ ДІМ",
  "ЗАТИШНА ОСЕЛЯ",
  "СВІТЛО ДОМУ",
  "НАТХНЕННЯ ПРИРОДИ",
  "ЛАГІДНИЙ ПРОСТІР",
  "РОДИННИЙ ЗАТИШОК",
  "ЖИВА ОСЕЛЯ",
  "АТМОСФЕРА",
];

export default function RecommendTitle() {
  return (
    <div className="recommendtitle">
      <div className="chips">
        {data.map((item, index) => (
          <div key={index} className="chip">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
