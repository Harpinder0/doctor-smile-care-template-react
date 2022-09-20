import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import About from '../pages/about';
import Contact from '../pages/contact';
import Home from '../pages/home';
import Pricing from '../pages/pricing';
import Service from '../pages/service';


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const RenderRoutes = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default RenderRoutes;
