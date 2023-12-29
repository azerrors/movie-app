import { useQuery } from "@tanstack/react-query";
import { getMoviesByGenre } from "../../../services/movieApi";
import List from "../../../ui/List";

function MovieCategory({ genre }) {
  const { data: movieSimilarGenre, isLoading: genreLoading } = useQuery({
    queryKey: ["moviesimilargenre", genre?.id],
    queryFn: () => getMoviesByGenre(genre?.id),
  });

  return (
    <div>
      {" "}
      <h4 className="mt-10 text-lg font-medium uppercase tracking-wider text-sky-200/50 md:text-xl">
        More <span className="text-red-300">{genre?.name} </span>
        Movies
      </h4>
      <ul className="mt-2 p-5 text-stone-200 ">
        <List type="list5" data={movieSimilarGenre} />
      </ul>
    </div>
  );
}

export default MovieCategory;
