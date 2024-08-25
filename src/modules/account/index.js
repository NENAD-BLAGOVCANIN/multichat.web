import Account from './pages/Account';
import Payments from './pages/Payments';

const accountRoutes = [
  {
    path: 'account',
    element: <Account />,
  },
  {
    path: 'account/payments',
    element: <Payments />,
  },
];

export default accountRoutes;