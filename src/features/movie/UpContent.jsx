import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getRatedMovies } from "../../services/movieApi";
import { getTrendingTv } from "../../services/tvSeries";
import List from "../../ui/List";

function UpContent({ serie }) {
  const { data: ratedMovies } = useQuery({
    queryKey: ["getRatedMoviesForMovie"],
    queryFn: getRatedMovies,
  });

  const { data: trendingTv } = useQuery({
    queryKey: ["getYTrendingTvForSerie"],
    queryFn: getTrendingTv,
  });

  return (
    <div className="bg-tertiary shadow-xl">
      <div className="px-10 pt-6 ">
        {" "}
        {!serie ? (
          <List type="list3" data={ratedMovies} />
        ) : (
          <List type="list3" data={trendingTv} />
        )}
      </div>

      {/* <div className="mt-10 flex flex-col items-center justify-between text-start  md:ml-5 md:mt-7 md:flex-row">
        {movieGenreName && !movieInput && (
          <h3 className="text-sm uppercase text-white md:mr-36">
            Choosen Genre : {movieGenreName}
          </h3>
        )}
        {!movieGenreName && !movieVote && !movieInput && movieYear && (
          <h3 className="text-sm uppercase text-white md:mr-36">
            Choosen Year : {movieYear}
          </h3>
        )}{" "}
        {!movieGenreName && movieVote && !movieInput && !movieYear && (
          <h3 className="text-sm uppercase text-white md:mr-36">
            Choosen Rating : {movieVote}⭐
          </h3>
        )}
      </div> */}
    </div>
  );
}

export default UpContent;
