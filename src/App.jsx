import { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Cart from './pages/Cart/Cart';
import CreateBadge from './pages/CreateBadge/CreateBadge';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
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
      <Header onNavigate={setCurrentPage} onLogout={handleLogout} />
      {renderPage()}
    </>
  ) : (
    <Login onAuthenticated={() => {
      setIsAuthenticated(true);
      setCurrentPage('home');
    }} />
  )}
</GoogleOAuthProvider>
  );
}

export default App;