import React, { useEffect, useState, useCallback } from "react";
import './navbar.css';
import logo from '../../assets/edusity_assets/logo.png'; 
import { Link } from "react-scroll";
import menu_icon from '../../assets/edusity_assets/menu-icon.png'
function Navbar() {
    const [sticky, setSticky] = useState(false);

    const handleScroll = useCallback(() => {
        setSticky(window.scrollY > 600);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);
     const [mobileMenu,setMobilemenu]=useState(false)
     const toggle = ()=>{
        mobileMenu?setMobilemenu(false):setMobilemenu(true)
     }
    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="Logo" className="logo" />
            <ul className={mobileMenu?'':'hide-mobile-menu'}>
                <li><Link to="hero" smooth={true} offset={1} duration={500}>Home</Link></li>
                <li><Link to="programms" smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to="about" smooth={true} offset={-260} duration={500}>About us</Link></li>
                <li><Link to=" campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to="testimonilas" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li>
                    <Link to="contactus" smooth={true} offset={0} duration={500} className="btn">Contact us</Link>
                </li>
            </ul>
            <img src={menu_icon} className="menu-icon" onClick={toggle}>
            </img>
        </nav>
    );
}

export default Navbar;
