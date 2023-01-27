import React from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import HomePage from '../pages/home';
import URLListPage from '../pages/urlListPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
    },
    {
        path: "/list",
        element: <URLListPage></URLListPage>,
      },
  ]);

function MainRoutes() {
  return (
    <RouterProvider router={router} />
  );
}

export default MainRoutes;
