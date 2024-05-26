import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext'; // Adjust the path as necessary
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import Downloads from './pages/Downloads';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';

const PrivateRoute = ({ element, ...rest }) => {
  const { authenticated } = useAuth();
  return authenticated ? element : <Navigate to="/login" />;
};

const App = () => {

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const savedThemePreference = localStorage.getItem('themePreference');

    if (savedThemePreference === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('themePreference', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/downloads" element={<PrivateRoute element={<Downloads />} />} />
          </Route>

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />

          {/* Fallback route to handle 404 or unmatched routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
