import React from "react";
import { Link } from "react-router-dom";
const BASE_IMAGE = "https://image.tmdb.org/t/p/w500";

export default function Carousels({ movie, type }) {
  if (type === "movie/upcoming") {
    const { release_date, id, title, vote_average, poster_path } = movie;

    return (
      <Link
        to={`/${id}?movieId=${id}`}
        className="group group mt-5 w-32  cursor-pointer rounded-lg transition-all duration-300   md:h-96 md:w-56"
      >
        <img
          src={`${BASE_IMAGE}${poster_path}`}
          alt=""
          className="w-32 rounded-lg transition-all duration-300 group-hover:-translate-y-2 md:h-72 md:w-72 "
        />
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {title}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average.toFixed(1)}⭐
            </span>
          </div>
          <div className="mr-2 mt-2 flex justify-end md:mt-5">
            <span className="md:md border bg-gray-800 text-sm text-stone-200">
              {release_date}
            </span>
          </div>
        </div>
      </Link>
    );
  }
  if (type === "movie/populer") {
    const { release_date, title, vote_average, poster_path, id } = movie;
    return (
      <Link
        to={`/${id}?movieId=${id}`}
        className="group mt-5 w-32  cursor-pointer rounded-lg transition-all duration-300  md:h-96 md:w-56"
      >
        <img
          src={`${BASE_IMAGE}${poster_path}`}
          alt=""
          className="w transition-all-32 rounded-lg duration-300 group-hover:-translate-y-2 md:h-72 md:w-72 "
        />
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {title}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average.toFixed(1)}⭐
            </span>
          </div>
          <div className="mr-2 mt-2 flex justify-end md:mt-5">
            <span className="md:md border bg-gray-800 text-sm text-stone-200">
              {release_date}
            </span>
          </div>
        </div>
      </Link>
    );
  }
  if (type === "movie/trend") {
    const { release_date, title, vote_average, poster_path, id } = movie;
    return (
      <Link
        to={`/${id}?movieId=${id}`}
        className="group mt-5 w-32  cursor-pointer rounded-lg transition-all duration-300  md:h-96 md:w-56"
      >
        <img
          src={`${BASE_IMAGE}${poster_path}`}
          alt=""
          className="w-32 rounded-lg transition-all duration-300 group-hover:-translate-y-2 md:h-72 md:w-72 "
        />
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {title}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average.toFixed(1)}⭐
            </span>
          </div>
          <div className="mr-2 mt-2 flex justify-end md:mt-5">
            <span className="md:md border bg-gray-800 text-sm text-stone-200">
              {release_date}
            </span>
          </div>
        </div>
      </Link>
    );
  }
  if (type === "serie/trend") {
    const { name, vote_average, poster_path, id } = movie;
    return (
      <Link
        to={`/${id}?serieId=${id}`}
        className="group mt-5 w-32  cursor-pointer rounded-lg transition-all duration-300  md:h-96 md:w-56"
      >
        <img
          src={`${BASE_IMAGE}${poster_path}`}
          alt=""
          className="w-32 rounded-lg transition-all duration-300 group-hover:-translate-y-2 md:h-72 md:w-72 "
        />
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {name}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average.toFixed(1)}⭐
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (type === "serie/populer") {
    const { name, vote_average, poster_path, id } = movie;
    return (
      <Link
        to={`/${id}?serieId=${id}`}
        className="group mt-5 w-32  cursor-pointer rounded-lg transition-all duration-300  md:h-96 md:w-56"
      >
        <img
          src={`${BASE_IMAGE}${poster_path}`}
          alt=""
          className="w-32 rounded-lg transition-all duration-300 group-hover:-translate-y-2 md:h-72 md:w-72 "
        />
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {name}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average.toFixed(1)}⭐
            </span>
          </div>
        </div>
      </Link>
    );
  }
}
