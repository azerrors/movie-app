import { Link } from "react-router-dom";
import { RiMovie2Line } from "react-icons/ri";
import { useMovie } from "../contexts/movieContext";

function NavLink() {
  const linkStyle =
    "uppercase tracking-wider  text-xs md:text-lg hover:border-b p-1 font-medium text-stone-300 hover:text-slate-200 transition-all duration-200";
  const { favorites } = useMovie();

  return (
    <div className="flex w-full items-center justify-between">
      <ul className="flex justify-end md:gap-8 ">
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
            TV Shows
          </Link>
        </li>
      </ul>
      <div className="relative font-semibold text-stone-200">
        <Link to="/favorites">
          <RiMovie2Line className=" cursor-pointer text-xl md:text-3xl" />
        </Link>
        <span
          className={`absolute right-0 h-2 w-2 top-4 md:top-6 md:h-3 md:w-3 rounded-full border-2 ${
            favorites.length > 0
              ? "border-emerald-400 bg-emerald-400"
              : "border-stone-400 bg-stone-400"
          }  text-lg`}
        ></span>
      </div>
    </div>
  );
}

export default NavLink;
