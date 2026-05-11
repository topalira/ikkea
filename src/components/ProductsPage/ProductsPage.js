import './ProductsPage.css';

import Cozyset from '../Cozyset/Cozyset'
import Features from '../Features/Features'
import Novelty from '../Novelty/Novelty'
import Productgroup from '../Productgroup/Productgroup'
import Products from '../Products/Products'
import Productset from '../Productset/Productset'
import Sections from '../Sections/Sections'

export function ProductsPage() {
  return (
    <div className="ProductsPage" >
      {/* Твои компоненты */}
      <Products />
      <Productset />
      <Novelty />
      <Cozyset />
      <Productgroup />
      <Features />
      <Sections />
    </div>
  );
}

export default ProductsPage;
