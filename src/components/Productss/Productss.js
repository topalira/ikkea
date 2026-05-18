import { useRef } from "react";
import "./Productss.css";

const productss = [
  {
    img: "/product1.jpg",
    name: "СТІЛ LAGOM",
    desc: "Мінімалістичний стіл для роботи та навчання в скандинавському стилі",
    price: "129$",
  },
  {
    img: "/product1.jpg",
    name: "КРІСЛО NORD",
    desc: "Ергономічне крісло для комфортної роботи вдома",
    price: "89$",
  },
  {
    img: "/product1.jpg",
    name: "ПОЛИЦЯ KUB",
    desc: "Настінна полиця для організації простору",
    price: "45$",
  },
  {
    img: "/product1.jpg",
    name: "СВІТИЛЬНИК SOFT",
    desc: "М'яке тепле світло для затишної атмосфери",
    price: "39$",
  },
];

function Productss() {
  const sliderRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const onMouseDown = (e) => {
    drag.current.active = true;
    drag.current.startX = e.pageX - sliderRef.current.offsetLeft;
    drag.current.scrollLeft = sliderRef.current.scrollLeft;
  };

  const onMouseMove = (e) => {
    if (!drag.current.active) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - drag.current.startX;
    sliderRef.current.scrollLeft = drag.current.scrollLeft - walk;
  };

  const stopDrag = () => {
    drag.current.active = false;
  };

  return (
    <section className="productss">
      <h2 className="productss-title">ТОВАРИ</h2>

      <div
        className="productss-slider"
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {productss.map((item, index) => (
          <div className="productss-card" key={index}>
            <div className="productss-img-wrap">
              <img src={item.img} alt={item.name} draggable={false} />
            </div>
            <p className="productss-name">{item.name}</p>
            <p className="productss-desc">{item.desc}</p>
            <p className="productss-price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productss;