import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import List from './routes/List';
import App from './routes/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <List />,
  },
  {
    path: 'admins/:id',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
