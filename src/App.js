import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AppLayout from './layouts/AppLayout';
import AdminLayout from './layouts/AdminLayout';
import Home from './pages/Home';
import Downloads from './pages/Downloads';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';

const PrivateRoutes = () => {
  const { authenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>
  }

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
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

          <Route element={<PrivateRoutes />}>

            <Route path="/" element={<AppLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}>
              <Route path="/" element={<Home />} />
              <Route path="/downloads" element={<Downloads />} />
            </Route>

            {/* Admin Panel */}
            <Route path="/" element={<AdminLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/users" element={<Users />} />
            </Route>

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
