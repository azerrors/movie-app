import { useQuery } from "@tanstack/react-query";
import { useSerie } from "../../../contexts/SerieContext";
import { getSeriesDetails } from "../../../services/detailsApi";
import {
  getSerieCast,
  getSerieImage,
  getSerieSimilar,
  getSerieVideo,
} from "../../../services/tvSeries";
import Loader from "../../../ui/Loader";
import MySlider from "../../../ui/MySlider";
import NotFound from "../../../ui/NotFound";
import SeasonWindow from "./SeasonWindow";
import Seasons from "./Seasons";
import SerieCast from "./SerieCast";
import SerieCategory from "./SerieCategory";
import SerieCompanies from "./SerieCompanies";
import SerieCountries from "./SerieCountries";
import SerieGenre from "./SerieGenre";
import SerieImage from "./SerieImage";
import SerieSimilar from "./SerieSimilar";
import SerieSpokenLanguages from "./SerieSpokenLanguages";
import SerieVideo from "./SerieVideo";

import { CiCalendarDate } from "react-icons/ci";
import { GiBeveledStar } from "react-icons/gi";
import { CiTimer } from "react-icons/ci";

const BASE_IMAGE = "https://image.tmdb.org/t/p/w500";

function SerieDetailSection({ serieID }) {
  const { showWindow, episodes, windowInput } = useSerie();

  const { data: serieDetails, isLoading: serieDetailsLoading } = useQuery({
    queryKey: ["serieDetails", serieID],
    queryFn: () => getSeriesDetails(serieID),
  });

  const { data: serieCast } = useQuery({
    queryKey: ["serieCast", serieID],
    queryFn: () => getSerieCast(serieID),
  });

  const { data: serieVideo } = useQuery({
    queryKey: ["serieVideo", serieID],
    queryFn: () => getSerieVideo(serieID),
  });

  const { data: serieImage } = useQuery({
    queryKey: ["serieImage", serieID],
    queryFn: () => getSerieImage(serieID),
  });
  const { data: serieSimilar } = useQuery({
    queryKey: ["serieSimilar", serieID],
    queryFn: () => getSerieSimilar(serieID),
  });

  const {
    name,
    genres,
    backdrop_path,
    poster_path,
    overview,
    original_name,
    first_air_date,
    original_language,
    vote_average,
    number_of_episodes,
    number_of_seasons,
    created_by,
    episode_run_time,
    in_production,
    languages,
    production_companies,
    production_countries,
    seasons,
    id,
    spoken_languages,
    status,
  } = serieDetails ? serieDetails : [];

  if (serieDetailsLoading) {
    return (
      <div>
        <div className="mt-10 flex h-screen items-center justify-center">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div></div>

      <div>
        <img
          src={`${BASE_IMAGE}${backdrop_path}`}
          className="h-[29rem] bg-contain  blur-sm transition-all duration-200 md:w-full"
          alt=""
        />
      </div>

      <div className="-translate-y-16 animate-moveInBottom  rounded-2xl  bg-secondary p-5 shadow-lg transition-all duration-500">
        <div className="flex    flex-col gap-5  md:flex-row">
          <div className="md:hidden">
            <h6 className="text-md uppercase tracking-widest text-stone-200 md:text-xl">
              {name}({original_language})
            </h6>
            <h6 className="text-md uppercase tracking-widest text-stone-200/50 md:text-xl">
              Original title: {original_name}
            </h6>
            <span className="text-md mr-5 uppercase tracking-widest text-sky-200/50 md:text-lg">
              Seasons:{number_of_seasons}
            </span>
            <span className="text-md uppercase tracking-widest text-sky-200/50 md:text-lg">
              Episodes:{number_of_episodes}
            </span>
          </div>

          <div className="md:w-[30%]">
            <div>
              <div>
                {poster_path ? (
                  <img
                    className="rounded-lg  md:h-[31rem] "
                    src={`${BASE_IMAGE}${poster_path}`}
                    alt=""
                  />
                ) : (
                  <img
                    className="h-[35rem] rounded-lg "
                    src="/public/imagenotfound.jpg"
                    alt=""
                  />
                )}
              </div>
              <div className="flex items-center justify-around   bg-sky-900/20 p-1 text-center text-stone-200/70">
                <div>
                  <h6 className=" flex justify-center pb-1 lowercase">
                    <CiCalendarDate className="text-3xl" />
                  </h6>
                  <span className="text-center text-stone-200">
                    {first_air_date}
                  </span>
                </div>
                <div>
                  <h6 className="flex justify-center pb-1 text-center text-3xl lowercase">
                    <CiTimer />
                  </h6>
                  <span className="text-center text-stone-200">
                    {episode_run_time}
                  </span>
                </div>
                <div>
                  <h6 className="flex justify-center pb-1 text-center text-3xl lowercase">
                    <GiBeveledStar />
                  </h6>
                  <span className="text-center text-stone-200">
                    {vote_average.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2 divide-y-[1px] divide-sky-200/50 text-stone-200/70">
              <div>
                <h4 className="mt-2 text-lg tracking-widest text-sky-200/50">
                  GENRES
                </h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {genres &&
                    genres.map((genre) => {
                      return <SerieGenre key={genre.id} genre={genre} />;
                    })}
                </ul>
              </div>

              <div>
                <h4 className="mt-2 text-lg uppercase tracking-widest text-sky-200/50">
                  production companies
                </h4>
                <ul className="mt-2 flex flex-wrap gap-2 text-stone-200">
                  {production_companies?.map((company) => {
                    return (
                      <SerieCompanies key={company.name} company={company} />
                    );
                  })}
                </ul>
              </div>

              <div>
                <h4 className="mt-2 text-lg uppercase tracking-widest text-sky-200/50">
                  production countries
                </h4>
                <ul className="mt-2 flex flex-wrap gap-2 text-stone-200">
                  {production_countries?.map((country) => {
                    return (
                      <SerieCountries key={country.name} country={country} />
                    );
                  })}
                </ul>
              </div>

              <div>
                <h4 className="mt-2 text-lg uppercase tracking-widest text-sky-200/50">
                  Spoken Languages
                </h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {spoken_languages?.map((language) => {
                    return (
                      <SerieSpokenLanguages
                        key={language.iso_639_1}
                        language={language}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="md:w-[70%]">
            <div className="hidden md:inline-block">
              <h6 className="text-xl uppercase tracking-widest text-stone-200">
                {name}({original_language})
              </h6>
              <h6 className="text-xl uppercase tracking-widest text-stone-200/50">
                Original title: {original_name}
              </h6>
              <span className="text-md mr-5 uppercase tracking-widest text-sky-200/50 md:text-lg">
                Seasons:{number_of_seasons}
              </span>
              <span className="text-md uppercase tracking-widest text-sky-200/50 md:text-lg">
                Episodes:{number_of_episodes}
              </span>
            </div>

            <div>
              <h4 className="mt-10 text-xl font-medium uppercase tracking-wider text-sky-200/50">
                Overview
              </h4>
              <span className="lowercase text-stone-200/70">{overview}</span>
            </div>

            {serieCast?.length && (
              <div>
                <h4 className="mt-10 text-xl font-medium uppercase tracking-wider text-sky-200/50">
                  Cast
                </h4>
                <ul className="mt-2 p-5">
                  {serieCast?.length > 7 ? (
                    <MySlider
                      slidesToShow={7}
                      slidesToScroll={3}
                      slidesToShow400={3}
                      slidesToScroll400={3}
                    >
                      {serieCast?.map((cast) => {
                        return <SerieCast key={cast.id} cast={cast} />;
                      })}
                    </MySlider>
                  ) : (
                    <div className="flex flex-wrap justify-center gap-5 md:justify-start">
                      {serieCast?.map((cast) => {
                        return <SerieCast key={cast.id} cast={cast} />;
                      })}
                    </div>
                  )}
                </ul>
              </div>
            )}

            {serieImage?.length && (
              <div>
                <h4 className="mt-10 text-xl font-medium uppercase tracking-wider text-sky-200/50">
                  Images
                </h4>
                <ul className="mt-2">
                  <MySlider>
                    {serieImage?.map((image) => {
                      return <SerieImage key={image.id} image={image} />;
                    })}
                  </MySlider>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div>
          {serieVideo?.length && (
            <div>
              <h4 className="mt-10 text-xl font-medium uppercase tracking-wider text-sky-200/50">
                Fragman
              </h4>
              <ul className="mt-2 flex flex-col items-center justify-center gap-5">
                {serieVideo?.length > 0 ? (
                  serieVideo.slice(0, 1).map((video) => {
                    return <SerieVideo key={video.id} video={video} />;
                  })
                ) : (
                  <NotFound type="video" />
                )}
              </ul>
            </div>
          )}

          {seasons?.length && (
            <div>
              <h4 className="mt-10 text-xl font-medium uppercase tracking-wider text-sky-200/50">
                Seasons
              </h4>
              <ul className="mt-5 px-2 text-center">
                {seasons.length > 7 ? (
                  <MySlider
                    slidesToShow={7}
                    slidesToScroll={4}
                    slidesToShow400={3}
                    slidesToScroll400={3}
                  >
                    {seasons?.map((seasons) => {
                      return (
                        <Seasons seasons={seasons} key={seasons} id={id} />
                      );
                    })}
                  </MySlider>
                ) : (
                  <div className="flex flex-wrap gap-5">
                    {seasons?.map((seasons) => {
                      return (
                        <Seasons seasons={seasons} key={seasons} id={id} />
                      );
                    })}
                  </div>
                )}
              </ul>
            </div>
          )}

          <div className="p-2">
            {windowInput === id && <SeasonWindow id={id} data={episodes} />}
          </div>

          {serieSimilar?.length && (
            <div>
              <h4 className="mt-10 text-xl font-medium uppercase tracking-wider text-sky-200/50">
                Similar Series
              </h4>
              <ul className="mt-2 p-5">
                <SerieSimilar serie={serieSimilar} />
              </ul>
            </div>
          )}

          {genres?.map((genre) => {
            return <SerieCategory key={genre.id} genre={genre} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SerieDetailSection;
