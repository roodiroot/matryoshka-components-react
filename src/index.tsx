import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import ErrorPage from './components/error-page';
import Root from './root';
import Services from './pages/services';
import Lauout from './layout';
import Blog from './pages/blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Lauout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Root />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/blogs',
        element: <Blog />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
