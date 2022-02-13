import React from "react";
import { RouteObject, Navigate } from "react-router-dom";
import RouteOutlet from "../pages/outlet";

import TodosIndex from "../pages/todos";
import { aboutRoutes, authRoutes } from "./routes";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RouteOutlet />,
    children: [
      {
        index: true,
        element: <TodosIndex />,
      },
      ...authRoutes,
      ...aboutRoutes,
      { path: "*", element: <Navigate replace to="/" /> },
    ],
  },
];

// The useRoutes() hook allows you to define your routes as JavaScript objects
// instead of <Routes> and <Route> elements. This is really just a style
// preference for those who prefer to not use JSX for their routes config.

export default routes;
