import React from "react";
import { Outlet } from "react-router-dom";

export default class AboutBase extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <Outlet />
      </div>
    );
  }
}
