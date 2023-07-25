import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import About from './screens/About';
import Home from './screens/Home';
import User from './screens/users/User';
import NotFound from './screens/NotFound';

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
        element: <User />
      }
    ],
    // errorElement
    errorElement: <NotFound />,
  }
])

export default router;
