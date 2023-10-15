import { useMovie } from "../../contexts/movieContext";
import Button from "../../ui/Button";
import List from "../../ui/List";
import Loader from "../../ui/Loader";

function MovieDiscoverSection({ discoverMovie, discoverMovieLoading }) {
  const {
    movieInput,
    movieGenre,
    movieYear,
    movieVote,
    dispatch,
    discoverPage,
  } = useMovie();
  return (
    <div className="flex flex-col">
      <div>
        {!movieInput && !movieGenre && !movieYear && !movieVote && (
          <List type="movie/discover" movie={discoverMovie} />
        )}
        {discoverMovieLoading && (
          <div className="mt-10 flex h-screen items-center justify-center">
            <Loader />
          </div>
        )}
      </div>

      {/* {!movieInput && !movieGenre && !movieYear && !movieVote && (
        <div className="m-5 flex justify-end gap-2">
          {discoverPage !== 1 && (
            <Button
              type="normal"
              onClick={() => dispatch({ type: "movie/decrease/page/discover" })}
            >
              Prev
            </Button>
          )}
          <Button
            type="normal"
            onClick={() => dispatch({ type: "movie/increase/page/discover" })}
          >
            Next
          </Button>
        </div>
      )} */}
    </div>
  );
}

export default MovieDiscoverSection;
