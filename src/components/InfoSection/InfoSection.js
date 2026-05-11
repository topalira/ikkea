import "./InfoSection.css";

function InfoSection() {
  return (
    <section className="info">
      <h2 className="info-title">ВАЖЛИВА ІНФОРМАЦІЯ</h2>

      <div className="info-wrapper">
        <div className="info-image">
          <img src="/laptop.jpg" alt="Процес роботи" />
        </div>
        <div className="info-card">
          <div className="info-card-content">
            <h3>ВАШ КОМФОРТ — НАШ ПРІОРІТЕТ</h3>
            <p>
              Ми віримо, що меблі — це не просто предмети інтер’єру, а основа вашого 
              щоденного затишку. Кожна модель у нашому каталозі проходить ретельну 
              перевірку якості, щоб ви могли насолоджуватися комфортом довгі роки. 
              Створюйте простір, у який хочеться повертатися кожного дня.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;