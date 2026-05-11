import './AddRecommends.css';
import RecommendTitle from '../RecommendTitle/RecommendTitle';

function AddRecommends() {
  const topTags = [
    <RecommendTitle/>
  ];
  const bottomTags = [
    <RecommendTitle/>
  ];
    const images = [
    "/recomendation1.jpg",
    "/recomendation2.jpg",
    "/recomendation3.jpg",
    "/recomendation4.jpg",
    "/recomendation5.jpg",
    "/recomendation6.jpg",
  ];

  return (
    <section className="addrecommends">
      <h2 className="addrecommends-title">ДОДАТКОВІ РЕКОМЕНДАЦІЇ</h2>

       <div className="addrecommends-tags">
        {topTags.map((tag, index) => (
          <span className="addrecommends-tag" key={index}>
            {tag}
          </span>
        ))}
      </div> 

      <div className="addrecommends-grid">
        <div className="addrecommends-item">
          <div className="addrecommends-card addrecommends-card-1">
            <img src={images[0]} alt="Рекомендація 1" />
            <div className="addrecommends-arrow">↗</div>
          </div>
        </div>

        <div className="addrecommends-item">
          <div className="addrecommends-card addrecommends-card-2">
            <img src={images[1]} alt="Рекомендація 2" />
            <div className="addrecommends-arrow">↗</div>
          </div>
        </div>

        <div className="addrecommends-item">
          <div className="addrecommends-card addrecommends-card-3">
            <img src={images[2]} alt="Рекомендація 3" />
            <div className="addrecommends-arrow">↗</div>
          </div>
        </div>

        <div className="addrecommends-item">
          <div className="addrecommends-card addrecommends-card-4">
            <img src={images[3]} alt="Рекомендація 4" />
            <div className="addrecommends-arrow">↗</div>
          </div>
        </div>

        <div className="addrecommends-item addrecommends-item-5">
          <div className="addrecommends-card addrecommends-card-5">
            <img src={images[4]} alt="Рекомендація 5" />
            <div className="addrecommends-arrow">↗</div>
          </div>
        </div>

        <div className="addrecommends-item">
          <div className="addrecommends-card addrecommends-card-6">
            <img src={images[5]} alt="Рекомендація 6" />
            <div className="addrecommends-arrow">↗</div>
          </div>
        </div>
      </div>

      <div className="addrecommends-tags addrecommends-tags-bottom">
        {bottomTags.map((tag, index) => (
          <span className="addrecommends-tag" key={index}>
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}

export default AddRecommends;
