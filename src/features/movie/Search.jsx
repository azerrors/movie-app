import React from "react";
import { useMovie } from "../../contexts/movieContext";

function Search() {
  const { dispatch, movieInput, movieGenreName, movieVote, movieYear } =
    useMovie();
  return (
    <div className="border border-stone-300">
      <div className="mt-10 flex flex-col items-center justify-between text-start  md:ml-5 md:mt-7 md:flex-row">
        <div className="mb-10 md:ml-20">
          <input
            className="focus:ring-border-primary w-56 rounded-md transition-all duration-200 focus:w-72 focus:p-1 focus:outline-none  focus:ring"
            type="text"
            value={movieInput}
            onChange={(e) =>
              dispatch({ type: "movie/getInputValue", payload: e.target.value })
            }
          />
        </div>
        {movieGenreName && !movieInput && (
          <h3 className="text-sm uppercase text-white md:mr-36">
            Choosen Genre : {movieGenreName}
          </h3>
        )}
        {!movieGenreName && !movieVote && !movieInput && movieYear && (
          <h3 className="text-sm uppercase text-white md:mr-36">
            Choosen Year : {movieYear}
          </h3>
        )}{" "}
        {!movieGenreName && movieVote && !movieInput && !movieYear && (
          <h3 className="text-sm uppercase text-white md:mr-36">
            Choosen Rating : {movieVote}⭐
          </h3>
        )}
      </div>
    </div>
  );
}

export default Search;
