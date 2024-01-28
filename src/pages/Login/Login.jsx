import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import * as jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import './Login.css'


function Login({ onAuthenticated }) {
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        onAuthenticated();
        navigate('/home');
      }
    }, [navigate, onAuthenticated]);
  
    const handleLoginSuccess = (credentialResponse) => {
      const decoded = jwtDecode.jwtDecode(credentialResponse?.credential);
      console.log(decoded);
      localStorage.setItem('token', credentialResponse?.credential);
      onAuthenticated();
      navigate('/home');
    };
  
    const handleLoginFailure = () => {
      console.log('Login Failed');
    };

    const handleGuestLogin = () => {
      
      localStorage.setItem('token', 'guest-token');
      onAuthenticated();
      navigate('/home');
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