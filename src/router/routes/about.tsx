import { RouteObject } from "react-router-dom";
import { lazyLoadView } from "../utils";
import RouteOutlet from "../../pages/outlet";

const aboutRoutes: RouteObject[] = [
  {
    path: "/about",
    element: <RouteOutlet />,
    children: [
      {
        index: true,
        element: lazyLoadView(["about"], "index"),
      },
    ],
  },
];

export default aboutRoutes;
