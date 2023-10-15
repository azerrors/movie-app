import { useSerie } from '../../contexts/SerieContext';

import List from '../../ui/List';
import Loader from '../../ui/Loader';

function SerieVoteSection({serieWithVoteAverageLoading,serieWithVoteAverage}) {
  const { serieVote } = useSerie();
  return (
    <div>
      {serieVote && <List type="serie/vote" serie={serieWithVoteAverage} />}
      {serieWithVoteAverageLoading && (
        <div className="mt-10 flex h-screen items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default SerieVoteSection