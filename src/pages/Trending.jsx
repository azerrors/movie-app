import React, { useState } from "react";
import { getTrendingTv } from "../services/tvSeries";
import { useQuery } from "@tanstack/react-query";
import List from "../ui/List";
import { getTrendingMovies } from "../services/movieApi";

function Trending() {
  const [change, setChange] = useState(false);
  const currChange = change ? "week" : "day";

  const handleChange = () => {
    setChange((set) => !set);
  };

  const { data: trendingTv } = useQuery({
    queryKey: ["getTrendingTvForHome", currChange],
    queryFn: () => getTrendingTv(currChange),
  });

  const { data: trendingMovies } = useQuery({
    queryKey: ["getTrendingMoviesForHome", currChange],
    queryFn: () => getTrendingMovies(currChange),
  });

  return (
    <div>
      <div>
        <div className="flex gap-2 rounded-xl border-b border-sky-200/20">
          <h4
            className={`${
              change
                ? "text-sky-200/10"
                : "border-b-2 border-sky-500/50 text-sky-200/50"
            } py-5 pl-5  text-sky-200/50 md:text-2xl`}
            onClick={handleChange}
          >
            Daily/
          </h4>
          <h4
            className={`${
              !change
                ? "cursor-pointer text-sky-200/10"
                : "border-b-2 border-sky-500/50 text-sky-200/50"
            } py-5 pr-5 text-sky-200/50 md:text-2xl`}
            onClick={handleChange}
          >
            Weekly
          </h4>
        </div>
        <div className="border-b border-sky-200/20 p-5">
          <h4 className="  p-5 text-sky-200/50 md:text-2xl">Series</h4>
          <List type="list9" data={trendingTv} />
        </div>
        <div className="border-b border-sky-200/20 p-5">
          <h4 className="p-5  text-sky-200/50  md:text-2xl ">Movies</h4>
          <List type="list9" data={trendingMovies} />
        </div>
      </div>
    </div>
  );
}

export default Trending;
