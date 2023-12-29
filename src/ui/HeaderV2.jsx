import { useMovie } from "../contexts/movieContext";
import { CiSquareMore } from "react-icons/ci";

function HeaderV2() {
  const { input, dispatch } = useMovie();

  return (
    <ul className="flex items-center justify-between bg-secondary p-4 ">
      <li>
        <img
          src="https://www.justwatch.com/appassets/img/logo/JustWatch-logo-large.webp"
          alt=""
          className="hidden w-48"
        />
        <CiSquareMore
          className="text-2xl text-sky-200/20 md:hidden"
          onClick={() => dispatch({ type: "openSidebar" })}
        />
      </li>
      <li>
        <input
          value={input}
          onChange={(e) =>
            dispatch({ type: "add/mainInput", payload: e.target.value })
          }
          type="text"
          className="w-32 px-1 text-xs rounded-lg focus:outline-none md:w-72 md:px-2 md:py-1"
          placeholder="search for movies/series ..."
        />
      </li>
      <li className="flex gap-5">
        <button className="rounded-lg py-1 px-1 border border-sky-200/50 text-xs uppercase text-sky-200/40 md:px-3 md:py-2 md:text-sm">
          login
        </button>
        <button className="rounded-lg border py-1 px-1  border-sky-200/50 bg-sky-200/10 text-xs uppercase text-sky-200/50 md:px-3 md:py-2 md:text-sm">
          sign up
        </button>
      </li>
    </ul>
  );
}

export default HeaderV2;
