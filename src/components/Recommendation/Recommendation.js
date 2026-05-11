import React, { useRef, useState } from "react";
import "./Recommendation.css";

function Recommendation() {
  const recommendations = [
    { id: 1, image: "/path-to-img1.jpg", title: "ГАРМОНІЯ СКАНДІ" },
    { id: 2, image: "/path-to-img2.jpg", title: "ТЕРАКОТОВИЙ ЗАТИШОК" },
    { id: 3, image: "/path-to-img3.jpg", title: "НАТХНЕННЯ ПРИРОДИ" },
    { id: 4, image: "/path-to-img4.jpg", title: "МАГІЯ СВІТЛА" },
    { id: 5, image: "/path-to-img5.jpg", title: "МІСЬКИЙ СПОКІЙ" },
    { id: 6, image: "/path-to-img6.jpg", title: "РОДИННА ВЕЧЕРЯ" },
    { id: 7, image: "/path-to-img7.jpg", title: "ЧИСТИЙ ПРОСТІР" },
    { id: 11, image: "/path11.jpg", title: "СВІТЛО ДОМУ" },
    { id: 12, image: "/path12.jpg", title: "ЕКО ЕСТЕТИКА" },
    { id: 13, image: "/path13.jpg", title: "ЗАТИШНА ОСЕЛЯ" },
    { id: 14, image: "/path14.jpg", title: "ТЕПЛИЙ ВЕЧІР" },
    { id: 15, image: "/path15.jpg", title: "ЛАГІДНИЙ ДІМ" },
    { id: 16, image: "/path16.jpg", title: "ЖИВА АТМОСФЕРА" },
  ];

  const bestSellers = [
    { id: 8, image: "/path8.jpg", title: "ПОДИХ СТЕПУ" },
    { id: 9, image: "/path9.jpg", title: "ЗЕЛЕНА ГАРМОНІЯ" },
    { id: 10, image: "/path10.jpg", title: "БОХО МОТИВИ" },
    { id: 11, image: "/path11.jpg", title: "ЛАКОНІЧНА ВАЗА" },
    { id: 12, image: "/path12.jpg", title: "ГЕОМЕТРІЯ ДЕРЕВА" },
    { id: 13, image: "/path13.jpg", title: "М'ЯКІ ОБІЙМИ" },
    { id: 14, image: "/path14.jpg", title: "КНИЖКОВА ПОЛИЦЯ" },
    { id: 17, image: "/path17.jpg", title: "ДЕТАЛІ ЗАТИШКУ" },
    { id: 18, image: "/path18.jpg", title: "ЕНЕРГІЯ СОНЦЯ" },
    { id: 19, image: "/path19.jpg", title: "ЕСТЕТИКА ФОРМ" },
    { id: 20, image: "/path20.jpg", title: "ЛІНІЇ КОМФОРТУ" },
  ];

  const Track = ({ data }) => {
    const trackRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);

    const scroll = (direction) => {
      const container = trackRef.current;
      const scrollAmount = 300;

      container.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => {
        setShowLeft(container.scrollLeft > 0);
      }, 200);
    };

    return (
      <div className="recommendation_container">
        {showLeft && (
          <button
            className="recommendation_arrow left"
            onClick={() => scroll("left")}
          >
            <img src="/arrow-left.png" alt="left" />
          </button>
        )}

        <div className="recommendation_track" ref={trackRef}>
          {data.map((item) => (
            <div
              key={item.id}
              className="recommendation_card"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="recommendation_label">{item.title}</div>
            </div>
          ))}
        </div>

        <button
          className="recommendation_arrow right"
          onClick={() => scroll("right")}
        >
          <img src="/arrow.png" alt="right" />
        </button>
      </div>
    );
  };

return (
    <section className="recommendations">
      <h2 className="recommendation_title">рекомендації</h2>
      <Track data={recommendations} />
      <h2 className="recommendation_title">найкращі набори</h2>
      <Track data={bestSellers} />
    </section>
  );
}

export default Recommendation;