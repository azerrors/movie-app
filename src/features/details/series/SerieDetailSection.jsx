import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getSeriesDetails } from "../../../services/detailsApi";
import {
  getSerieCast,
  getSerieImage,
  getSerieSimilar,
  getSerieVideo,
} from "../../../services/tvSeries";
import Header from "../../../ui/Header";
import SerieGenre from "./SerieGenre";
import MovieCast from "../movie/MovieCast";
import SerieVideo from "./SerieVideo";
import Button from "../../../ui/Button";
import SerieImage from "./SerieImage";
import { GoPerson } from "react-icons/go";
import SerieCast from "./SerieCast";
import SerieSimilar from "./SerieSimilar";
import { useNavigate } from "react-router-dom";
import Loader from "../../../ui/Loader";
import NotFound from "../../../ui/NotFound";

const BASE_IMAGE = "https://image.tmdb.org/t/p/w500";

function SerieDetailSection({ serieID }) {
  const [image, setImage] = useState(false);
  const [video, setVideo] = useState(false);

  const { data: serieDetails, isLoading: serieDetailsLoading } = useQuery({
    queryKey: ["serieDetails", serieID],
    queryFn: () => getSeriesDetails(serieID),
  });

  const { data: serieCast } = useQuery({
    queryKey: ["serieCast", serieID],
    queryFn: () => getSerieCast(serieID),
  });

  const { data: serieVideo } = useQuery({
    queryKey: ["serieVideo", serieID],
    queryFn: () => getSerieVideo(serieID),
  });

  const { data: serieImage } = useQuery({
    queryKey: ["serieImage", serieID],
    queryFn: () => getSerieImage(serieID),
  });
  const { data: serieSimilar } = useQuery({
    queryKey: ["serieSimilar", serieID],
    queryFn: () => getSerieSimilar(serieID),
  });

  const h4Style =
    "absolute p-1 top-20 text-md text-center w-screen md:rounded-md md:bg-gray-900/40 p-2 animate-moveInLeft md:text-2xl uppercase font-semibold tracking-widest text-white md:top-32";
  const pStyle =
    "text-stone-100 absolute md:top-64 top-[67%] text-md md:w-[40rem] bg-gray-900/50 p-3 rounded-lg text-center p-3 md:right-80 md:text-sm  ";
  const imgStyle =
    "absolute animate-moveInRight w-48 right-[5rem] top-36  md:left-96 md:top-48 md:w-72 rounded-lg ";

  const {
    original_language,
    poster_path,
    backdrop_path,
    genres,
    first_air_date,
    name,
    vote_average,
    overview,
  } = serieDetails ? serieDetails : [];

  const navigate = useNavigate();

  const handleImage = () => {
    setImage((a) => !a);
    setVideo(false);
  };
  const handleVideo = () => {
    setVideo((a) => !a);
    setImage(false);
  };

  if (serieDetailsLoading) {
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

          {poster_path ? (
            <img
              className={imgStyle}
              src={`${BASE_IMAGE}${poster_path}`}
              alt=""
            />
          ) : (
            <img
              className={`${imgStyle} h-[27rem]`}
              src={`/public/imagenotfound.jpg`}
              alt=""
            />
          )}
          <span className="absolute right-[5rem] top-36  text-lg text-white md:left-96 md:top-48 md:text-xl">
            {Math.floor(vote_average)}⭐
          </span>
          <span className="absolute right-[5rem] top-[25rem] rounded-md px-1 text-xl text-white md:left-[24rem] md:top-[37rem]">
            {original_language}
          </span>
          <span className="text-md absolute right-[11rem]  top-36 rounded-md  text-white md:left-[35.3rem]  md:top-48 md:text-lg">
            {first_air_date}
          </span>

          <div>
            <h4 className={h4Style}>{serieDetails && name}</h4>
            <p className={pStyle}>{serieDetails && overview}</p>
          </div>

          <div className="absolute left-[43.5rem] top-48">
            <ul className="mt-2 flex flex-wrap items-center justify-center gap-2">
              {genres &&
                genres.map((genre) => {
                  return <SerieGenre key={genre.id} genre={genre} />;
                })}
            </ul>
          </div>
          {serieCast?.length !== 0 && (
            <div>
              <div className="absolute hidden p-1 md:right-[27.8rem] md:top-[27.8rem]  md:block">
                <h3 className=" border-stone-200 p-1 text-2xl uppercase  text-white">
                  Cast
                </h3>
                <ul className="mt-2 flex flex-wrap items-center justify-center gap-2">
                  {serieCast?.slice(0, 5)?.map((cast) => {
                    return <MovieCast key={cast.id} cast={cast} />;
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
              {serieVideo?.length > 0 ? (
                serieVideo.slice(0, 3).map((video) => {
                  return <SerieVideo key={video.id} video={video} />;
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
              {serieImage?.length > 0 ? (
                serieImage.map((image) => {
                  return <SerieImage key={image.id} image={image} />;
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
          {serieCast?.length > 0 && (
            <h3 className="flex items-center gap-2 border-b border-stone-200 p-1 text-2xl uppercase  text-white">
              <GoPerson />
              Cast
            </h3>
          )}
          <ul className="mt-2 flex flex-wrap items-center justify-center gap-2 p-1 md:justify-start">
            {serieCast?.map((cast) => {
              return <SerieCast key={cast.id} cast={cast} />;
            })}
          </ul>
        </div>
      </div>
      <div>
        {serieSimilar?.length > 0 && <SerieSimilar serie={serieSimilar} />}
      </div>
    </div>
  );
}

export default SerieDetailSection;
