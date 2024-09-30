import { createBrowserRouter } from 'react-router-dom';

import InfoStep from '../pages/auth/info-step';
import StartStep from '../pages/auth/start-step';
import VerificationCodeStep from '../pages/auth/verification-code-step';
import Main from '../pages/main';
import Login from '../pages/auth/login';

export const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/auth/start', element: <StartStep /> },
  { path: '/auth/verification-code', element: <VerificationCodeStep /> },
  { path: '/auth/info', element: <InfoStep /> },
  { path: '/auth/main', element: <Main /> },
]);
