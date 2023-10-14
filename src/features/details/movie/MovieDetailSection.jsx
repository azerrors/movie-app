import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../../services/detailsApi";
import {
  getMovieCast,
  getMovieImage,
  getMovieSimilar,
  getMovieVideo,
} from "../../../services/movieApi";
import { useState } from "react";
import Header from "../../../ui/Header";
import MovieGenre from "./MovieGenre";
import MovieCast from "./MovieCast";
import Button from "../../../ui/Button";
import MovieVideoImage from "./MovieVideoImage";
import MovieImage from "./MovieImage";
import { GoPerson } from "react-icons/go";
import MovieSimilar from "./MovieSimilar";
import { useNavigate } from "react-router-dom";
import NotFound from "../../../ui/NotFound";
import Loader from "../../../ui/Loader";

const BASE_IMAGE = "https://image.tmdb.org/t/p/w500";

function MovieDetailSection({ movieID }) {
  const [image, setImage] = useState(false);
  const [video, setVideo] = useState(false);

  const { data: movieDetails , isLoading:movieDetailsLoading } = useQuery({
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
  const h4Style =
    "absolute p-1 top-20 text-md text-center w-screen md:rounded-md md:bg-gray-900/40 p-2 animate-moveInLeft md:text-2xl uppercase font-semibold tracking-widest text-white md:top-32";
  const pStyle =
    "text-stone-100 absolute md:top-64 top-[67%] text-md md:w-[40rem] bg-gray-900/50 p-3 rounded-lg text-center p-3 md:right-80 md:text-sm  ";
  const imgStyle =
    "absolute animate-moveInRight w-48 right-[5rem] top-36  md:left-96 md:top-48 md:w-72 rounded-lg ";

  const {
    backdrop_path,
    original_language,
    poster_path,
    genres,
    release_date,
    title,
    vote_average,
    overview,
  } = movieDetails ? movieDetails : [];
  const navigate = useNavigate();

  const handleImage = () => {
    setImage((a) => !a);
    setVideo(false);
  };
  const handleVideo = () => {
    setVideo((a) => !a);
    setImage(false);
  };

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
      <div className=" h-screen overflow-hidden md:w-full">
        <div className="relative">
          <img
            src={`${BASE_IMAGE}${backdrop_path}`}
            className=" h-screen   blur transition-all duration-200 md:h-full md:w-full"
            alt=""
          />
          <div className="absolute top-0  w-full bg-slate-900/10 md:right-1">
            <Header />
          </div>
          <img
            className={imgStyle}
            src={`${BASE_IMAGE}${poster_path}`}
            alt=""
          />
          <span className="absolute right-[5rem] top-36  text-lg text-white md:left-96 md:top-48 md:text-xl">
            {Math.floor(vote_average)}⭐
          </span>
          <span className="absolute right-[5rem] top-[25rem] rounded-md px-1 text-xl text-white md:left-[24rem] md:top-[37rem]">
            {original_language}
          </span>
          <span className="text-md absolute right-[11rem]  top-36 rounded-md  text-white md:left-[35.3rem]  md:top-48 md:text-lg">
            {release_date}
          </span>

          <div>
            <h4 className={h4Style}>{movieDetails && title}</h4>
            {overview && <p className={pStyle}>{overview}</p>}
          </div>
          <div className="absolute left-[43.5rem] top-48">
            <ul className="mt-2 flex flex-wrap items-center justify-center gap-2">
              {genres &&
                genres.map((genre) => {
                  return <MovieGenre key={genre.id} genre={genre} />;
                })}
            </ul>
          </div>

          {movieCast?.length > 0 && (
            <div>
              <div className="absolute hidden p-1 md:right-[27.8rem] md:top-[27.8rem]  md:block">
                <h3 className=" border-stone-200 p-1 text-2xl uppercase  text-white">
                  Cast
                </h3>
                <ul className="mt-2 flex flex-wrap items-center justify-center gap-2">
                  {movieCast?.slice(0, 5)?.map((cast) => {
                    return <MovieCast type="small" key={cast.id} cast={cast} />;
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <div className="mb-10 flex justify-center gap-5  md:mr-10">
          <Button type="normal" onClick={handleImage}>
            Image
          </Button>
          <Button type="normal" onClick={() => navigate(-1)}>
            BACK
          </Button>
          <Button type="normal" onClick={handleVideo}>
            Video
          </Button>
        </div>

        <div>
          {video && (
            <ul className="flex flex-col items-center justify-center gap-5 p-1">
              {movieVideo?.length > 0 ? (
                movieVideo.slice(0, 3).map((video) => {
                  return <MovieVideoImage key={video.id} video={video} />;
                })
              ) : (
                <NotFound type="video" />
              )}
            </ul>
          )}
        </div>
        <div>
          {image && (
            <ul className="flex flex-wrap items-center justify-center gap-5 p-1">
              {movieImage?.length > 0 ? (
                movieImage.map((image) => {
                  return <MovieImage key={image.id} image={image} />;
                })
              ) : (
                <NotFound type="img" />
              )}
            </ul>
          )}
        </div>
      </div>

      <div className="mb-5">
        <div className="p-1">
          {movieCast?.length > 0 && (
            <h3 className="flex items-center gap-2 border-b border-stone-200 p-1 text-2xl uppercase  text-white">
              <GoPerson />
              Cast
            </h3>
          )}
          <ul className="mt-2 flex flex-wrap items-center justify-center gap-2 p-1 md:justify-start">
            {movieCast?.map((cast) => {
              return <MovieCast type="medium" key={cast.id} cast={cast} />;
            })}
          </ul>
        </div>
      </div>
      <div>
        {movieSimilar?.length > 0 && <MovieSimilar movie={movieSimilar} />}
      </div>
    </div>
  );
}

export default MovieDetailSection;
