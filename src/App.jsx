import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import MyCart from './pages/MyCart/MyCart';
import Bedazzle from './pages/Bedazzle/Bedazzle';
import MyOrders from './pages/MyOrders/MyOrders';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import guestImage from './assets/guest.jpg';
import CreateBadge from './pages/Bedazzle/CreateBadge/CreateBadge';
import CreateBracelet from './pages/Bedazzle/CreateBracelet/CreateBracelet';
import CreateCase from './pages/Bedazzle/CreateCase/CreateCase';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');
    const [userName, setUserName] = useState('');
    const [userPicture, setUserPicture] = useState('');
    const [cartItems, setCartItems] = useState([]); 

useEffect(() => {
  const token = localStorage.getItem('token');
  
  if (token) {
    if (token === 'guest-token') {
      // Handle guest token
      setIsAuthenticated(true);
      setUserName('Guest');
      setUserPicture(guestImage);
    } else {
      // Only attempt to decode if it's a valid JWT
      if (typeof token === 'string' && token.split(".").length === 3) {
        try {
          const decoded = jwtDecode(token);
          setIsAuthenticated(true);
          console.log(decoded);
          // Additional checks before setting the userName and userPicture
          if (typeof decoded.name === 'string') {
            setUserName(decoded.name);
            console.log(decoded);
          }
          
          if (typeof decoded.picture === 'string' && decoded.picture.startsWith('http')) {
            setUserPicture(decoded.picture);
          }
        } catch (error) {
          console.error('Error decoding token:', error);
          // Potentially handle the error by logging out or other measures
          setIsAuthenticated(false);
          setUserName('');
          setUserPicture('');
        }
      }
    }
  } else {
    // Handle the case where there is no token in localStorage
    setIsAuthenticated(false);
    setUserName('');
    setUserPicture('');
  }
}, []);

    const handleLoginSuccess = (userData) => {
        localStorage.setItem('token', userData.token);
        setIsAuthenticated(true);
        setUserName(userData.name);
        setUserPicture(userData.picture);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUserName('');
        setUserPicture('');
        setCurrentPage('login');
    };

    const handleAddToCart = (item) => {
      setCartItems(prevItems => [...prevItems, item]);
    };
    
    const handleDeleteItem = (index) => {
      if(window.confirm('Are you sure you want to delete this item?')) {
        setCartItems(prevItems => prevItems.filter((_, i) => i !== index));
      }
    };

    const renderPage = () => {
      switch (currentPage) {
          case 'home':
            return <Home onNavigate={setCurrentPage} />;
          case 'bedazzle':
              return <Bedazzle onNavigate={setCurrentPage} />;
          case 'cart':
            return <MyCart onNavigate={setCurrentPage} cartItems={cartItems} onDeleteItem={handleDeleteItem} />;
          case 'orders':
              return <MyOrders />;
          case 'createBadge':
              return <CreateBadge onNavigate={setCurrentPage} onAddToCart={handleAddToCart} />;
          case 'createBracelet':
              return <CreateBracelet onNavigate={setCurrentPage} onAddToCart={handleAddToCart} />;
          case 'createCase':
              return <CreateCase onNavigate={setCurrentPage} onAddToCart={handleAddToCart} />;
          default:
            return <Home onNavigate={setCurrentPage} />;
      }
  };

    return (
        <GoogleOAuthProvider clientId="1024947023501-t7j8pg84mpmsaabc5rb3gnurath2s53t.apps.googleusercontent.com">
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