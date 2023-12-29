import { useQuery } from "@tanstack/react-query";
import { useSerie } from "../../contexts/SerieContext";

import { BsFilm } from "react-icons/bs";
import { getSerieGenres } from "../../services/OtherApi";
import Button from "../../ui/Button";

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
        <span className="text-md mb-1 flex items-center gap-2  pb-2 uppercase text-sky-200/50">
          <BsFilm />
          Genres
        </span>
      </div>
      <div className=" mt-2 flex flex-col ">
        <div className=" grid grid-cols-2 gap-2 ">
          {serieGenre?.map((genre) => {
            return (
              <Button
                onClick={() =>
                  dispatch({
                    type: "serie/get/genre",
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
      </div>
      <div className="flex justify-end">
        <Button type="secondary_smreset" onClick={handleClick}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default SerieGenre;
