import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './modules/common/contexts/AuthContext';
import HomeLayout from './modules/common/layouts/HomeLayout';
import AppLayout from './modules/common/layouts/AppLayout';
import AdminLayout from './modules/common/layouts/AdminLayout';
import Downloads from './pages/Downloads';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Account from './pages/account/Account';
import Pricing from './pages/pricing/Pricing';
import About from './pages/about/About';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import TermsOfService from './pages/termsOfService/TermsOfService';
import adminPanelRoutes from './modules/admin_panel';
import homeRoutes from './modules/home';
import authRoutes from './modules/authentication';

const PrivateRoutes = () => {
  const { authenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>
  }

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

const routesConfig = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      ...homeRoutes
    ]
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/account', element: <Account /> },
      { path: '/downloads', element: <Downloads /> },
      { path: '/pricing', element: <Pricing /> },
      { path: '/about', element: <About /> },
      { path: '/privacy-policy', element: <PrivacyPolicy /> },
      { path: '/terms-of-service', element: <TermsOfService /> }
    ]
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: '/',
        element: <AdminLayout />,
        children: [
          { path: '/admin/dashboard', element: <Dashboard /> },
          { path: '/admin/users', element: <Users /> }
        ]
      }
    ]
  },
  ...authRoutes,
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      ...adminPanelRoutes,
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
];

const renderRoutes = (routes) => {
  return routes.map((route, index) => {
    if (route.children) {
      return (
        <Route key={index} path={route.path} element={route.element}>
          {renderRoutes(route.children)}
        </Route>
      );
    }

    return <Route key={index} path={route.path} element={route.element} />;
  });
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {renderRoutes(routesConfig)}
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
