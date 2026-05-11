import { Card } from '../Card/Card';
import Header from '../Header/Header';
import './Hero.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import pillowImg from '././Image1.png'


export function Hero(props) {
  return <div className="hero">

    <div className='ghj'>
      {/* <Header></Header> */}
    </div>

    <div className='hero-content'>
      <p>все для дому</p>
      <div className='buttons'>
        <Link to='/login'><div className='primary'>створити акаунт та розпочати!</div></Link>
        <HashLink smooth to='#catalog'><div className='secondary'>каталог <img src={props.strelka} /></div></HashLink>
      </div>
    </div>

    <div className="praducts">
      <Card
        title="Подушки"
        category="спальня кімната"
        price="12"
        imageUrl="Image1.png"
      />
      <Card
        title="Ковдра"
        category="спальня кімната"
        price="30"
        imageUrl="Image2.png"
      />
      <Card
        title="Ліжко"
        category="спальня кімната"
        price="414"
        imageUrl="Image3.png"
      />
    </div>
    <div className="praductsText">
      ЛОВИ МОМЕНТ | <strong>Знижки до 60%</strong> на вибрані категорії товарів!
    </div>

  </div>
}

export default Hero;