import { Link } from "react-router-dom";

function NavLink() {
  const linkStyle =
    "uppercase tracking-wider  text-xs md:text-lg hover:border-b p-1 font-medium text-stone-300 hover:text-slate-200 transition-all duration-200";

  return (
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
          Series
        </Link>
      </li>
    </ul>
  );
}

export default NavLink;
