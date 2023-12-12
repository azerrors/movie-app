import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { useMovie } from "../contexts/movieContext";
import { toast } from "react-toastify";

const BASE_IMAGE = "https://image.tmdb.org/t/p/w500";

export default function Carousels({ movie, type }) {
  const { dispatch, favorites } = useMovie();

  if (type === "movie/upcoming") {
    const { release_date, id, title, vote_average, poster_path } = movie;
    const isShow = favorites.some((fav) => fav.id === id);

    const addFav = () => {
      dispatch({ type: "favorites/add", payload: movie });
      toast.success(`--${title}-- added to favorite list`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };
    const deleteFav = () => {
      dispatch({ type: "favorites/delete", payload: id });
      toast.error(`--${title}-- deleted from favorite list`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };
    return (
      <div className="group mt-5 w-32  rounded-lg transition-all duration-300   md:h-96 md:w-56">
        <Link to={`/${id}?movieId=${id}`}>
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 cursor-pointer rounded-lg transition-all duration-300 group-hover:-translate-y-2 md:h-72 md:w-72 "
          />
        </Link>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {title}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average.toFixed(1)}⭐
            </span>
          </div>
          <div className="mr-2 mt-2 flex items-center justify-between md:mt-5">
            <span>
              {!isShow ? (
                <FaRegHeart
                  onClick={addFav}
                  className="ml-1 cursor-pointer text-xl text-stone-200 transition-all duration-300 hover:-translate-y-2"
                />
              ) : (
                <FaHeart
                  onClick={deleteFav}
                  className="ml-1 cursor-pointer text-xl text-stone-200 transition-all duration-300 hover:-translate-y-2"
                />
              )}
            </span>
            <span className="md:md border bg-gray-800 text-sm text-stone-200">
              {release_date}
            </span>
          </div>
        </div>
      </div>
    );
  }
  if (type === "movie/populer") {
    const { release_date, title, vote_average, poster_path, id } = movie;
    const isShow = favorites.some((fav) => fav.id === id);

    const addFav = () => {
      dispatch({ type: "favorites/add", payload: movie });
      toast.success(`--${title}-- added to favorite list`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };
    const deleteFav = () => {
      dispatch({ type: "favorites/delete", payload: id });
      toast.error(`--${title}-- deleted from favorite list`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };
    return (
      <div className="group group mt-5 w-32   rounded-lg transition-all duration-300   md:h-96 md:w-56">
        <Link to={`/${id}?movieId=${id}`}>
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 cursor-pointer rounded-lg transition-all duration-300 group-hover:-translate-y-2 md:h-72 md:w-72 "
          />
        </Link>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {title}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average.toFixed(1)}⭐
            </span>
          </div>
          <div className="mr-2 mt-2 flex items-center justify-between md:mt-5">
            <span>
              {!isShow ? (
                <FaRegHeart
                  onClick={addFav}
                  className="ml-1 cursor-pointer text-xl text-stone-200 transition-all duration-300 hover:-translate-y-2"
                />
              ) : (
                <FaHeart
                  onClick={deleteFav}
                  className="ml-1 cursor-pointer text-xl text-stone-200 transition-all duration-300 hover:-translate-y-2"
                />
              )}
            </span>
            <span className="md:md border bg-gray-800 text-sm text-stone-200">
              {release_date}
            </span>
          </div>
        </div>
      </div>
    );
  }
  if (type === "movie/trend") {
    const { release_date, title, vote_average, poster_path, id } = movie;
    const isShow = favorites.some((fav) => fav.id === id);

    const addFav = () => {
      dispatch({ type: "favorites/add", payload: movie });
      toast.success(`--${title}-- added to favorite list`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };
    const deleteFav = () => {
      dispatch({ type: "favorites/delete", payload: id });
      toast.error(`--${title}-- deleted from favorite list`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };
    return (
      <div className="group group mt-5 w-32   rounded-lg transition-all duration-300   md:h-96 md:w-56">
        <Link to={`/${id}?movieId=${id}`}>
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 cursor-pointer rounded-lg transition-all duration-300 group-hover:-translate-y-2 md:h-72 md:w-72 "
          />
        </Link>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {title}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average.toFixed(1)}⭐
            </span>
          </div>
          <div className="mr-2 mt-2 flex items-center justify-between md:mt-5">
            <span>
              {!isShow ? (
                <FaRegHeart
                  onClick={addFav}
                  className="ml-1 cursor-pointer text-xl text-stone-200 transition-all duration-300 hover:-translate-y-2"
                />
              ) : (
                <FaHeart
                  onClick={deleteFav}
                  className="ml-1 cursor-pointer text-xl text-stone-200 transition-all duration-300 hover:-translate-y-2"
                />
              )}
            </span>
            <span className="md:md border bg-gray-800 text-sm text-stone-200">
              {release_date}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "serie/trend") {
    const { name, vote_average, first_air_date, poster_path, id } = movie;
    const isShow = favorites.some((fav) => fav.id === id);

    const addFav = () => {
      dispatch({ type: "favorites/add", payload: movie });
      toast.success(`--${name}-- added to favorite list`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };
    const deleteFav = () => {
      dispatch({ type: "favorites/delete", payload: id });
      toast.error(`--${name}-- deleted from favorite list`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };
    return (
      <div className="group group mt-5 w-32   rounded-lg transition-all duration-300   md:h-96 md:w-56">
        <Link to={`/${id}?movieId=${id}`}>
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 cursor-pointer rounded-lg transition-all duration-300 group-hover:-translate-y-2 md:h-72 md:w-72 "
          />
        </Link>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {name}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average.toFixed(1)}⭐
            </span>
          </div>
          <div className="mr-2 mt-2 flex items-center justify-between md:mt-5">
            <span>
              {!isShow ? (
                <FaRegHeart
                  onClick={addFav}
                  className="ml-1 cursor-pointer text-xl text-stone-200 transition-all duration-300 hover:-translate-y-2"
                />
              ) : (
                <FaHeart
                  onClick={deleteFav}
                  className="ml-1 cursor-pointer text-xl text-stone-200 transition-all duration-300 hover:-translate-y-2"
                />
              )}
            </span>
            <span className="md:md border bg-gray-800 text-sm text-stone-200">
              {first_air_date && first_air_date}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "serie/populer") {
    const { name, vote_average, first_air_date, poster_path, id } = movie;
    const isShow = favorites.some((fav) => fav.id === id);

    const addFav = () => {
      dispatch({ type: "favorites/add", payload: movie });
      toast.success(`--${name}-- added to favorite list`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };
    const deleteFav = () => {
      dispatch({ type: "favorites/delete", payload: id });
      toast.error(`--${name}-- deleted from favorite list`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };
    return (
      <div className="group group mt-5 w-32   rounded-lg transition-all duration-300   md:h-96 md:w-56">
        <Link to={`/${id}?movieId=${id}`}>
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 cursor-pointer rounded-lg transition-all duration-300 group-hover:-translate-y-2 md:h-72 md:w-72 "
          />
        </Link>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {name}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average.toFixed(1)}⭐
            </span>
          </div>
          <div className="mr-2 mt-2 flex items-center justify-between md:mt-5">
            <span>
              {!isShow ? (
                <FaRegHeart
                  onClick={addFav}
                  className="ml-1 cursor-pointer text-xl text-stone-200 transition-all duration-300 hover:-translate-y-2"
                />
              ) : (
                <FaHeart
                  onClick={deleteFav}
                  className="ml-1 cursor-pointer text-xl text-stone-200 transition-all duration-300 hover:-translate-y-2"
                />
              )}
            </span>
            <span className="md:md border bg-gray-800 text-sm text-stone-200">
              {first_air_date && first_air_date}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
