import { createBrowserRouter } from 'react-router-dom';

import InfoStep from '../pages/auth/info-step';
import StartStep from '../pages/auth/start-step';
import VerificationCodeStep from '../pages/auth/verification-code-step';
import Main from '../pages/main';
import Login from '../pages/auth/login';
import Home from '../pages/main/routes/home';
import Friends from '../pages/main/routes/friends';
import Video from '../pages/main/routes/video';
import Group from '../pages/main/routes/group';

export const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/auth/start', element: <StartStep /> },
  { path: '/auth/verification-code', element: <VerificationCodeStep /> },
  { path: '/auth/info', element: <InfoStep /> },
  { path: '/auth/main', element: <Main />, children: [
    { path: '/auth/main/home', element: <Home /> },
    { path: '/auth/main/friends', element: <Friends /> },
    { path: '/auth/main/video', element: <Video /> },
    { path: '/auth/main/groups', element: <Group /> },
  ]},
]);
