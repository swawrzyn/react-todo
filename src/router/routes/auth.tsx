import { RouteObject } from "react-router-dom";
import { lazyLoadView } from "../utils";
import RouteOutlet from "../../pages/outlet";

const authRoutes: RouteObject[] = [
  {
    path: "/auth",
    element: <RouteOutlet />,
    children: [
      {
        index: true,
        element: lazyLoadView(["auth"], "index"),
      },
    ],
  },
];

export default authRoutes;
