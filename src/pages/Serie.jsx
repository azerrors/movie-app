import { useQuery } from "@tanstack/react-query";
import React from "react";
import { IoFilterSharp } from "react-icons/io5";
import { useSerie } from "../contexts/SerieContext";
import UpContent from "../features/movie/UpContent";
import SerieDiscoverSection from "../features/series/SerieDiscoverSection";
import SerieGenreSection from "../features/series/SerieGenreSection";
import SerieInputSection from "../features/series/SerieInputSection";
import SerieSiderBar from "../features/series/SerieSiderBar";
import SerieVoteSection from "../features/series/SerieVoteSection";
import SerieYearSection from "../features/series/SerieYearSection";
import {
  getDiscoveredSeries,
  getSearchedSerie,
  getSerieByGenre,
  getSerieByVoteAverage,
  getSerieByYear,
} from "../services/tvSeries";

function Serie() {
  const {
    serieInput,
    serieGenre,
    dispatch,
    serieYear,
    openCategory,
    serieVote,
    discoverPage,
    serieGenreName,
    openSeriesCategory,
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
        <UpContent serie={true} />
        <div className="flex justify-end p-2">
          <IoFilterSharp
            className="text-3xl text-sky-200/20 md:hidden"
            onClick={() => dispatch({ type: "openSeriesCategory" })}
          />
        </div>
        <div>
          <div className="flex items-center gap-4 px-4 text-sky-200/60 ">
            <div>
              {serieGenreName && !serieInput && (
                <h3 className="text-sm uppercase  md:mr-36">
                  <span className="text-red-200/50">{serieGenreName}</span>{" "}
                  Movies
                </h3>
              )}
              {!serieGenreName && !serieVote && !serieInput && serieYear && (
                <h3 className="text-sm uppercase  md:mr-36">
                  <span className="text-red-200/50">{serieYear}</span> Movies
                </h3>
              )}
              {!serieGenreName && serieVote && !serieInput && !serieYear && (
                <h3 className="text-sm uppercase  md:mr-36">
                  <span className="text-red-200/50">{serieVote}</span>
                  ⭐Movies
                </h3>
              )}
            </div>
            <div className="w-full rounded-xl border-b-2 border-sky-200/50  py-1"></div>
          </div>
        </div>
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
          <div
            className={`md:w-3/12 ${
              openSeriesCategory ? " top-0 animate-moveInTop bg-secondary" : ""
            }`}
          >
            {!openSeriesCategory ? (
              <span className="hidden md:inline-block">
                <SerieSiderBar />
              </span>
            ) : (
              <span>
                <SerieSiderBar />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Serie;
