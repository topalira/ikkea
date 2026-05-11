import React, { useRef, useState } from "react";
import './Products.css';

function Products() {
  const products = [
    { id: 1, image: "/path-to-img1.jpg", title: "СКАНДИ КУХНЯ" },
    { id: 2, image: "/path-to-img2.jpg", title: "ТЕПЛИЙ ЗАТИШОК" },
    { id: 3, image: "/path-to-img3.jpg", title: "БОХО СВІТЛО" },
    { id: 4, image: "/path-to-img4.jpg", title: "МІДНИЙ БЛИСК" },
    { id: 5, image: "/path-to-img5.jpg", title: "СІРИЙ КОМФОРТ" },
    { id: 6, image: "/path-to-img6.jpg", title: "ОСІННІЙ ДІМ" },
    { id: 7, image: "/path-to-img7.jpg", title: "ЗЕЛЕНИЙ АКЦЕНТ" },
    { id: 8, image: "/path8.jpg", title: "СУХОЦВІТИ" },
    { id: 9, image: "/path9.jpg", title: "ЖИВА ЗЕЛЕНЬ" },
    { id: 10, image: "/path10.jpg", title: "КАКТУС СТИЛЬ" }
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
      <div className="products__container">
        {showLeft && (
          <button
            className="products__arrow left"
            onClick={() => scroll("left")}
          >
            <img src="/arrow-left.png" alt="left" />
          </button>
        )}

        <div className="products__track" ref={trackRef}>
          {data.map((item) => (
            <div
              key={item.id}
              className="products__card"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="products__label">{item.title}</div>
            </div>
          ))}
        </div>

        <button
          className="products__arrow right"
          onClick={() => scroll("right")}
        >
          <img src="/arrow.png" alt="right" />
        </button>
      </div>
    );
  };

  return (
    <section className="products_categorie">
      <h2 className="products__title">ТОВАРИ</h2>
      <Track data={products} />
      <p className="products__p">Дивитися більше категорій +</p>
    </section>
  );
}
export default Products;