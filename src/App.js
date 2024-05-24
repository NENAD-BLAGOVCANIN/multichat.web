import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { isLoggedIn } from './utils/auth';
import Logout from './pages/Logout';
import AppLayout from './layouts/AppLayout';
import Downloads from './pages/Downloads';


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const checkAuthentication = async () => {
      const loggedIn = isLoggedIn();
      setAuthenticated(loggedIn);
      setLoading(false);
    };

    checkAuthentication();

  }, []);

  if (loading) {
    return <div></div>;
  }

  return (
    <Router>
      <Routes>

        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/downloads" element={<Downloads />} />
        </Route>

        {/* Auth */}
        <Route path="/login" element={<Login authenticated={authenticated} setAuthenticated={setAuthenticated} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/register" element={<Register authenticated={authenticated} setAuthenticated={setAuthenticated} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/logout" element={<Logout />} />

        {/* Fallback route to handle 404 or unmatched routes */}
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </Router>
  );
}

export default App;
