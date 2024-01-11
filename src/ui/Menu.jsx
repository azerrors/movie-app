import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CiViewList } from "react-icons/ci";
import { IoIosTrendingUp } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { LuCrown } from "react-icons/lu";
import { MdMovie } from "react-icons/md";
import { RiSlideshow3Line } from "react-icons/ri";
import { useMovie } from "../contexts/movieContext";

function Menu() {
  const [activeLink, setActiveLink] = useState(null);

  const { dispatch, openSidebar } = useMovie();

  const liStyle =
    "flex items-center p-2 gap-3 transition-all duration-300 text-sky-200/40 hover:text-sky-200/80";
  const iconStyle = "text-2xl";

  const handleLinkClick = (link) => {
    dispatch({ type: "closeSidebar" });
    setActiveLink(link);
  };

  useEffect(() => {
    document.body.style.overflowY = openSidebar ? "hidden" : "auto";
  }, [openSidebar]);

  return (
    <div>
      <ul className="ml-2 flex flex-col gap-3">
        <Link to="/">
          <li
            className={`${liStyle} ${
              activeLink === "/" ? "border-text-sky-200 border-r" : ""
            }`}
            onClick={() => handleLinkClick("/")}
          >
            <IoHomeOutline
              className={`${iconStyle} ${
                activeLink === "/" ? "text-sky-200" : ""
              }`}
            />
            Homepage
          </li>
        </Link>

        <Link to="/movie">
          <li
            className={`${liStyle} ${
              activeLink === "/movie" ? "border-text-sky-200 border-r" : ""
            }`}
            onClick={() => handleLinkClick("/movie")}
          >
            <MdMovie
              className={`${iconStyle} ${
                activeLink === "/movie" ? "text-sky-200" : ""
              }`}
            />
            Movie
          </li>
        </Link>

        <Link to="/series">
          <li
            className={`${liStyle} ${
              activeLink === "/tv-shows" ? "border-text-sky-200 border-r" : ""
            }`}
            onClick={() => handleLinkClick("/tv-shows")}
          >
            <RiSlideshow3Line
              className={`${iconStyle} ${
                activeLink === "/tv-shows" ? "text-sky-200" : ""
              }`}
            />
            Tv Series
          </li>
        </Link>

        <Link to="/trending">
          <li
            className={`${liStyle} ${
              activeLink === "/popular" ? "border-text-sky-200 border-r" : ""
            }`}
            onClick={() => handleLinkClick("/popular")}
          >
            <LuCrown
              className={`${iconStyle} ${
                activeLink === "/popular" ? "text-sky-200" : ""
              }`}
            />
            Trending
          </li>
        </Link>

        <Link to="/popular">
          <li
            className={`${liStyle} ${
              activeLink === "/trending" ? "border-text-sky-200 border-r" : ""
            }`}
            onClick={() => handleLinkClick("/trending")}
          >
            <IoIosTrendingUp
              className={`${iconStyle} ${
                activeLink === "/trending" ? "text-sky-200" : ""
              }`}
            />
            Popular
          </li>
        </Link>

        <Link to="/favorites">
          <li
            className={`${liStyle} ${
              activeLink === "/favorites" ? "border-text-sky-200 border-r" : ""
            }`}
            onClick={() => handleLinkClick("/favorites")}
          >
            <CiViewList
              className={`${iconStyle} ${
                activeLink === "/favorites" ? "text-sky-200" : ""
              }`}
            />
            Your List
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Menu;
