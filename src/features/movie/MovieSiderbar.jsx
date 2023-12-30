import { useMovie } from "../../contexts/movieContext";
import { BsSearch } from "react-icons/bs";

import Genre from "./Genre";
import Vote from "./Vote";
import Year from "./Year";
import useCloseModalClickByOutside from "../../hooks/useCloseModalClickByOutside";

function MovieSidebar() {
  const { dispatch, movieInput } = useMovie();
  const handler = () => {
    dispatch({ type: "closeCategory" });
  };
  const { ref } = useCloseModalClickByOutside(handler);

  return (
    <div className="flex flex-col md:mx-0  " ref={ref}>
      <div className="mt-3 hidden md:inline-block">
        <span className="text-md mb-1 flex items-center gap-2 border-b border-sky-200/20 pb-2 uppercase text-sky-200/50">
          <BsSearch />
          Search
        </span>
        <div className="mb-10 text-center">
          <input
            className="focus:ring-border-primary rounded-md  p-1 transition-all duration-200 focus:outline-none  focus:ring  md:w-full"
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
