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
import HeaderV2 from "../ui/HeaderV2";

function Movie() {
  const {
    movieInput,
    movieGenre,
    movieYear,
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
          <div className="md:w-3/12">
            <MovieSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
