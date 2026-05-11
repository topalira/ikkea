import "./Productss.css";

const productImages = [
  "/product1.jpg",
  "/product1.jpg",
  "/product1.jpg",
  "/product1.jpg",
];

const nameText = "НАЗВА ТОВАРУ";
const descText = "Опис товару опис товару опис товару";
const priceText = "001$";

function Productss() {
  return (
    <section className="productss">
      <h2 className="productss-title">ТОВАРИ</h2>

      <div className="productss-grid">
        {productImages.map((img, index) => (
          <div className="productss-card" key={index}>
            <div className="productss-img-wrap">
              <img src={img} alt={nameText} />
            </div>

            <p className="productss-name">{nameText}</p>
            <p className="productss-desc">{descText}</p>
            <p className="productss-price">{priceText}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productss;