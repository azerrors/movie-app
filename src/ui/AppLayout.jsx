import React from "react";
import { Outlet } from "react-router-dom";
import Futter from "./Futter";

function AppLayout() {
  return (
    <div className="grid  h-full bg-primary font-sans font-semibold">
      <main>
        <Outlet />
      </main>
      <Futter />
    </div>
  );
}

export default AppLayout;
