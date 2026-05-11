import './Header.css';
import { Link } from 'react-router-dom';
import { Menu } from '../Menu/Menu';
import { useState } from 'react';

export function Header(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* 1. Залишаємо тільки один виклик Menu на початку або в кінці */}
            <Menu 
                isOpen={menuOpen} 
                onClose={() => setMenuOpen(false)} 
                img={props.img} 
                cross={props.cross} // Цей рядок передає іконку хрестика в Menu.js
            />

            <header className="header" id="header">
                <div className="top-bar">
                    <p>#вседлядому</p> <p>#швидкотазручно</p> <p>#buy now</p>
                    <p>#вседлядому</p> <p>#швидкотазручно</p> <p>#buy now</p>
                    <p>#вседлядому</p> <p>#швидкотазручно</p> <p>#buy now</p>
                </div>

                <nav className="main-nav">
                    <div className="nav-group-left">
                        <div onClick={() => setMenuOpen(true)} className="menu-btn burger-desktop">
                            <div className="burger"><img src={props.menu} alt="menu" /></div>
                            <span className='menu-span'>Меню</span>
                        </div>
                        <Link to="/"><img src={props.img} alt='logo' /></Link>
                        <div className="nav-links">
                            <Link to='/product'>Товари</Link>
                            <Link to='/rooms'>Кімнати</Link>
                            <Link to='/design-room'>Дизайн</Link>
                        </div>
                    </div>

                    <div className="nav-group-right">
                        <Link to='city'><div className="location"><img src={props.geoUser} alt="geo" /> <p className='hello'>Київ</p></div></Link>
                        <Link to='login'><div className="user"><img src={props.user} alt="user" /><p className='hello'>Привіт! Увійдіть В Систему</p></div></Link>
                        <Link to='basket'><div className="cart-icons"><img src={props.basket} alt="cart" /></div></Link>
                        <Link to='like'><div className="cart-icons"><img src={props.like} alt="like" /></div></Link>

                        <div onClick={() => setMenuOpen(true)} className="menu-btn-burger-mobile">
                            <div className="burger"><img src={props.menu} alt="menu" /></div>
                        </div>
                    </div>
                </nav>

                <div className="search-bar-container">
                    <div className="search-input-wrapper">
                        <span className="search-icon"><img src={props.lupa} alt="search" /></span>
                        <input type="text" placeholder="Пошук" />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;