import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';

const authRoutes = [
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'logout',
    element: <Logout />,
  },
];

export default authRoutes;