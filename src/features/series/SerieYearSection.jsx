import { useSerie } from "../../contexts/SerieContext";

import List from "../../ui/List";
import Loader from "../../ui/Loader";

function SerieYearSection({ serieWithYear, serieYearLoading }) {
  const { serieYear } = useSerie();
  return (
    <div>
      {serieYear && <List type="list2" data={serieWithYear} />}
      {serieYearLoading && (
        <div className="mt-10 flex h-screen items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default SerieYearSection;
