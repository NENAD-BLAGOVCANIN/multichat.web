import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

const adminPanelRoutes = [
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
  {
    path: 'users',
    element: <Users />,
  },
];

export default adminPanelRoutes;