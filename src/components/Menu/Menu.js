import './Menu.css';
import { Link } from 'react-router-dom';

export function Menu(props) {
  return (
    <div className={`menu-overlay ${props.isOpen ? 'open' : ''}`}>
      <div className="menu-header">
        <button className="menu-close" onClick={props.onClose}><img src={props.cross} /></button>
        <img src={props.img} alt="" />
      </div>
      <nav className="menu-links">
        <Link to="/" onClick={props.onClose}>Головна</Link>
        <Link to="/product" onClick={props.onClose}>Товари</Link>
        <Link to="/rooms" onClick={props.onClose}>Кімнати</Link>
        <Link to="/ideaspage" onClick={props.onClose}>Ідеї</Link>
        <Link to="/design" onClick={props.onClose}>Дизайн</Link>
      </nav>
    </div>
  );
}

export default Menu;
