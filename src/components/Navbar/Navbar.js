import { useEffect, useState } from 'react';
import imageHeader from '../../assets/images/header.jpg';
import './Navbar.scss';

const Navbar = () => {

    const [scrollPosition, setScrollPosition] = useState('');
    const [toggleActive, setToggleActive] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 0) setScrollPosition('sticky');
        else { setScrollPosition(''); setToggleActive(false) };
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })


    return (
        <header className={scrollPosition}>
            <img src={imageHeader} alt="fogón de gas" className='banner' />
            <a href="https://www.youtube.com/" target='_blank' className='logo' rel="noopener noreferrer">U-Gourmen</a>
            <div className={toggleActive ? 'toggle active' : 'toggle'} onClick={() => setToggleActive(!toggleActive)}></div>
            <nav className={toggleActive ? 'active' : ''}>
                <ul>
                    <li><a href="https://www.youtube.com/" target='_blank' rel="noopener noreferrer">Inicio</a></li>
                    <li><a href="https://www.youtube.com/" target='_blank' rel="noopener noreferrer">¿Quienes sómos?</a></li>
                    <li><a href="https://www.youtube.com/" target='_blank' rel="noopener noreferrer">Servicios</a></li>
                    <li><a href="https://www.youtube.com/" target='_blank' rel="noopener noreferrer">Fotos</a></li>
                    <li><a href="https://www.youtube.com/" target='_blank' rel="noopener noreferrer">Contactanos</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;