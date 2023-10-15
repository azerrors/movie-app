import { useSerie } from "../../contexts/SerieContext";

import Button from "../../ui/Button";
import Loader from "../../ui/Loader";
import List from "../../ui/List";

function SerieGenreSection({ serieWithGenre, serieGenreLoading }) {
  const { serieGenre, dispatch, serieVote, genrePage, serieInput, serieYear } =
    useSerie();
  return (
    <div>
      <div>
        {/* {movieIsGenre && (
          <h3 className="p-2 uppercase tracking-widest text-white">
            Current Page: {genrePage}
          </h3>
        )} */}
        {serieGenre && <List type="serie/genre" serie={serieWithGenre} />}
        {serieGenreLoading && (
          <div className="mt-10 flex h-screen items-center justify-center">
            <Loader />
          </div>
        )}
      </div>
      {serieGenre && !serieInput && !serieYear && !serieVote && (
        <div className="m-5 flex justify-end gap-2">
          {genrePage !== 1 && (
            <Button
              type="normal"
              onClick={() => dispatch({ type: "serie/decrease/page/genre" })}
            >
              Prev
            </Button>
          )}
          <Button
            type="normal"
            onClick={() => dispatch({ type: "serie/increase/page/genre" })}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}

export default SerieGenreSection;
