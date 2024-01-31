import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import guestImage from '../../../public/guest.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { IoHome } from "react-icons/io5";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";

function Header({ onNavigate, onLogout, currentPage, userName, userPicture }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigate = (page) => {
        onNavigate(page);
        setIsMenuOpen(false); // Close the menu when a menu item is clicked
    };

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = useCallback(() => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [isMenuOpen]);

    // Use a ref to track the hamburger menu element
    const menuRef = useRef(null);

    // Close the menu when clicking outside of it
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [closeMenu, menuRef]);

    const handleImageError = (e) => {
        e.target.src = guestImage;
    };

    return (
        <>
        {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
        <header className='header' onClick={closeMenu}>
            <nav className="navbar navStyle" ref={menuRef}>
                <div className="navbar-container container">
                <div className='userInfo'>
                {userPicture && <img src={userPicture} alt="user" className="userPicture"  onError={handleImageError}  draggable="false" />}
                <span className='userName'>{userName}</span>
            </div>
                    <input type="checkbox" id="menu-toggle" checked={isMenuOpen} onChange={handleToggleMenu}></input>
                    <label htmlFor="menu-toggle" className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </label>
                    <ul className="menu-items" style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
                        <li><div className={currentPage === 'home' ? 'navButton active' : 'navButton'} onClick={() => handleNavigate('home')}><IoHome />‎ Home</div></li>
                        <li><div className={currentPage === 'create-badge' ? 'navButton active' : 'navButton'} onClick={() => handleNavigate('create-badge')}><FaWandMagicSparkles />‎ Create Badge</div></li>
                        <li><div className={currentPage === 'cart' ? 'navButton active' : 'navButton'} onClick={() => handleNavigate('cart')}><GrCart />‎ My Cart</div></li>
                        <li><div className="navButton email">
                            <a href="mailto:powellbreianna@gmail.com" target="_blank" rel="noopener noreferrer" className="email" onClick={closeMenu}>
                                <FontAwesomeIcon icon={faEnvelope} />‎ Contact Us
                            </a>
                        </div>
                        </li>
                        <li><div className='navButton' onClick={onLogout}><BiLogOut />‎ Log Out</div></li>
                    </ul>
                </div>
            </nav>
            <nav className="navStyle desktop-nav">
                <div className='userInfo'>
                    {userPicture && <img src={userPicture} alt="user" className="userPicture"  onError={handleImageError}  draggable="false"/>}
                    <span>{userName}</span>
                </div>
                <div className='nav-links'>
                    <div className={currentPage === 'home' ? 'navButton active' : 'navButton'} onClick={() => onNavigate('home')}><IoHome />‎ Home</div>
                    <div className={currentPage === 'create-badge' ? 'navButton active' : 'navButton'} onClick={() => onNavigate('create-badge')}><FaWandMagicSparkles />‎ Create Badge</div>
                    <div className={currentPage === 'cart' ? 'navButton active' : 'navButton'} onClick={() => onNavigate('cart')}><GrCart />‎ My Cart</div>
                    <div className="navButton email">
                        <a href="mailto:powellbreianna@gmail.com" target="_blank" rel="noopener noreferrer" className="email">
                            <FontAwesomeIcon icon={faEnvelope} />‎ Contact Us
                        </a>
                    </div>
                    <div className='navButton' onClick={onLogout}><BiLogOut />‎ Log Out</div>
                </div>
            </nav>
        </header>
        </>
    );
}

Header.propTypes = {
    onNavigate: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    currentPage: PropTypes.string.isRequired,
    userName: PropTypes.string,
    userPicture: PropTypes.string,
};

export default Header;