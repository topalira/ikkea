import "./CartPage.css";


const CartPage = () => {
  return (
    <div className="cart-page">
      <main className="empty-cart">
        <h1>ВАША КОРЗИНА ПУСТА....</h1>

        <div className="empty-icon">
          <img src="Group.png" alt="Empty state" />
        </div>
      </main>
    </div>
  );
};

export default CartPage;