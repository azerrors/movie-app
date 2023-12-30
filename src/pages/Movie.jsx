import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  getDiscoveredMovies,
  getMoviesByGenre,
  getMoviesByVoteAverage,
  getMoviesByYear,
  getSearchedMovies,
} from "../services/movieApi";

import { useMovie } from "../contexts/movieContext";
import MovieDiscoverSection from "../features/movie/MovieDiscoverSection";
import MovieGenreSection from "../features/movie/MovieGenreSection";
import MovieInputSection from "../features/movie/MovieInputSection";
import MovieSidebar from "../features/movie/MovieSiderbar";
import MovieVoteSection from "../features/movie/MovieVoteSection";
import MovieYearSection from "../features/movie/MovieYearSection";
import UpContent from "../features/movie/UpContent";
import { IoFilterSharp } from "react-icons/io5";

function Movie() {
  const {
    movieInput,
    movieGenre,
    movieYear,
    openMovieCategory,
    movieGenreName,

    dispatch,
    movieVote,
    discoverPage,
    genrePage,
  } = useMovie();

  const { data: discoverMovie, isLoading: discoverMovieLoading } = useQuery({
    queryKey: ["discovermovie", discoverPage],
    queryFn: () => getDiscoveredMovies(discoverPage),
  });

  const { data: searchMovie, isLoading: searchedMovieLoading } = useQuery({
    queryKey: ["searchmovie", movieInput],
    queryFn: () => getSearchedMovies(movieInput),
  });

  const { data: movieWithGenre, isLoading: genreLoading } = useQuery({
    queryKey: ["movieWithGenre", movieGenre, genrePage],
    queryFn: () => getMoviesByGenre(movieGenre, genrePage),
  });
  const { data: movieWithYear, isLoading: yearLoading } = useQuery({
    queryKey: ["movieWithYear", movieYear],
    queryFn: () => getMoviesByYear(movieYear),
  });

  const { data: movieWithVoteAverage, isLoading: voteAverageLoading } =
    useQuery({
      queryKey: ["movieWithVoteAverage", movieVote],
      queryFn: () => getMoviesByVoteAverage(movieVote),
    });

  return (
    <div>
      <div>
        <UpContent />
        <div className="flex justify-end p-2">
          <IoFilterSharp
            className="text-3xl text-sky-200/20 md:hidden"
            onClick={() => dispatch({ type: "openMovieCategory" })}
          />
        </div>
        <div>
          <div className="flex items-center gap-4 px-4 text-sky-200/60 ">
            <div>
              {movieGenreName && !movieInput && (
                <h3 className="text-sm uppercase  md:mr-36">
                  <span className="text-red-200/50">{movieGenreName}</span>{" "}
                  Movies
                </h3>
              )}
              {!movieGenreName && !movieVote && !movieInput && movieYear && (
                <h3 className="text-sm uppercase  md:mr-36">
                  <span className="text-red-200/50">{movieYear}</span> Movies
                </h3>
              )}
              {!movieGenreName && movieVote && !movieInput && !movieYear && (
                <h3 className="text-sm uppercase  md:mr-36">
                  <span className="text-red-200/50">{movieVote}</span>
                  ⭐Movies
                </h3>
              )}
            </div>
            <div className="w-full rounded-xl border-b-2 border-sky-200/50  py-1"></div>
          </div>
        </div>
        <div className="flex h-full flex-col-reverse gap-5 bg-secondary p-3 shadow-lg  md:flex-row">
          <div className=" md:w-9/12">
            <MovieDiscoverSection
              discoverMovie={discoverMovie}
              discoverMovieLoading={discoverMovieLoading}
            />
            <MovieInputSection
              searchMovie={searchMovie}
              searchedMovieLoading={searchedMovieLoading}
            />

            <MovieGenreSection
              movieWithGenre={movieWithGenre}
              genreLoading={genreLoading}
            />
            <MovieYearSection
              movieWithYear={movieWithYear}
              yearLoading={yearLoading}
            />
            <MovieVoteSection
              movieWithVoteAverage={movieWithVoteAverage}
              voteAverageLoading={voteAverageLoading}
            />
          </div>
          <div
            className={`md:w-3/12 ${
              openMovieCategory ? " top-0 animate-moveInTop bg-secondary" : ""
            }`}
          >
            {!openMovieCategory ? (
              <span className="hidden md:inline-block">
                <MovieSidebar />
              </span>
            ) : (
              <span>
                <MovieSidebar />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
