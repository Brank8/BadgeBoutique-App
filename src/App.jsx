import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (

      <GoogleOAuthProvider clientId="621597071561-60flcutacgnaqg6j13016slje92p81d2.apps.googleusercontent.com">
        {isAuthenticated && <Header onLogout={handleLogout} />}
        <Routes>
          <Route path="/" element={<Login onAuthenticated={() => setIsAuthenticated(true)} />} />
          <Route path="/home" element={isAuthenticated ? <Home /> : <Login onAuthenticated={() => setIsAuthenticated(true)} />} />
        </Routes>
      </GoogleOAuthProvider>
  )
}

export default App;