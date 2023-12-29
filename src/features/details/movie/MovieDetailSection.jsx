import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../../services/detailsApi";
import {
  getMovieCast,
  getMovieImage,
  getMovieSimilar,
  getMovieVideo,
} from "../../../services/movieApi";
import Loader from "../../../ui/Loader";
import NotFound from "../../../ui/NotFound";
import MovieCast from "./MovieCast";
import MovieGenre from "./MovieGenre";
import MovieImage from "./MovieImage";
import MovieSimilar from "./MovieSimilar";
import MovieVideoImage from "./MovieVideoImage";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getBelongToCollection } from "../../../services/OtherApi";
import List from "../../../ui/List";
import MySlider from "../../../ui/MySlider";
import MovieCategory from "./MovieCategory";
import MovieCompanies from "./MovieCompanies";
import MovieCountries from "./MovieCountries";
import MovieSpokenLanguages from "./MovieSpokenLanguages,";
import { CiCalendarDate, CiTimer } from "react-icons/ci";
import { GiBeveledStar } from "react-icons/gi";
const BASE_IMAGE = "https://image.tmdb.org/t/p/w500";

function MovieDetailSection({ movieID }) {
  const { data: movieDetails, isLoading: movieDetailsLoading } = useQuery({
    queryKey: ["movieid", movieID],
    queryFn: () => getMovieDetails(movieID),
  });

  const { data: movieCast } = useQuery({
    queryKey: ["movieCast", movieID],
    queryFn: () => getMovieCast(movieID),
  });

  const { data: movieVideo } = useQuery({
    queryKey: ["movieVideo", movieID],
    queryFn: () => getMovieVideo(movieID),
  });

  const { data: movieImage } = useQuery({
    queryKey: ["movieImage", movieID],
    queryFn: () => getMovieImage(movieID),
  });
  const { data: movieSimilar } = useQuery({
    queryKey: ["movieSimilar", movieID],
    queryFn: () => getMovieSimilar(movieID),
  });

  const {
    backdrop_path,
    original_language,
    poster_path,
    belongs_to_collection,
    genres,
    release_date,
    title,
    vote_average,
    overview,
    original_title,
    production_companies,
    production_countries,
    spoken_languages,
    runtime,
  } = movieDetails ? movieDetails : [];

  const { data: collection } = useQuery({
    queryKey: ["belongto", belongs_to_collection?.id],
    queryFn: () => getBelongToCollection(belongs_to_collection?.id),
  });

  const { name: collectinName, parts: collectionParts } = collection
    ? collection
    : {};

  console.log(belongs_to_collection);

  if (movieDetailsLoading) {
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
      <div>
        <img
          src={`${BASE_IMAGE}${backdrop_path}`}
          className="bg-contain  blur-sm  transition-all duration-200 md:h-[29rem] md:w-full"
          alt=""
        />
      </div>
      <div className="-translate-y-16 animate-moveInBottom rounded-2xl   bg-secondary p-5  shadow-lg transition-all  duration-500">
        <div className="flex   flex-col  gap-5   md:flex-row">
          <div className="md:hidden">
            <h6 className="text-sm uppercase tracking-widest text-stone-200 md:text-xl">
              {title}({original_language})
            </h6>
            <h6 className="text-sm uppercase tracking-widest text-stone-200/50 md:text-xl">
              Orginal title: {original_title}
            </h6>
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
                    {release_date}
                  </span>
                </div>

                <div>
                  <h6 className="flex justify-center pb-1 text-center text-3xl lowercase">
                    <CiTimer />
                  </h6>
                  <span className="text-center text-stone-200">{runtime}m</span>
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
                      return <MovieGenre key={genre.id} genre={genre} />;
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
                      <MovieCompanies key={company.name} company={company} />
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
                      <MovieCountries key={country.name} country={country} />
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
                      <MovieSpokenLanguages
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
                {title}({original_language})
              </h6>
              <h6 className="text-xl uppercase tracking-widest text-stone-200/50">
                Orginal title: {original_title}
              </h6>
            </div>

            <div>
              <h4 className="mt-10 text-lg font-medium uppercase tracking-wider text-sky-200/50 md:text-xl">
                Overview
              </h4>
              <span className="md:text-md text-sm lowercase text-stone-200/70">
                {overview}
              </span>
            </div>

            {movieCast?.length && (
              <div>
                <h4 className="mt-10 text-lg font-medium uppercase tracking-wider text-sky-200/50 md:text-xl">
                  Cast
                </h4>
                <ul className="mt-2 p-5">
                  <MySlider
                    slidesToShow={7}
                    slidesToScroll={4}
                    slidesToShow400={3}
                    slidesToScroll400={3}
                  >
                    {movieCast?.map((cast) => {
                      return <MovieCast key={cast.id} cast={cast} />;
                    })}
                  </MySlider>
                </ul>
              </div>
            )}

            {movieImage?.length && (
              <div>
                <h4 className="mt-10 text-lg font-medium  uppercase tracking-wider text-sky-200/50 md:text-xl">
                  Images
                </h4>
                <ul className="mt-2">
                  <MySlider
                    slidesToShow={1}
                    slidesToScroll={1}
                    slidesToShow400={1}
                    autoplay={true}
                    autoplaySpeed={3000}
                    pauseOnHover={true}
                    arrows={false}
                    slidesToScroll400={1}
                  >
                    {movieImage?.map((image) => {
                      return <MovieImage key={image.id} image={image} />;
                    })}
                  </MySlider>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div>
          {movieVideo?.length && (
            <div>
              <h4 className="mt-10 text-lg font-medium uppercase tracking-wider text-sky-200/50 md:text-xl">
                Tutorial
              </h4>
              <ul className="mt-2 flex flex-col items-center justify-center gap-5">
                {movieVideo?.length > 0 ? (
                  movieVideo.slice(0, 1).map((video) => {
                    return <MovieVideoImage key={video.id} video={video} />;
                  })
                ) : (
                  <NotFound type="video" />
                )}
              </ul>
            </div>
          )}

          {belongs_to_collection && (
            <div>
              <h4 className="mt-10 text-lg font-medium uppercase tracking-wider text-sky-200/50 md:text-xl">
                {collectinName}
              </h4>
              <ul className="mt-2 p-5 text-stone-200 ">
                <List type="list5" data={collectionParts} />
              </ul>
            </div>
          )}

          {movieSimilar?.length && (
            <div>
              <h4 className="mt-10 text-lg font-medium uppercase tracking-wider text-sky-200/50 md:text-xl">
                Similar Movies
              </h4>
              <ul className="mt-2 p-5">
                <MovieSimilar movie={movieSimilar} />
              </ul>
            </div>
          )}

          {genres?.map((genre) => {
            return <MovieCategory key={genre.id} genre={genre} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailSection;
