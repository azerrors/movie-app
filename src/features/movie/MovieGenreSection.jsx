import { useMovie } from "../../contexts/movieContext";

import List from "../../ui/List";
import Loader from "../../ui/Loader";

function MovieGenreSection({ movieWithGenre, genreLoading }) {
  const { movieGenre, dispatch, movieVote, genrePage, movieInput, movieYear } =
    useMovie();
  return (
    <div>
      <div>
        {/* {movieIsGenre && (
          <h3 className="p-2 uppercase tracking-widest text-white">
            Current Page: {genrePage}
          </h3>
        )} */}
        {movieGenre && <List type="list2" data={movieWithGenre} />}
        {genreLoading && (
          <div className="mt-10 flex h-screen items-center justify-center">
            <Loader />
          </div>
        )}
      </div>
      {/* {movieGenre && !movieInput && !movieYear && !movieVote && (
        <div className="m-5 flex justify-end gap-2">
          {genrePage !== 1 && (
            <Button
              type="normal"
              onClick={() => dispatch({ type: "movie/decrease/page/genre" })}
            >
              Prev
            </Button>
          )}
          <Button
            type="normal"
            onClick={() => dispatch({ type: "movie/increase/page/genre" })}
          >
            Next
          </Button>
        </div>
      )} */}
    </div>
  );
}

export default MovieGenreSection;
