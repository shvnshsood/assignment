import React from 'react';
import {
  RouterProvider,createBrowserRouter,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/Fonts/WEB/css/switzer.css';
import SignupForm from './components/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <SignupForm />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


