import "./Cat.css";

function Cat() {
  const products = [
    {
      img: "/названабору1.png",
      title: "Nordvik",
    },
    {
      img: "/названабору2.png",
      title: "Eira",
    },
    {
      img: "/названабору3.png",
      title: "Fjord",
    },
    {
      img: "/названабору4.png",
      title: "Lund",
    },
    {
      img: "/названабору5.png",
      title: "Skala",
    },
    {
      img: "/названабору6.png",
      title: "Oslo",
    },
    {
      img: "/названабору7.png",
      title: "Bergen",
    },
    {
      img: "/названабору8.png",
      title: "Malmö",
    },
    {
      img: "/названабору9.png",
      title: "Sven",
    },
    {
      img: "/названабору10.png",
      title: "Runa",
    },
    {
      img: "/названабору11.png",
      title: "Oaken",
    },
    {
      img: "/названабору12.png",
      title: "Arden",
    },
    {
      img: "/названабору13.png",
      title: "Vega",
    },
    {
      img: "/названабору14.png",
      title: "Lina",
    },
    {
      img: "/названабору15.png",
      title: "Nora",
    },
    {
      img: "/названабору16.png",
      title: "Stockholm",
    },
    {
      img: "/названабору17.png",
      title: "Aster",
    },
    {
      img: "/названабору18.png",
      title: "Nordic Moon",
    },
  ];

  return (
    <section className="cat">
      <h2>Каталог</h2>

      <div className="cat-grid">
        {products.map((product, index) => (
          <div className="cat-item" key={index}>
            <img src={product.img} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cat;