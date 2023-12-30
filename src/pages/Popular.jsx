import React, { useState } from "react";
import List from "../ui/List";
import { getPopulerTv } from "../services/tvSeries";
import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../services/movieApi";

function Popular() {
  const [change, setChange] = useState(false);
  const currChange = change ? "week" : "day";

  const handleChange = () => {
    setChange((set) => !set);
  };

  const { data: popularTv } = useQuery({
    queryKey: ["getPopularTv"],
    queryFn: getPopulerTv,
  });

  const { data: popularMovies } = useQuery({
    queryKey: ["getPopularMovies"],
    queryFn: getPopularMovies,
  });

  return (
    <div>
      <div>
        <div className="border-b border-sky-200/20 p-5">
          <h4 className="  p-5 text-sky-200/50 md:text-2xl">Series</h4>
          <List type="list9" data={popularTv} />
        </div>
        <div className="border-b border-sky-200/20 p-5">
          <h4 className="p-5  text-sky-200/50  md:text-2xl ">Movies</h4>
          <List type="list9" data={popularMovies} />
        </div>
      </div>
    </div>
  );
}

export default Popular;
