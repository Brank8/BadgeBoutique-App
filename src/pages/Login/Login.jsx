
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import PropTypes from 'prop-types';
import './Login.css'
import guestImage from '../../assets/guest.jpg';

function Login({ onAuthenticated }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && token !== 'guest-token' && typeof token === 'string' && token.split(".").length === 3) {
      try {
        const decoded = jwtDecode(token);
        onAuthenticated({ name: decoded.name, picture: decoded.picture });
        navigate('/');
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else if (token === 'guest-token') {
      onAuthenticated({ name: 'Guest', picture: guestImage });
      navigate('/');
    }
  }, [navigate, onAuthenticated]);

  const handleLoginFailure = () => {
    console.log('Login Failed');
  };

  const handleLoginSuccess = (credentialResponse) => {
    const token = credentialResponse?.credential;
    try {
      const decoded = jwtDecode(token);
      onAuthenticated({ token, name: decoded.name, picture: decoded.picture });
      navigate('/');
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  };
  
  const handleGuestLogin = () => {
    const guestToken = 'guest-token';
    localStorage.setItem('token', guestToken);
    onAuthenticated({ token: guestToken, name: 'Guest', picture: guestImage });
    navigate('/');
  };

  return (
    <div className="container">
      <div className='button'>
        <div>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
          />
        </div>
        <h4>Continue as Guest? Click <span onClick={handleGuestLogin} style={{cursor: 'pointer', textDecoration: 'underline'}}>here</span>.</h4>
      </div>
    </div>
  );
}

Login.propTypes = {
  onAuthenticated: PropTypes.func.isRequired,
};

export default Login;