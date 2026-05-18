import "./IdeasCard.css";

function IdeasCard() {
  const ideas = [
    { img: "/image1.jpg", title: "НАША НОВА КОЛЕКЦІЯ" },
    { img: "/image2.jpg", title: "НАША НОВА КОЛЕКЦІЯ" },
    { img: "/image3.jpg", title: "НАША НОВА КОЛЕКЦІЯ" },
  ];

  return (
    <section className="ideasCard">
      <h2>ІДЕЇ</h2>

      <div className="ideasCard-grid">
        {ideas.map((item, index) => (
          <div className="ideasCard-card" key={index}>
            <img src={item.img} alt="" />
            <div className="ideasCard-caption">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IdeasCard;