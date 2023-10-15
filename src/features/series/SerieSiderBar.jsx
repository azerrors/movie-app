import { useSerie } from "../../contexts/SerieContext";
import { BsCalendar2Week, BsFilm, BsStar } from "react-icons/bs";

import SerieGenre from "./SerieGenre";
import SerieYear from "./SerieYear";
import SerieVote from "./SerieVote";

function SerieSiderBar() {
  const { dispatch, serieIsGenre, serieIsVote, serieIsYear } = useSerie();

  const handleYear = () => {
    dispatch({ type: "serie/show/year" });
  };

  const handleCategory = () => {
    dispatch({ type: "serie/show/genre" });
  };
  const handleVote = () => {
    dispatch({ type: "serie/show/vote" });
  };
  return (
    <div className="flex flex-col border">
      <div className="flex justify-center gap-5 p-10">
        <BsFilm
          className={`ml-3 cursor-pointer text-2xl  text-white`}
          onClick={handleCategory}
        />
        <BsCalendar2Week
          className="ml-3 cursor-pointer text-2xl text-white"
          onClick={handleYear}
        />
        <BsStar
          className="ml-3 cursor-pointer text-2xl text-white"
          onClick={handleVote}
        />
      </div>
      {serieIsGenre && !serieIsVote && !serieIsYear && <SerieGenre />}

      {!serieIsGenre && !serieIsVote && serieIsYear && <SerieYear />}
      {!serieIsGenre && serieIsVote && !serieIsYear && <SerieVote />}
    </div>
  );
}

export default SerieSiderBar;
