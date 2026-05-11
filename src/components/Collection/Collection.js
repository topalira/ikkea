import "./Collection.css";

function Collection() {
  const items = [
    {
      id: 1,
      image: "/collection1.jpg",
      title: "наша нова коллекція",
    },
    {
      id: 2,
      image: "/collection2.jpg",
      title: "наші найкращі пропозиції" ,
    },
    {
      id: 3,
      image: "/collection3.jpg",
    },
  ];

  return (
    <section className="collection">
      <h2 className="collection__title">знайди те, що шукаеш!</h2>
      <div className="collection__top">
        {items.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className="collection__card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="collection__overlay">
              <span>{item.title}</span>
              <div className="collection__icon">
                <img src="/arrow.png" alt="arrow" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="collection__bottom"
        style={{ backgroundImage: `url(${items[2].image})` }}
      >
        <div className="collection__side">
          <div className="collection__icon">
            <img src="/arrow.png" alt="arrow" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;