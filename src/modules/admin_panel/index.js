import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import MessagingServices from "./pages/MessagingServices";
import Subscriptions from "./pages/Subscriptions";

const adminPanelRoutes = [
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
  {
    path: 'users',
    element: <Users />,
  },
  {
    path: 'subscriptions',
    element: <Subscriptions />,
  },
  {
    path: 'messaging-services',
    element: <MessagingServices />
  }
];

export default adminPanelRoutes;