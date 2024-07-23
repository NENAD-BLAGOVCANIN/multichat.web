import About from "./pages/about/About";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/termsOfService/TermsOfService";

const legalRoutes = [
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: 'terms-of-service',
    element: <TermsOfService />,
  },
];

export default legalRoutes;