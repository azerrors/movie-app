import React from "react";
import SerieSearch from "../features/series/SerieSearch";
import { useSerie } from "../contexts/SerieContext";
import { useQuery } from "@tanstack/react-query";
import {
  getDiscoveredSeries,
  getSearchedSerie,
  getSerieByGenre,
  getSerieByVoteAverage,
  getSerieByYear,
} from "../services/tvSeries";
import SerieDiscoverSection from "../features/series/SerieDiscoverSection";
import SerieInputSection from "../features/series/SerieInputSection";
import SerieSiderBar from "../features/series/SerieSiderBar";
import SerieGenreSection from "../features/series/SerieGenreSection";
import SerieYearSection from "../features/series/SerieYearSection";
import SerieVoteSection from "../features/series/SerieVoteSection";
import UpContent from "../features/movie/UpContent";

function Serie() {
  const {
    serieInput,
    serieGenre,
    serieYear,
    serieVote,
    discoverPage,
    genrePage,
  } = useSerie();

  const { data: discoverSerie, isLoading: discoveSerieLoading } = useQuery({
    queryKey: ["discoverserie", discoverPage],
    queryFn: () => getDiscoveredSeries(discoverPage),
  });

  const { data: searchSerie, isLoading: searchedSerieLoading } = useQuery({
    queryKey: ["searchSerie", serieInput],
    queryFn: () => getSearchedSerie(serieInput),
  });

  const { data: serieWithGenre, isLoading: serieGenreLoading } = useQuery({
    queryKey: ["serieWithGenre", serieGenre, genrePage],
    queryFn: () => getSerieByGenre(serieGenre, genrePage),
  });

  const { data: serieWithYear, isLoading: serieYearLoading } = useQuery({
    queryKey: ["serieWithYear", serieYear],
    queryFn: () => getSerieByYear(serieYear),
  });

  const { data: serieWithVoteAverage, isLoading: serieWithVoteAverageLoading } =
    useQuery({
      queryKey: ["serieWithVoteAverage", serieVote],
      queryFn: () => getSerieByVoteAverage(serieVote),
    });

  return (
    <div>
      <div>
        <UpContent serie = {true}/>
        <div className="flex h-full flex-col-reverse gap-5 bg-secondary p-3 shadow-lg  md:flex-row">
          <div className=" md:w-9/12">
            <SerieDiscoverSection
              discoverSerie={discoverSerie}
              discoverSerieLoading={discoveSerieLoading}
            />
            <SerieInputSection
              searchSerie={searchSerie}
              searchedSerieLoading={searchedSerieLoading}
            />
            <SerieGenreSection
              serieWithGenre={serieWithGenre}
              serieGenreLoading={serieGenreLoading}
            />
            <SerieYearSection
              serieWithYear={serieWithYear}
              serieYearLoading={serieYearLoading}
            />
            <SerieVoteSection
              serieWithVoteAverage={serieWithVoteAverage}
              serieWithVoteAverageLoading={serieWithVoteAverageLoading}
            />
          </div>
          <p className="md:w-3/12">
            <SerieSiderBar />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Serie;
