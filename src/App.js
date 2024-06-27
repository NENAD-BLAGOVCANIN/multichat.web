import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AppLayout from './layouts/AppLayout';
import AdminLayout from './layouts/AdminLayout';
import Home from './pages/home/Home';
import Downloads from './pages/Downloads';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import HomeLayout from './layouts/HomeLayout';
import Account from './pages/account/Account';
import Pricing from './pages/pricing/Pricing';

const PrivateRoutes = () => {
  const { authenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>
  }

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

const App = () => {

  return (
    <Router>
      <AuthProvider>
        <Routes>


          <Route path="/" element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/" element={<AppLayout />}>
            <Route path="/account" element={<Account />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/pricing" element={<Pricing />} />
          </Route>

          <Route element={<PrivateRoutes />}>

            {/* Admin Panel */}
            <Route path="/" element={<AdminLayout />}>
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
