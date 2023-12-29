import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMovieGenres } from "../../services/OtherApi";
import { BsFilm } from "react-icons/bs";
import Button from "../../ui/Button";
import { useMovie } from "../../contexts/movieContext";

function Genre() {
  const { dispatch, movieIsGenre, movieIsVote, movieIsYear } = useMovie();

  const { data: movieGenres } = useQuery({
    queryKey: ["searchmovie"],
    queryFn: getMovieGenres,
  });

  const handleClick = () => {
    dispatch({ type: "movie/reset/genre" });
  };

  const handleCategory = () => {
    dispatch({ type: "movie/show/genre" });
  };

  return (
    <div>
      <div className="flex items-center gap-1 border-b border-stone-300 ">
        <span className="text-md mb-1 flex items-center gap-2  pb-2 uppercase text-sky-200/50">
          <BsFilm />
          Genres
        </span>
      </div>
      <div className="mt-2 flex flex-col">
        <div className=" grid grid-cols-2 gap-2 ">
          {movieGenres?.map((genre) => {
            return (
              <Button
                onClick={() =>
                  dispatch({
                    type: "movie/get/genre",
                    payload: { genre: genre.id, genreName: genre.name },
                  })
                }
                type="primary_category"
                key={genre.id}
              >
                {genre.name}
              </Button>
            );
          })}
        </div>
        <div className=" flex justify-end">
          <Button type="secondary_smreset" onClick={handleClick}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Genre;
