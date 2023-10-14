import React from "react";
import UpcomingCarousel from "./Carousel";
import ListElement from "./ListElement";

function List({
  type,
  upcomingMovie,
  populerMovies,
  trendingMovies,
  trendingTv,
  populerTv,
  allTrendingSeries,
  allPopulerMovies,
  allUpcomingMovies,
  allTrendingMovies,
  allPopulerSeries,
  movie,
  serie,
}) {
  //================================================
  if (type === "upcoming") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-3 ">
        {upcomingMovie?.slice(0, 7)?.map((movie) => {
          return <UpcomingCarousel key={movie.id} movie={movie} type={type} />;
        })}
      </ul>
    );
  }
  //================================================
  if (type === "populer") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-3">
        {populerMovies?.slice(0, 7)?.map((movie) => {
          return <UpcomingCarousel movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  //================================================
  if (type === "trend") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-3">
        {trendingMovies?.slice(0, 7)?.map((movie) => {
          return <UpcomingCarousel movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  //================================================
  if (type === "trend/tv") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-3">
        {trendingTv?.slice(0, 7)?.map((movie) => {
          return <UpcomingCarousel movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  //================================================
  if (type === "populer/tv") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-3">
        {populerTv?.slice(0, 7)?.map((movie) => {
          return <UpcomingCarousel movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  //================================================
  if (type === "populer/all") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {allPopulerMovies?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  //================================================
  if (type === "upcoming/all") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {allUpcomingMovies?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  //================================================
  if (type === "trending/all") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {allTrendingMovies?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "trending/series/all") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {allTrendingSeries?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "populer/series/all") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {allPopulerSeries?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "discover/movie") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "discover/serie") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "search/movie") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "search/serie") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "genre/serie") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "people/moviecredits") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }

  if (type === "year/movie") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }

  if (type === "genre/movie") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }

  if (type === "vote/serie") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
        })}
      </ul>
    );
  }

  if (type === "year/serie") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
        })}
      </ul>
    );
  }

  if (type === "vote/movie") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "movie/detail/similar") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "serie/detail/similar") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
}

export default List;
