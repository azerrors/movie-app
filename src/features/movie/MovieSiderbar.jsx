import { useMovie } from "../../contexts/movieContext";
import { BsSearch } from "react-icons/bs";

import Genre from "./Genre";
import Vote from "./Vote";
import Year from "./Year";

function MovieSidebar() {
  const { dispatch, movieInput } = useMovie();

  return (
    <div className="flex flex-col ">
      <div className="mt-3">
        <span className="text-md mb-1 uppercase text-sky-200/50 flex items-center gap-2 border-b border-sky-200/20 pb-2">
          <BsSearch />
          Search
        </span>
        <div className="mb-10">
          <input
            className="focus:ring-border-primary w-full rounded-md p-1 transition-all duration-200  focus:outline-none  focus:ring"
            type="text"
            value={movieInput}
            placeholder="search for a movie"
            onChange={(e) =>
              dispatch({ type: "movie/getInputValue", payload: e.target.value })
            }
          />
        </div>
      </div>
      <Genre />
      <Vote />
      <Year />
    </div>
  );
}

export default MovieSidebar;
