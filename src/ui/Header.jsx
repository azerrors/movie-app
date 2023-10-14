import React from "react";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center  justify-between p-4">
      <Link to="/">
        <img
          src="/public/finallogo.jpg"
          className="h-20 w-20 mix-blend-color-dodge"
          alt=""
        />
      </Link>
        <NavLink />
    </div>
  );
}

export default Header;
