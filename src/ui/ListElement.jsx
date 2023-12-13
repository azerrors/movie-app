import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useMovie } from "../contexts/movieContext";
import { toast } from "react-toastify";

const BASE_IMAGE = "https://image.tmdb.org/t/p/w500";

function ListElement({ type, movie, serie }) {
  //====================================================================
  //====================================================================
  const { favorites, dispatch, showNote } = useMovie();
  if (type === "movie/populer/all") {
    const { release_date, title, vote_average, id, poster_path } = movie;
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
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
              alt=""
            />
          )}
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

  if (type === "movie/upcoming/all") {
    const { release_date, title, vote_average, id, poster_path } = movie;
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
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
              alt=""
            />
          )}
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

  if (type === "movie/trending/all") {
    const { release_date, title, vote_average, id, poster_path } = movie;
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
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
              alt=""
            />
          )}
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
  //====================================================================
  if (type === "movie/discover") {
    const { title, release_date, vote_average, id, poster_path } = movie;
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
      <div className="group mt-5 w-32  rounded-lg transition-all duration-300   md:h-96 md:w-48">
        <Link to={`/${id}?movieId=${id}`}>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
              alt=""
            />
          )}
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

  if (type === "movie/search") {
    const { title, vote_average, release_date, id, poster_path } = movie;
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
      <div className="group mt-5 w-32  rounded-lg transition-all duration-300   md:h-96 md:w-48">
        <Link to={`/${id}?movieId=${id}`}>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
              alt=""
            />
          )}
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

  if (type === "movie/genre") {
    const { title, vote_average, release_date, id, poster_path } = movie;
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
      <div className="group mt-5 w-32  rounded-lg transition-all duration-300   md:h-96 md:w-48">
        <Link to={`/${id}?movieId=${id}`}>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
              alt=""
            />
          )}
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

  if (type === "movie/year") {
    const { title, vote_average, release_date, id, poster_path } = movie;
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
      <div className="group mt-5 w-32  rounded-lg transition-all duration-300   md:h-96 md:w-48">
        <Link to={`/${id}?movieId=${id}`}>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
              alt=""
            />
          )}
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

  if (type === "movie/vote") {
    const { title, vote_average, release_date, id, poster_path } = movie;
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
      <div className="group mt-5 w-32  rounded-lg transition-all duration-300   md:h-96 md:w-48">
        <Link to={`/${id}?movieId=${id}`}>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
              alt=""
            />
          )}
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

  if (type === "movie/detail/similar") {
    const { title, vote_average, release_date, id, poster_path } = movie;
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
      <div className="group mt-5 w-32  rounded-lg transition-all duration-300   md:h-96 md:w-48">
        <Link to={`/${id}?movieId=${id}`}>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
              alt=""
            />
          )}
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
  //====================================================================
  //====================================================================
  if (type === "serie/trending/all") {
    const { name, vote_average, first_air_date, id, poster_path } = serie;
    const isShow = favorites.some((fav) => fav.id === id);

    const addFav = () => {
      dispatch({ type: "favorites/add", payload: serie });
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
        <Link to={`/${id}?serieId=${id}`}>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
              alt=""
            />
          )}
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

  if (type === "serie/populer/all") {
    const { name, vote_average, first_air_date, id, poster_path } = serie;
    const isShow = favorites.some((fav) => fav.id === id);

    const addFav = () => {
      dispatch({ type: "favorites/add", payload: serie });
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
        <Link to={`/${id}?serieId=${id}`}>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
              alt=""
            />
          )}
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

  if (type === "serie/detail/similar") {
    const { name, vote_average, first_air_date, id, poster_path } = movie;
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
      <div className="group group mt-5 w-32   rounded-lg transition-all duration-300   md:h-96 md:w-48">
        <Link to={`/${id}?serieId=${id}`}>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
              alt=""
            />
          )}
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

  if (type === "serie/discover") {
    const { name, vote_average, first_air_date, id, poster_path } = serie;
    const isShow = favorites.some((fav) => fav.id === id);

    const addFav = () => {
      dispatch({ type: "favorites/add", payload: serie });
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
      <div className="group group mt-5 w-32   rounded-lg transition-all duration-300   md:h-96 md:w-48">
        <Link to={`/${id}?serieId=${id}`}>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
              alt=""
            />
          )}
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

  if (type === "serie/year") {
    const { name, vote_average, first_air_date, id, poster_path } = serie;
    const isShow = favorites.some((fav) => fav.id === id);

    const addFav = () => {
      dispatch({ type: "favorites/add", payload: serie });
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
      <div className="group group mt-5 w-32   rounded-lg transition-all duration-300   md:h-96 md:w-48">
        <Link to={`/${id}?serieId=${id}`}>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
              alt=""
            />
          )}
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
  if (type === "serie/genre") {
    const { name, vote_average, first_air_date, id, poster_path } = serie;
    const isShow = favorites.some((fav) => fav.id === id);

    const addFav = () => {
      dispatch({ type: "favorites/add", payload: serie });
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
      <div className="group group mt-5 w-32   rounded-lg transition-all duration-300   md:h-96 md:w-48">
        <Link to={`/${id}?serieId=${id}`}>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
              alt=""
            />
          )}
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

  if (type === "serie/vote") {
    const { name, vote_average, first_air_date, id, poster_path } = serie;
    const isShow = favorites.some((fav) => fav.id === id);

    const addFav = () => {
      dispatch({ type: "favorites/add", payload: serie });
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
      <div className="group group mt-5 w-32   rounded-lg transition-all duration-300   md:h-96 md:w-48">
        <Link to={`/${id}?serieId=${id}`}>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
              alt=""
            />
          )}
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

  if (type === "serie/search") {
    const { name, vote_average, first_air_date, id, poster_path } = serie;
    const isShow = favorites.some((fav) => fav.id === id);

    const addFav = () => {
      dispatch({ type: "favorites/add", payload: serie });
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
      <div className="group group mt-5 w-32   rounded-lg transition-all duration-300   md:h-96 md:w-48">
        <Link to={`/${id}?serieId=${id}`}>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
              alt=""
            />
          )}
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
  //====================================================================
  //====================================================================
  if (type === "people/moviecredits") {
    const { title, vote_average, release_date, id, poster_path } = movie;
    return (
      <Link
        to={`/${id}?movieId=${id}`}
        className="group mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 md:h-96 md:w-48"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {title}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average.toFixed(1)}⭐
            </span>
          </div>
          <div className="md:text-md mr-2 mt-2 flex justify-end text-sm md:mt-5">
            <span className="truncate border bg-gray-800 text-stone-200">
              {release_date}
            </span>
          </div>
        </div>
      </Link>
    );
  }
  // =================================================================
  if (type === "favorites") {
    const {
      release_date,
      title,
      name,
      first_air_date,
      vote_average,
      id,
      poster_path,
    } = movie;
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
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-72"
              alt=""
            />
          )}
        </Link>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {title ? title : name}
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
              {release_date ? release_date : first_air_date}
            </span>
          </div>
        </div>
      </div>
    );
  }
  if (type === "favorites/note") {
    const {
      release_date,
      title,
      name,
      first_air_date,
      vote_average,
      id,
      poster_path,
    } = movie;

    return (
      <div className="group mt-5 w-32  rounded-lg transition-all duration-300   md:h-48 md:w-48">
        <div>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-24 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-48 md:w-32"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-24 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-48 md:w-32"
              alt=""
            />
          )}
        </div>
      </div>
    );
  }
}

export default ListElement;
