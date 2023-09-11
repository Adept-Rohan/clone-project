import { Consultant } from '@org/consultant';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Department } from '@org/consultant';
import { Dashboard } from '@org/dashboard';

const Layout = () => {
  return (
    <div className="flex">
      <Dashboard />
      <Outlet />
    </div>
  );
};

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/consultant',
        element: <Consultant />,
      },
      {
        path: '/department',
        element: <Department />,
      },
    ],
  },
]);

export function App() {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
