import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useMovie } from "../contexts/movieContext";
import { toast } from "react-toastify";
import Button from "./Button";

const BASE_IMAGE = "https://image.tmdb.org/t/p/w500";

function ListElement({ type, movie, serie, data }) {
  const { favorites, dispatch } = useMovie();

  //====================================================================
  //====================================================================

  if (type === "list10") {
    const {
      title,
      vote_average,
      release_date,
      id,
      poster_path,
      name,
      first_air_date,
    } = data;

    return (
      <Link
        onClick={() => dispatch({ type: "remove/mainInput" })}
        to={`/${id}?${title ? "movieId" : "serieId"}=${id}`}
        className="flex gap-2 bg-sky-900/10 p-4  "
      >
        <div>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-32 md:w-32"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-32 md:w-32"
              alt=""
            />
          )}
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div className="w-48  text-sm text-stone-200">
            {title ? title : name}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-stone-200">
              {vote_average.toFixed(1)}⭐
            </span>
            <span className="text-xs text-stone-200">
              {release_date ? release_date : first_air_date}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (type === "list9") {
    const {
      title,
      vote_average,
      release_date,
      id,
      poster_path,
      name,
      first_air_date,
    } = data;

    return (
      <Link
        to={`/${id}?${title ? "movieId" : "serieId"}=${id}`}
        className="flex gap-2 bg-sky-900/10  "
      >
        <div>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="h-12 w-12 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-12 md:w-12"
            />
          ) : (
            <img
              src="/public/imagenotfound.jpg"
              className="w-8  rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-12 md:w-12"
              alt=""
            />
          )}
        </div>
        <div className="flex flex-col justify-end gap-2">
          <div className="w-48  truncate text-xs text-stone-200">
            {title ? title : name}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-stone-200">
              {vote_average.toFixed(1)}⭐
            </span>
            <span className="text-xs text-stone-200">
              {release_date ? release_date : first_air_date}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (type === "list8") {
    const {
      title,
      vote_average,
      id,
      poster_path,
      name,
      backdrop_path,
    } = data;

    return (
      <Link
        to={`/${id}?${title ? "movieId" : "serieId"}=${id}`}
        className="relative flex gap-2 md:h-24 h-20 "
      >
        <div
          className="w-34 group relative h-72 w-full rounded-lg bg-cover  bg-top transition-all  duration-300"
          style={
            ({
              backgroundImage:
                "linear-gradient(to bottom,transparent,rgba(0,0,0,.6))",
            },
            poster_path
              ? { backgroundImage: `url(${BASE_IMAGE}${poster_path}) ` }
              : { backgroundImage: `url("/imagenotfound.jpg")` })
          }
        >
          <div className=" h-screen bg-gradient-to-b from-black/80 to-black"></div>
        </div>

        <div className="absolute flex left-5 top-5 gap-5">
          <div>
            {poster_path ? (
              <img
                src={`${BASE_IMAGE}${poster_path}`}
                alt=""
                className="h-12 w-12 rounded-lg     transition-all duration-300 group-hover:-translate-y-2     md:h-12 md:w-12"
              />
            ) : (
              <img
                src="/public/imagenotfound.jpg"
                className="h-12 w-12 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-12 md:w-12"
                alt=""
              />
            )}
          </div>
          <div className="flex flex-col justify-end">
            <div className="w-48 truncate text-xs text-stone-200">
              {title ? title : name}
            </div>
            <div className="flex">
              <span className="text-xs text-stone-200">
                {vote_average.toFixed(1)}⭐
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (type === "list7") {
    const {
      title,
      vote_average,
      release_date,
      id,
      poster_path,
      name,
      backdrop_path,
      overview,
    } = data;

    const dateObject = new Date(release_date);
    const year = dateObject.getFullYear();

    return (
      <div className="relative rounded-2xl">
        <div
          className="blur-xs group h-56 w-full  rounded-xl bg-cover bg-center transition-all duration-300 hover:scale-[1.01] md:h-[35rem] md:w-full"
          style={
            poster_path
              ? { backgroundImage: `url(${BASE_IMAGE}${backdrop_path})` }
              : { backgroundImage: `url("/imagenotfound.jpg")` }
          }
        >
          <div className=" h-screen bg-gradient-to-b from-black/70 to-black"></div>
        </div>
        <div>
          <div className="z-50 ">
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="absolute bottom-5 left-5 w-16 rounded-md md:bottom-3 md:left-48 md:right-5 md:top-24 md:w-56"
            />
          </div>
          <div>
            <h4 className=" absolute bottom-24 left-24 w-32 truncate text-xs font-extrabold tracking-widest text-sky-200/80 md:left-[28rem] md:top-24 md:w-96 md:text-xl">
              {title ? title : name}
            </h4>
            <span className="md:text-md absolute bottom-16 left-24 text-xs text-sky-200/50 md:left-[28rem] md:top-36">
              {year}
            </span>
            <span className="md:text-s absolute bottom-16 left-40 text-xs text-sky-200/50 md:left-[35rem] md:top-36">
              ⭐ {vote_average.toFixed(2)}
            </span>
            <p className="absolute left-[28rem] top-48 hidden text-sky-200/50 md:inline-block">
              {overview}
            </p>
          </div>
          <Link
            to={`/${id}?${title ? "movieId" : "serieId"}=${id}`}
            className="absolute bottom-5 left-24  md:bottom-36 md:left-[28rem]"
          >
            <Button type="secondary">More</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (type === "list6") {
    const { title, vote_average, id, poster_path, name } = data;

    return (
      <Link
        to={`/${id}?${title ? "movieId" : "serieId"}=${id}`}
        className="to-black-60 bg-gradient-to-b from-transparent"
      >
        <div
          className="w-34 group relative h-72 rounded-lg bg-cover bg-top  transition-all duration-300   md:h-96  md:w-72"
          style={
            ({
              backgroundImage:
                "linear-gradient(to bottom,transparent,rgba(0,0,0,.6))",
            },
            poster_path
              ? { backgroundImage: `url(${BASE_IMAGE}${poster_path}) ` }
              : { backgroundImage: `url("/imagenotfound.jpg")` })
          }
        >
          <div className=" h-screen bg-gradient-to-b from-black/40 to-black"></div>

          <div>
            <div className=" flex items-center justify-between  transition-all duration-500 ">
              <h2 className="absolute bottom-5 left-3 w-32 truncate text-xs uppercase tracking-widest text-sky-200/90">
                {title ? title : name}
              </h2>
              <span className=" absolute bottom-4 right-5 mr-2 mt-2 text-sm font-semibold text-sky-200/80">
                {vote_average.toFixed(1)}⭐
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (type === "list5") {
    const {
      title,
      vote_average,
      release_date,
      id,
      poster_path,
      name,
      first_air_date,
    } = data;
    const isShow = favorites.some((fav) => fav.id === id);

    const addFav = () => {
      dispatch({ type: "favorites/add", payload: data });
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
      <div className="group  w-32  rounded-lg transition-all duration-300   md:h-96 md:w-48">
        <Link to={`/${id}?${title ? "movieId" : "serieId"}=${id}`}>
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

  if (type === "list4") {
    const { name, vote_average, episode_number, still_path } = data;

    return (
      <div className="group relative mt-5 w-72   rounded-lg transition-all duration-300   md:h-56 md:w-64">
        <span className="absolute bottom-4 z-10 hidden text-sky-200/70 group-hover:flex">
          {episode_number}
        </span>
        {still_path ? (
          <img
            src={`${BASE_IMAGE}${still_path}`}
            alt=""
            className="h-56 w-72 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-48 md:w-96"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="h-56 w-72 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-48 md:w-96"
            alt=""
          />
        )}
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
      </div>
    );
  }

  if (type === "list3") {
    const { title, name, vote_average, id, poster_path } = data;

    return (
      <div className="group  w-32  rounded-lg transition-all duration-300   md:h-96 md:w-48">
        <Link to={`/${id}?${title ? "movieId" : "serieId"}=${id}`}>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-72 md:w-48"
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
        </div>
      </div>
    );
  }

  if (type === "list2") {
    const {
      title,
      name,
      first_air_date,
      release_date,
      vote_average,
      id,
      poster_path,
    } = data;
    const isShow = favorites.some((fav) => fav.id === id);

    const addFav = () => {
      dispatch({ type: "favorites/add", payload: data });
      toast.success(`--${title ? title : name}-- added to favorite list`, {
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
      toast.error(`--${title ? title : name}-- deleted from favorite list`, {
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
      <div className="md:h-81  group  w-32 rounded-lg transition-all   duration-300 md:w-36">
        <Link to={`/${id}?${title ? "movieId" : "serieId"}=${id}`}>
          {poster_path ? (
            <img
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
              className="w-32 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-56 md:w-36"
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
          <div
            className="w-34 group relative h-72 rounded-lg bg-cover bg-top  transition-all duration-300   md:h-96  md:w-72"
            style={
              ({
                backgroundImage:
                  "linear-gradient(to bottom,transparent,rgba(0,0,0,.6))",
              },
              poster_path
                ? { backgroundImage: `url(${BASE_IMAGE}${poster_path}) ` }
                : { backgroundImage: `url("/imagenotfound.jpg")` })
            }
          >
            <div className=" h-screen bg-gradient-to-b from-black/40 to-black"></div>
          </div>

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
      <div className="group  w-32  rounded-lg transition-all duration-300   md:h-96 md:w-48">
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
    const {
      title,
      vote_average,
      release_date,
      id,
      poster_path,
      name,
      first_air_date,
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
      <div className="group  w-32  rounded-lg transition-all duration-300   md:h-96 md:w-48">
        <Link to={`/${id}?${title ? "movieId" : "serieId"}=${id}`}>
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
  //----------------------------------------------------------------
  if (type === "episodes") {
    const { name, vote_average, episode_number, still_path } = serie;

    return (
      <div className="group relative mt-5 w-72   rounded-lg transition-all duration-300   md:h-56 md:w-64">
        <span className="absolute -top-6 z-10 hidden text-sky-200/70 group-hover:flex">
          {episode_number}
        </span>
        {still_path ? (
          <img
            src={`${BASE_IMAGE}${still_path}`}
            alt=""
            className="h-56 w-72 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-48 md:w-96"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="h-56 w-72 rounded-lg    transition-all duration-300 group-hover:-translate-y-2     md:h-48 md:w-96"
            alt=""
          />
        )}
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
      </div>
    );
  }
}

export default ListElement;
