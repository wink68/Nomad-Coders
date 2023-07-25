import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import About from './screens/About';
import Home from './screens/Home';
import User from './screens/users/User';
import NotFound from './screens/NotFound';
import Followers from './screens/users/Followers';

// 객체 구조를 통해 좀 더 직관적으로 보여짐
const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'users/:userId',
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />,
          }
        ],
      }
    ],
    // errorElement
    errorElement: <NotFound />,
  }
])

export default router;
