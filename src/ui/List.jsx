import React from "react";
import UpcomingCarousel from "./Carousel";
import ListElement from "./ListElement";
import { useMovie } from "../contexts/movieContext";
function List({ type, movie, serie }) {
  const { filterInput } = useMovie();
  //==================================================================
  //==================================================================

  if (type === "movie/upcoming") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center  gap-3 ">
        {movie?.slice(0, 7)?.map((movie) => {
          return <UpcomingCarousel key={movie.id} movie={movie} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "movie/populer") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-3">
        {movie?.slice(0, 7)?.map((movie) => {
          return <UpcomingCarousel movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "movie/trend") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-3">
        {movie?.slice(0, 7)?.map((movie) => {
          return <UpcomingCarousel movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "movie/populer/all") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "movie/upcoming/all") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "movie/trending/all") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }

  //====================================================================
  if (type === "movie/discover") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "movie/genre") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "movie/search") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "movie/vote") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "movie/year") {
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
  //====================================================================
  if (type === "serie/trend") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-3">
        {serie?.slice(0, 7)?.map((movie) => {
          return <UpcomingCarousel movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "serie/populer") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-3">
        {serie?.slice(0, 7)?.map((movie) => {
          return <UpcomingCarousel movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "serie/trending/all") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "serie/populer/all") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
        })}
      </ul>
    );
  }
  //====================================================================

  if (type === "serie/discover") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "serie/search") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "serie/genre") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
        })}
      </ul>
    );
  }

  if (type === "serie/vote") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "serie/year") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
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
  //====================================================================
  //====================================================================
  if (type === "people/moviecredits") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "favorites") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie
          ?.filter((item) =>
            filterInput === "movie"
              ? item.title
              : filterInput === "serie"
              ? item.name
              : filterInput === "all"
              ? item
              : item,
          )
          ?.map((movie) => {
            return <ListElement movie={movie} key={movie.id} type={type} />;
          })}
      </ul>
    );
  }
  if (type === "favorites/note") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center  ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
}

export default List;
