import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./app.css";
import Logi1 from "./login.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Loadmore from './loadmore.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/login",
    element: <Logi1/>,
  },
  {
    path:"/load",
    element: <Loadmore/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,



)



