import { useSerie } from "../../contexts/SerieContext";

import Loader from "../../ui/Loader";
import List from "../../ui/List";

function SerieInputSection({ searchSerie, searchedSerieLoading }) {
  const { serieInput } = useSerie();
  return (
    <div>
      {serieInput && <List type="list2" data={searchSerie} />}
      {searchedSerieLoading && (
        <div className="mt-10 flex h-screen items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default SerieInputSection;
