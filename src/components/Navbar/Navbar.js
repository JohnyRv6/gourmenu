import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../store/storeProvider';
import { types } from '../../store/storeReducer';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import imageHeader from '../../assets/images/banner-platos.jpeg';
import './Navbar.scss';

const Navbar = () => {

    const [toggleActive, setToggleActive] = useState(false);

    const [store, dispatch] = useContext(StoreContext);
    const { navbarPosition } = store;

    const { pathname } = useLocation();

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 0) dispatch({ type: types.changeNavbar, payload: 'sticky' });
        else { dispatch({ type: types.changeNavbar, payload: '' }); setToggleActive(false) };
    }

    useEffect(() => {
        if (pathname === '/') {
            window.addEventListener('scroll', handleScroll, { passive: true });

            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
        } else {
            dispatch({ type: types.changeNavbar, payload: 'sticky' });
        }
    }, [navbarPosition])


    return (
        <header className={navbarPosition}>
            <img src={imageHeader} alt="fogón de gas" className='banner' />
            <Link onClick={() => { dispatch({ type: types.changeNavbar, payload: '' }) }} to="/" className='logo'>U-Gourmen</Link>
            <div className={toggleActive ? 'toggle active' : 'toggle'} onClick={() => setToggleActive(!toggleActive)}></div>
            <nav className={toggleActive ? 'active' : ''}>
                <ul>
                    <li><Link onClick={() => { dispatch({ type: types.changeNavbar, payload: '' }) }} to="/">Inicio</Link></li>
                    <li><Link onClick={() => { dispatch({ type: types.changeNavbar, payload: 'sticky' }) }} to="/we-are">¿Quienes sómos?</Link></li>
                    <li><Link onClick={() => { dispatch({ type: types.changeNavbar, payload: 'sticky' }) }} to="/services">Servicios</Link></li>
                    <li><Link onClick={() => { dispatch({ type: types.changeNavbar, payload: 'sticky' }) }} to="/gallery">Fotos</Link></li>
                    <li><Link onClick={() => { dispatch({ type: types.changeNavbar, payload: 'sticky' }) }} to="/contact-us">Contáctanos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;