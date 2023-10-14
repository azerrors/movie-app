import { BsCalendar2Week, BsFilm, BsStar } from "react-icons/bs";
import { useMovie } from "../../contexts/movieContext";
import Year from "./Year";
import Vote from "./Vote";
import Genre from "./Genre";

function MovieSidebar() {
  const { dispatch, movieIsGenre, movieIsVote, movieIsYear } = useMovie();

  const handleYear = () => {
    dispatch({ type: "movie/show/year" });
  };

  const handleCategory = () => {
    dispatch({ type: "movie/show/genre" });
  };
  const handleVote = () => {
    dispatch({ type: "movie/show/vote" });
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
      {movieIsGenre && !movieIsVote && !movieIsYear && <Genre />}

      {!movieIsGenre && !movieIsVote && movieIsYear && <Year />}
      {!movieIsGenre && movieIsVote && !movieIsYear && <Vote />}
    </div>
  );
}

export default MovieSidebar;
