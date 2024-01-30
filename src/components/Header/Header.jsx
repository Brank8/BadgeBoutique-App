import PropTypes from 'prop-types';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FaUserCircle } from "react-icons/fa";

function Header({ onNavigate, onLogout, currentPage, userName, userPicture }) {
    console.log(userName, userPicture); // Add this to debug
    return (
    <header className='header'>
        <div className='userInfo'>
    {userPicture && <img src={userPicture} alt="user" className="userPicture" />}
    <span>{userName}</span>
  </div>
  <nav className="navStyle">
        <div className={currentPage === 'home' ? 'navButton active' : 'navButton'} onClick={() => onNavigate('home')}>Home</div>
        <div className={currentPage === 'create-badge' ? 'navButton active' : 'navButton'} onClick={() => onNavigate('create-badge')}>Create Badge</div>
        <div className={currentPage === 'cart' ? 'navButton active' : 'navButton'} onClick={() => onNavigate('cart')}>Cart</div>
        <div className="navButton">
            <a href="mailto:powellbreianna@gmail.com" target="_blank" rel="noopener noreferrer" className="email">
              <FontAwesomeIcon icon={faEnvelope} /> Contact Us
            </a>
          </div>
        <div className='navButton' onClick={onLogout}>Log Out</div>
          </nav>
    </header>
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