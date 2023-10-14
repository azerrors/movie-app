import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getSerieGenres } from "../../services/OtherApi";
import { useSerie } from "../../contexts/SerieContext";
import Button from "../../ui/Button";
import { BsFilm } from "react-icons/bs";

function SerieGenre() {
  const { dispatch } = useSerie();

  const { data: serieGenre } = useQuery({
    queryKey: ["searchmovie"],
    queryFn: getSerieGenres,
  });

  const handleClick = () => {
    dispatch({ type: "serie/reset/genre" });
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
        {serieGenre?.map((genre) => {
          return (
            <Button
              onClick={() =>
                dispatch({
                  type: "serie/get/genre",
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
      <div className="mr-5 mb-10 flex justify-end">
        <Button type="smreset" onClick={handleClick}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default SerieGenre;
