import { useMovie } from "../../contexts/movieContext";
import List from "../../ui/List";
import Loader from "../../ui/Loader";

function MovieYearSection({ movieWithYear, yearLoading }) {
  const { movieYear } = useMovie();
  return (
    <div>
      {movieYear && <List type="movie/year" movie={movieWithYear} />}
      {yearLoading && (
        <div className="mt-10 flex h-screen items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default MovieYearSection;
