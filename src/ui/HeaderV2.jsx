import { CiSquareMore } from "react-icons/ci";
import { useMovie } from "../contexts/movieContext";
import { useEffect } from "react";

function HeaderV2() {
  const { input, dispatch, openSidebar } = useMovie();

  const handleClick = () => {
    dispatch({ type: "openSidebar" });
  };

  useEffect(() => {
    document.body.style.overflowY = openSidebar ? "hidden" : "auto";
  }, [openSidebar]);

  return (
    <ul className="flex items-center justify-between bg-secondary p-4 ">
      <li>
        <img
          src="https://www.justwatch.com/appassets/img/logo/JustWatch-logo-large.webp"
          alt=""
          className="hidden w-48 md:inline-block"
        />
        <CiSquareMore
          className="text-2xl text-sky-200/20 md:hidden"
          onClick={handleClick}
        />
      </li>
      <li>
        <input
          value={input}
          onChange={(e) =>
            dispatch({ type: "add/mainInput", payload: e.target.value })
          }
          type="text"
          className="w-32 rounded-lg px-1 text-xs focus:outline-none md:w-72 md:px-2 md:py-1"
          placeholder="search for movies/series ..."
        />
      </li>
      <li className="flex gap-5">
        <button className="rounded-lg border border-sky-200/50 px-1 py-1 text-xs uppercase text-sky-200/40 md:px-3 md:py-2 md:text-sm">
          login
        </button>
        <button className="rounded-lg border border-sky-200/50 bg-sky-200/10  px-1 py-1 text-xs uppercase text-sky-200/50 md:px-3 md:py-2 md:text-sm">
          sign up
        </button>
      </li>
    </ul>
  );
}

export default HeaderV2;
