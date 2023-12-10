import React from "react";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center  justify-between p-4">
      <NavLink />
    </div>
  );
}

export default Header;
