import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

function Futter() {
  const linkStyle =
    "uppercase tracking-wider  text-xs md:text-lg hover:border-b p-1 font-medium text-stone-300 hover:text-slate-200 transition-all duration-200";

  return (
    <div className="mt-10 border p-8 text-2xl font-semibold uppercase text-white">
      <div>
        <ul className="flex flex-col items-center justify-center md:flex-row  md:gap-2 ">
          <li>
            <Link to="/" className={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/movie" className={linkStyle}>
              Movie
            </Link>
          </li>
          <li>
            <Link to="/series" className={linkStyle}>
              Series
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="mt-2 flex md:flex-row flex-col items-center justify-center gap-3">
          <li>
            <Link className={linkStyle} to="/populer_movies">
              Popular Movies
            </Link>
          </li>
          <li>
            <Link className={linkStyle} to="/upcoming_movies">
              Upcoming Movies
            </Link>
          </li>
          <li>
            <Link className={linkStyle} to="/trending_movies">
              Trending Movies
            </Link>
          </li>
          <li>
            <Link className={linkStyle} to="/trending_series">
              Trending Series
            </Link>
          </li>
          <li>
            <Link className={linkStyle} to="/populer_series">
              Popular Series
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="flex cursor-pointer justify-end gap-2 text-2xl">
          <Link to="https://www.linkedin.com/in/azer-nagiyev-a1b85a247/">
            <AiFillLinkedin />
          </Link>
          <Link to="https://github.com/azerrors?tab=repositories">
            <AiFillGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Futter;
