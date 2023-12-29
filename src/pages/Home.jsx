import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getPopularMovies,
  getRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "../services/movieApi";
import {
  getAiringTodaySeries,
  getOnTheAirSeries,
  getPopulerTv,
  getTrendingTv,
} from "../services/tvSeries";
import List from "../ui/List";

function Home() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

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

  const { data: airTodayShows } = useQuery({
    queryKey: ["airTodayShows"],
    queryFn: getAiringTodaySeries,
  });
  const { data: onTheAirSeries } = useQuery({
    queryKey: ["onTheAirSeries"],
    queryFn: getOnTheAirSeries,
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
  // return (
  //   <div>
  //     <div className="block bg-stone-900/20 md:hidden">
  //       <Header />
  //     </div>
  //     <div className="hidden md:block">
  //       <CarouselFull images={backdrop_path} info={ratedMovies} />
  //     </div>
  //     <div>
  //       <h3 className={h3Style}>Upcoming Movies</h3>
  //       <List type="movie/upcoming" movie={upcomingMovies} />
  //       <div className=" mr-5 flex  justify-end ">
  //         <Button type="link" onClick={linkToUpcomingMovies}>
  //           More
  //         </Button>
  //       </div>
  //     </div>
  //     {/* // ================================================================= */}
  //     <div>
  //       <h3 className={h3Style}>Popular Movies</h3>
  //       <List type="movie/populer" movie={populerMovies} />
  //       <div className="mr-5 flex justify-end ">
  //         <Button type="link" onClick={linkToPopulerMovies}>
  //           More
  //         </Button>
  //       </div>
  //     </div>
  //     {/* // ================================================================= */}
  //     <div>
  //       <h3 className={h3Style}>Trending Movies</h3>
  //       <List type="movie/trend" movie={trendingMovies} />
  //       <div className="mr-5 flex justify-end ">
  //         <Button type="link" onClick={linkToTrendingMovies}>
  //           More
  //         </Button>
  //       </div>
  //     </div>
  //     {/* // ================================================================= */}
  //     <div>
  //       <h3 className={h3Style}>Trending Series</h3>
  //       <List type="serie/trend" serie={trendingTv} />
  //       <div className="mr-5 flex justify-end ">
  //         <Button type="link" onClick={linkToTrendingSeries}>
  //           More
  //         </Button>
  //       </div>
  //     </div>
  //     {/* // ================================================================= */}
  //     <div>
  //       <h3 className={h3Style}>Populer Series</h3>
  //       <List type="serie/populer" serie={populerTv} />
  //       <div className="mr-5 flex justify-end ">
  //         <Button type="link" onClick={linkToPopulerSeries}>
  //           More
  //         </Button>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="flex flex-col gap-9 p-5">
      <div className="rounded-xl  border-x border-sky-200/60  p-8 shadow-xl">
        <h5 className="mb-6 border-x  border-sky-200/60 p-1 text-sky-200/50  md:text-xl ">
          Popular Movies
        </h5>
        <List type="list7" data={populerMovies} />
      </div>

      <div className="flex flex-col flex-wrap md:flex-row md:gap-0 gap-5">
        <div className="w-full rounded-xl  border-x  border-sky-200/60 p-8  shadow-xl md:w-8/12">
          <h5 className="mb-6 border-x  border-sky-200/60 p-1 text-sky-200/50  md:text-xl ">
            Upcoming Movies
          </h5>
          <List type="list6" data={upcomingMovies} />
        </div>

        <div className="h-96 w-full rounded-xl    border-x border-sky-200/60   p-8 shadow-xl  md:h-80 md:w-4/12">
          <h5 className="mb-6 border-x  border-sky-200/60 p-1 text-sky-200/50  md:text-xl ">
            Rated Movies
          </h5>
          <List type="list8" data={ratedMovies} />
        </div>
      </div>

      <div className=" rounded-xl   border-x border-sky-200/60  p-8 shadow-xl">
        <h5 className="mb-6 flex gap-20 border-x  border-sky-200/60 p-1 text-xl  text-sky-200/50 ">
          <span
            onClick={() => setShow(false)}
            className={`cursor-pointer ${show && "text-sky-200/20"} `}
          >
            Airing Today Series
          </span>
          <span
            onClick={() => setShow(true)}
            className={` cursor-pointer ${
              show ? "text-sky-200/50" : "text-sky-200/20"
            } `}
          >
            On The Air Series
          </span>
        </h5>
        {!show ? (
          <List type="list9" data={airTodayShows} />
        ) : (
          <List type="list9" data={onTheAirSeries} />
        )}
      </div>
    </div>
  );
}

export default Home;
