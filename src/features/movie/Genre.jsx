import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMovieGenres } from "../../services/OtherApi";
import { BsFilm } from "react-icons/bs";
import Button from "../../ui/Button";
import { useMovie } from "../../contexts/movieContext";

function Genre() {
  const { dispatch } = useMovie();

  const { data: movieGenres } = useQuery({
    queryKey: ["searchmovie"],
    queryFn: getMovieGenres,
  });

  const handleClick = () => {
    dispatch({ type: "movie/reset/genre" });
  };
  return (
    <div>
      <div className="flex items-center gap-1 border-b border-stone-300 ">
        <BsFilm className="ml-3 text-xl text-white" />
        <h3 className=" p-2 text-xl uppercase tracking-widest text-white">
          Genres
        </h3>
      </div>
      <div className=" flex flex-wrap justify-center gap-2 ">
        {movieGenres?.map((genre) => {
          return (
            <Button
              onClick={() =>
                dispatch({
                  type: "movie/get/genre",
                  payload: { genre: genre.id, genreName: genre.name },
                })
              }
              type="category"
              key={genre.id}
            >
              {genre.name}
            </Button>
          );
        })}
      </div>
      <div className="mr-10 mb-10 flex justify-end">
        <Button type="smreset" onClick={handleClick}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default Genre;
