import PropTypes from 'prop-types';
import './Header.css';

function Header({ onNavigate, onLogout }) {
  return (
    <header>
        <button className='logout-button' onClick={() => onNavigate('home')}>Home</button>
        <button className='logout-button' onClick={() => onNavigate('create-badge')}>Create Badge</button>
        <button className='logout-button' onClick={() => onNavigate('cart')}>Cart</button>
        <button className='logout-button' onClick={onLogout}>Log out</button>
    </header>
  );
}

Header.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Header;