import { Link } from "react-router-dom";

const BASE_IMAGE = "https://image.tmdb.org/t/p/w500";

function ListElement({ type, movie, serie }) {
  if (type === "populer/all") {
    const { release_date, title, vote_average, id, poster_path } = movie;
    return (
      <Link
        to={`/${id}?movieId=${id}`}
        className="mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 hover:border hover:border-stone-300 md:h-96 md:w-56"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg md:h-72 md:w-72"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="w-32 rounded-lg md:h-72 md:w-72"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {title}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average}⭐
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

  if (type === "upcoming/all") {
    const { release_date, title, vote_average, id, poster_path } = movie;
    return (
      <Link
        to={`/${id}?movieId=${id}`}
        className="mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 hover:border hover:border-stone-300 md:h-96 md:w-56"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg md:h-72 md:w-72"
          />
        ) : (
          <img
            className="w-32 rounded-lg md:h-72 md:w-72"
            src="/public/imagenotfound.jpg"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {title}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average}⭐
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

  if (type === "trending/all") {
    const { release_date, title, vote_average, id, poster_path } = movie;
    return (
      <Link
        to={`/${id}?movieId=${id}`}
        className="mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 hover:border hover:border-stone-300 md:h-96 md:w-56"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg md:h-72 md:w-72"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="w-32 rounded-lg md:h-72 md:w-72"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {title}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average}⭐
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

  if (type === "trending/series/all") {
    const { name, vote_average, id, poster_path } = movie;
    return (
      <Link
        to={`/${id}?serieId=${id}`}
        className="mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 hover:border hover:border-stone-300 md:h-96 md:w-56"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg md:h-72 md:w-72"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="w-32 rounded-lg md:h-72 md:w-72"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {name}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average}⭐
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (type === "populer/series/all") {
    const { name, vote_average, id, poster_path } = movie;
    return (
      <Link
        to={`/${id}?serieId=${id}`}
        className="mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 hover:border hover:border-stone-300 md:h-96 md:w-56"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg md:h-72 md:w-72"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="w-32 rounded-lg md:h-72 md:w-72"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {name}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average}⭐
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (type === "discover/movie") {
    const { title, release_date, vote_average, id, poster_path } = movie;
    return (
      <Link
        to={`/${id}?movieId=${id}`}
        className="mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 hover:border hover:border-stone-300 md:h-96 md:w-48"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg md:h-72 md:w-72"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="w-32 rounded-lg md:h-72 md:w-72"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {title}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average}⭐
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

  if (type === "search/movie") {
    const { title, vote_average, release_date, id, poster_path } = movie;
    return (
      <Link
        to={`/${id}?movieId=${id}`}
        className="mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 hover:border hover:border-stone-300 md:h-96 md:w-48"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg md:h-72 md:w-72"
          />
        ) : (
          <img
            className="w-32 rounded-lg md:h-72 md:w-72"
            src="/public/imagenotfound.jpg"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {title}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average}⭐
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

  if (type === "genre/movie") {
    const { title, vote_average, release_date, id, poster_path } = movie;
    return (
      <Link
        to={`/${id}?movieId=${id}`}
        className="mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 hover:border hover:border-stone-300 md:h-96 md:w-48"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg md:h-72 md:w-72"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="w-32 rounded-lg md:h-72 md:w-72"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {title}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average}⭐
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

  if (type === "year/movie") {
    const { title, vote_average, release_date, id, poster_path } = movie;
    return (
      <Link
        to={`/${id}?movieId=${id}`}
        className="mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 hover:border hover:border-stone-300 md:h-96 md:w-48"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg md:h-72 md:w-72"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="w-32 rounded-lg md:h-72 md:w-72"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {title}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average}⭐
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

  if (type === "vote/movie") {
    const { title, vote_average, release_date, id, poster_path } = movie;
    return (
      <Link
        to={`/${id}?movieId=${id}`}
        className="mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 hover:border hover:border-stone-300 md:h-96 md:w-48"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg md:h-72 md:w-72"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="w-32 rounded-lg md:h-72 md:w-72"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {title}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average}⭐
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

  if (type === "movie/detail/similar") {
    const { title, vote_average, release_date, id, poster_path } = movie;
    return (
      <Link
        to={`/${id}?movieId=${id}`}
        className="mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 hover:border hover:border-stone-300 md:h-96 md:w-48"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg md:h-72 md:w-72"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="w-32 rounded-lg md:h-72 md:w-72"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {title}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average}⭐
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

  if (type === "serie/detail/similar") {
    const { original_name, vote_average, first_air_date, id, poster_path } =
      movie;
    return (
      <Link
        to={`/${id}?serieId=${id}`}
        className="mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 hover:border hover:border-stone-300 md:h-96 md:w-48"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg md:h-72 md:w-72"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="w-32 rounded-lg md:h-72 md:w-72"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {original_name}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average}⭐
            </span>
          </div>
          <div className="md:text-md mr-2 mt-2 flex justify-end text-sm md:mt-5">
            <span className="truncate border bg-gray-800 text-stone-200">
              {first_air_date}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (type === "discover/serie") {
    const { original_name, vote_average, first_air_date, id, poster_path } =
      serie;
    return (
      <Link
        to={`/${id}?serieId=${id}`}
        className="mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 hover:border hover:border-stone-300 md:h-96 md:w-48"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg md:h-72 md:w-72"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="w-32 rounded-lg md:h-72 md:w-72"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {original_name}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average}⭐
            </span>
          </div>
          <div className="md:text-md mr-2 mt-2 flex justify-end text-sm md:mt-5">
            <span className="truncate border bg-gray-800 text-stone-200">
              {first_air_date}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (type === "year/serie") {
    const { original_name, vote_average, first_air_date, id, poster_path } =
      serie;
    return (
      <Link
        to={`/${id}?serieId=${id}`}
        className="mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 hover:border hover:border-stone-300 md:h-96 md:w-48"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg md:h-72 md:w-72"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="w-32 rounded-lg md:h-72 md:w-72"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {original_name}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average}⭐
            </span>
          </div>
          <div className="md:text-md mr-2 mt-2 flex justify-end text-sm md:mt-5">
            <span className="truncate border bg-gray-800 text-stone-200">
              {first_air_date}
            </span>
          </div>
        </div>
      </Link>
    );
  }
  if (type === "genre/serie") {
    const { original_name, vote_average, first_air_date, id, poster_path } =
      serie;
    return (
      <Link
        to={`/${id}?serieId=${id}`}
        className="mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 hover:border hover:border-stone-300 md:h-96 md:w-48"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg md:h-72 md:w-72"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="w-32 rounded-lg md:h-72 md:w-72"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {original_name}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average}⭐
            </span>
          </div>
          <div className="md:text-md mr-2 mt-2 flex justify-end text-sm md:mt-5">
            <span className="truncate border bg-gray-800 text-stone-200">
              {first_air_date}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (type === "vote/serie") {
    const { original_name, vote_average, first_air_date, id, poster_path } =
      serie;
    return (
      <Link
        to={`/${id}?serieId=${id}`}
        className="mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 hover:border hover:border-stone-300 md:h-96 md:w-48"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg md:h-72 md:w-72"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="w-32 rounded-lg md:h-72 md:w-72"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {original_name}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average}⭐
            </span>
          </div>
          <div className="md:text-md mr-2 mt-2 flex justify-end text-sm md:mt-5">
            <span className="truncate border bg-gray-800 text-stone-200">
              {first_air_date}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (type === "search/serie") {
    const { original_name, vote_average, first_air_date, id, poster_path } =
      serie;
    return (
      <Link
        to={`/${id}?serieId=${id}`}
        className="mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 hover:border hover:border-stone-300 md:h-96 md:w-48"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg md:h-72 md:w-72"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="w-32 rounded-lg md:h-72 md:w-72"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {original_name}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average}⭐
            </span>
          </div>
          <div className="md:text-md mr-2 mt-2 flex justify-end text-sm md:mt-5">
            <span className="truncate border bg-gray-800 text-stone-200">
              {first_air_date}
            </span>
          </div>
        </div>
      </Link>
    );
  }
  if (type === "people/moviecredits") {
    const { title, vote_average, release_date, id, poster_path } = movie;
    return (
      <Link
        to={`/${id}?movieId=${id}`}
        className="mt-5 w-32 cursor-pointer rounded-lg transition-all duration-300 hover:border hover:border-stone-300 md:h-96 md:w-48"
      >
        {poster_path ? (
          <img
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
            className="w-32 rounded-lg md:h-72 md:w-72"
          />
        ) : (
          <img
            src="/public/imagenotfound.jpg"
            className="w-32 rounded-lg md:h-72 md:w-72"
            alt=""
          />
        )}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="ml-1 mt-2 truncate text-sm uppercase text-stone-200">
              {title}
            </h2>
            <span className="mr-2 mt-2 font-semibold text-stone-300">
              {vote_average}⭐
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
}

export default ListElement;
