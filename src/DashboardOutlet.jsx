import React from "react";
import { Outlet } from "react-router-dom";
function DashboardOutlet() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default DashboardOutlet;
