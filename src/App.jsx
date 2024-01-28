import { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Cart from './pages/Cart/Cart';
import CreateBadge from './pages/CreateBadge/CreateBadge';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [userName, setUserName] = useState('');
  const [userPicture, setUserPicture] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      if (token === 'guest-token') {
        setIsAuthenticated(true);
        setUserName('Guest');
        setUserPicture('default_picture_url');
      } else if (typeof token === 'string') {
        try {
          const decoded = jwtDecode(token);
          setIsAuthenticated(true);
          setUserName(decoded.name);
          setUserPicture(decoded.picture);
        } catch (error) {
          console.error('Error decoding token:', error);
        }
      }
    }
  }, []);

  const handleLoginSuccess = (userData) => {
    localStorage.setItem('token', userData.token);
    setIsAuthenticated(true);
    
    if (userData.token !== 'guest-token') {
      try {
        const decoded = jwtDecode(userData.token);
        setUserName(decoded.name);
        setUserPicture(decoded.picture);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      // Handle guest login
      setUserName('Guest');
      setUserPicture('default_picture_url');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUserName('');
    setUserPicture('');
    setCurrentPage('login');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'create-badge':
        return <CreateBadge />;
      case 'cart':
        return <Cart />;
      default:
        return <Home />;
    }
  };

  return (
    <GoogleOAuthProvider clientId="621597071561-60flcutacgnaqg6j13016slje92p81d2.apps.googleusercontent.com">
      {isAuthenticated ? (
        <>
          <Header onNavigate={setCurrentPage} onLogout={handleLogout} currentPage={currentPage} userName={userName} userPicture={userPicture} />
          {renderPage()}
        </>
      ) : (
        <Login 
          onAuthenticated={handleLoginSuccess} 
        />
      )}
    </GoogleOAuthProvider>
  );
}

export default App;