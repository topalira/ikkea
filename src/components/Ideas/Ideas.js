import "./Ideas.css";

function Ideas() {
  const images = [
    "/ideas1.jpg",
    "/ideas2.jpg",
    "/ideas3.jpg",
    "/ideas4.jpg",
    "/ideas5.jpg",
    "/ideas6.jpg",
  ];

  return (
    <section className="ideas">
      <h2 className="ideas-title">ІДЕЇ ДЛЯ ОФОРМЛЕННЯ</h2>

      <div className="ideas-grid">
        <div className="ideas-item">
          <div className="ideas-card ideas-card-1">
            <img src={images[0]} alt="Ідея 1" />
            <div className="ideas-arrow">↗</div>
          </div>
        </div>
        <div className="ideas-item">
          <div className="ideas-card ideas-card-2">
            <img src={images[1]} alt="Ідея 2" />
            <div className="ideas-arrow">↗</div>
          </div>
        </div>

        <div className="ideas-item">
          <div className="ideas-card ideas-card-3">
            <img src={images[2]} alt="Ідея 3" />
            <div className="ideas-arrow">↗</div>
          </div>
        </div>

        <div className="ideas-item">
          <div className="ideas-card ideas-card-4">
            <img src={images[3]} alt="Ідея 4" />
            <div className="ideas-arrow">↗</div>
          </div>
        </div>

        <div className="ideas-item ideas-item-5">
          <div className="ideas-card ideas-card-5">
            <img src={images[4]} alt="Ідея 5" />
            <div className="ideas-arrow">↗</div>
          </div>
        </div>       
         <div className="ideas-item">
          <div className="ideas-card ideas-card-6">
            <img src={images[5]} alt="Ідея 6" />
            <div className="ideas-arrow">↗</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ideas;