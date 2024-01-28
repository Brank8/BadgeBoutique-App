import PropTypes from 'prop-types';
import './Header.css';

function Header({ onLogout }) {
  return (
    <header>
      <button className='logout-button' onClick={onLogout}>Log out</button>
    </header>
  );
}

Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Header;