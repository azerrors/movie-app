import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  getPopularMovies,
  getRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "../services/movieApi";
import CarouselFull from "../ui/CarouselFull";
import List from "../ui/List";
import { getPopulerTv, getTrendingTv } from "../services/tvSeries";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import Header from "../ui/Header";
import HomeFilmContainer from "../ui/HomeFilmContainer";

function Home() {
  const navigate = useNavigate();

  // =================================================================
  const { data: ratedMovies } = useQuery({
    queryKey: ["getRatedMoviesForHome"],
    queryFn: getRatedMovies,
  });

  const { data: upcomingMovies } = useQuery({
    queryKey: ["getUpcomingMoviesForHome"],
    queryFn: getUpcomingMovies,
  });

  const { data: populerMovies } = useQuery({
    queryKey: ["getPopularMoviesForHome"],
    queryFn: getPopularMovies,
  });
  const { data: trendingMovies } = useQuery({
    queryKey: ["getTrendingMoviesForHome"],
    queryFn: getTrendingMovies,
  });
  const { data: trendingTv } = useQuery({
    queryKey: ["getTrendingTvForHome"],
    queryFn: getTrendingTv,
  });

  const { data: populerTv } = useQuery({
    queryKey: ["getPopulerTvForHome"],
    queryFn: getPopulerTv,
  });
  // =================================================================
  const backdrop_path = ratedMovies
    ? ratedMovies.map((movie) => movie.backdrop_path)
    : [];

  // =================================================================
  const h3Style =
    "text-white uppercase text-lg tracking-widest md:text-2xl border-b border-stone-300 shadow-sm p-3 mt-5 md:mt-20";

  // =================================================================
  const linkToPopulerMovies = () => {
    navigate("populer_movies");
  };
  const linkToUpcomingMovies = () => {
    navigate("upcoming_movies");
  };
  const linkToTrendingMovies = () => {
    navigate("trending_movies");
  };
  const linkToTrendingSeries = () => {
    navigate("trending_series");
  };
  const linkToPopulerSeries = () => {
    navigate("populer_series");
  };
  return (
    <div>
      <div className="block bg-stone-900/20 md:hidden">
        <Header />
      </div>
      <div className="hidden md:block">
        <CarouselFull images={backdrop_path} info={ratedMovies} />
      </div>
      <div>
        <h3 className={h3Style}>Upcoming Movies</h3>
        <List type="upcoming" upcomingMovie={upcomingMovies} />
        <div className=" mr-5 flex  justify-end ">
          <Button type="link" onClick={linkToUpcomingMovies}>
            More
          </Button>
        </div>
      </div>
      {/* // ================================================================= */}
      <div>
        <h3 className={h3Style}>Popular Movies</h3>
        <List type="populer" populerMovies={populerMovies} />
        <div className="mr-5 flex justify-end ">
          <Button type="link" onClick={linkToPopulerMovies}>
            More
          </Button>
        </div>
      </div>
      {/* // ================================================================= */}
      <div>
        <h3 className={h3Style}>Trending Movies</h3>
        <List type="trend" trendingMovies={trendingMovies} />
        <div className="mr-5 flex justify-end ">
          <Button type="link" onClick={linkToTrendingMovies}>
            More
          </Button>
        </div>
      </div>
      {/* // ================================================================= */}
      <div>
        <h3 className={h3Style}>Trending Series</h3>
        <List type="trend/tv" trendingTv={trendingTv} />
        <div className="mr-5 flex justify-end ">
          <Button type="link" onClick={linkToTrendingSeries}>
            More
          </Button>
        </div>
      </div>
      {/* // ================================================================= */}
      <div>
        <h3 className={h3Style}>Populer Series</h3>
        <List type="populer/tv" populerTv={populerTv} />
        <div className="mr-5 flex justify-end ">
          <Button type="link" onClick={linkToPopulerSeries}>
            More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
