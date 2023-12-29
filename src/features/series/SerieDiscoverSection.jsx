import { useSerie } from "../../contexts/SerieContext";

import List from "../../ui/List";
import Loader from "../../ui/Loader";

function SerieDiscoverSection({ discoverSerie, discoverSerieLoading }) {
  const { serieInput, serieGenre, serieYear, serieVote } = useSerie();

  return (
    <div className="flex flex-col">
      <div>
        {!serieInput && !serieGenre && !serieYear && !serieVote && (
          <List type="list2" data={discoverSerie} />
        )}
        {discoverSerieLoading && (
          <div className="mt-10 flex h-screen items-center justify-center">
            <Loader />
          </div>
        )}
      </div>

      {/* {!serieInput && !serieGenre && !serieYear && !serieVote && (
        <div className="m-5 flex justify-end gap-2">
          {discoverPage !== 1 && (
            <Button
              type="normal"
              onClick={() => dispatch({ type: "serie/decrease/page/discover" })}
            >
              Prev
            </Button>
          )}
          <Button
            type="normal"
            onClick={() => dispatch({ type: "serie/increase/page/discover" })}
          >
            Next
          </Button>
        </div>
      )} */}
    </div>
  );
}

export default SerieDiscoverSection;
