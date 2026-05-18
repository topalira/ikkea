import "./Many.css";

function Many() {
  const images = [
    "/many1.jpg",
    "/many2.jpg",
    "/many3.jpg",
    "/many4.jpg",
    "/many5.jpg",
    "/many6.jpg",
    "/many7.jpg",
    "/many8.jpg",
    "/many9.jpg",
    "/many10.jpg",
    "/many11.jpg",
    "/many12.jpg",
    "/many13.jpg",
  ];

  return (
    <section className="many">
      <h2 className="many__title">ГАЛЕРЕЯ</h2>

      <div className="many__columns">
        <div className="column desktop">
          <div className="many__item many-card-1"><img src={images[0]} /><div className="many__arrow">↗</div></div>
          <div className="many__item many-card-4"><img src={images[3]} /><div className="many__arrow">↗</div></div>
          <div className="many__item many-card-7"><img src={images[6]} /><div className="many__arrow">↗</div></div>
          <div className="many__item many-card-10"><img src={images[9]} /><div className="many__arrow">↗</div></div>
        </div>

        <div className="column desktop">
          <div className="many__item many-card-2"><img src={images[1]} /><div className="many__arrow">↗</div></div>
          <div className="many__item many-card-5"><img src={images[4]} /><div className="many__arrow">↗</div></div>
          <div className="many__item many-card-8"><img src={images[7]} /><div className="many__arrow">↗</div></div>
          <div className="many__item many-card-11"><img src={images[10]} /><div className="many__arrow">↗</div></div>
          <div className="many__item many-card-13"><img src={images[12]} /><div className="many__arrow">↗</div></div>
        </div>

        <div className="column desktop">
          <div className="many__item many-card-3"><img src={images[2]} /><div className="many__arrow">↗</div></div>
          <div className="many__item many-card-6"><img src={images[5]} /><div className="many__arrow">↗</div></div>
          <div className="many__item many-card-9"><img src={images[8]} /><div className="many__arrow">↗</div></div>
          <div className="many__item many-card-12"><img src={images[11]} /><div className="many__arrow">↗</div></div>
        </div>
        <div className="column tablet">
          <div className="many__item many-card-1"><img src={images[0]} /><div className="many__arrow">↗</div></div>
          <div className="many__item many-card-3"><img src={images[2]} /><div className="many__arrow">↗</div></div>
          <div className="many__item many-card-5"><img src={images[4]} /><div className="many__arrow">↗</div></div>
          <div className="many__item many-card-8"><img src={images[7]} /><div className="many__arrow">↗</div></div>
          <div className="many__item many-card-12"><img src={images[11]} /><div className="many__arrow">↗</div></div>
        </div>

        <div className="column tablet">
          <div className="many__item many-card-2"><img src={images[1]} /><div className="many__arrow">↗</div></div>
          <div className="many__item many-card-4"><img src={images[3]} /><div className="many__arrow">↗</div></div>
          <div className="many__item many-card-7"><img src={images[6]} /><div className="many__arrow">↗</div></div>
          <div className="many__item many-card-10"><img src={images[9]} /><div className="many__arrow">↗</div></div>
          <div className="many__item many-card-13"><img src={images[12]} /><div className="many__arrow">↗</div></div>
        </div>

      </div>
    </section>
  );
}

export default Many;