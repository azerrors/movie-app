import { useQuery } from "@tanstack/react-query";
import { getSerieByGenre } from "../../../services/tvSeries";
import List from "../../../ui/List";

function SerieCategory({ genre }) {
  const { data: movieSimilarGenre, isLoading: genreLoading } = useQuery({
    queryKey: ["moviesimilargenre", genre?.id],
    queryFn: () => getSerieByGenre(genre?.id),
  });

  return (
    <div>
      {" "}
      <h4 className="mt-10 text-xl font-medium uppercase tracking-wider text-sky-200/50">
        More <span className="text-red-300">{genre?.name} </span>
        Series
      </h4>
      <ul className="mt-2 p-5 text-stone-200 ">
        <List type="list5" data={movieSimilarGenre} />
      </ul>
    </div>
  );
}

export default SerieCategory;
