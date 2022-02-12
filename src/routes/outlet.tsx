import React from "react";
import { Outlet } from "react-router-dom";

export default class RouteOutlet extends React.Component {
  render() {
    return <Outlet />;
  }
}
