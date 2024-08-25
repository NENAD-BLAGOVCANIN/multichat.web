import Account from './pages/Account';
import Payments from './pages/Payments';
import Privacy from './pages/Privacy';

const accountRoutes = [
  {
    path: 'account',
    element: <Account />,
  },
  {
    path: 'account/payments',
    element: <Payments />,
  },
  {
    path: 'account/privacy',
    element: <Privacy />,
  },
];

export default accountRoutes;