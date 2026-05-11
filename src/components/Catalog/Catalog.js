import "./Catalog.css";

function Catalog() {
  const products = [
    { img: "/названабору1.png", title: "Шкіряна Класика" }, { img: "/названабору2.png", title: "Лорд Беж" }, { img: "/названабору3.png", title: "Смарагдовий Вінтаж" },
    { img: "/названабору4.png", title: "Нічна Стриманість" }, { img: "/названабору5.png", title: "Хмара Комфорту" }, { img: "/названабору6.png", title: "Робочий Простір" },
    { img: "/названабору7.png", title: "Оливковий Модерн" }, { img: "/названабору8.png", title: "Елегантний Штрих" }, { img: "/названабору9.png", title: "Вишневий Оксамит" },
    { img: "/названабору10.png", title: "Дух Традицій" }, { img: "/названабору11.png", title: "Сірий Граніт" }, { img: "/названабору12.png", title: "М'ятна Хвиля" },
    { img: "/названабору13.png", title: "Лазурний Акцент" }, { img: "/названабору14.png", title: "Скандинавський Сон" }, { img: "/названабору15.png", title: "Легкість Буття" },
    { img: "/названабору16.png", title: "Кабінетний Етюд" }, { img: "/названабору17.png", title: "Сніжна Гавань" }, { img: "/названабору18.png", title: "Ранкова Кава" }
  ];

  return (
    <section className="catalog" id=''>
      <h2>КАТАЛОГ</h2>

      <div className="catalog-grid">
        {products.map((item, index) => (
          <div className="catalog-item" key={index}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalog;