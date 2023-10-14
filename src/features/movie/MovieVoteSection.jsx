import { useMovie } from "../../contexts/movieContext";
import List from "../../ui/List";
import Loader from "../../ui/Loader";

function MovieVoteSection({ movieWithVoteAverage, voteAverageLoading }) {
  const { movieVote } = useMovie();
  return (
    <div>
      {movieVote && <List type="vote/movie" movie={movieWithVoteAverage} />}
      {voteAverageLoading && (
        <div className="mt-10 flex h-screen items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default MovieVoteSection;
