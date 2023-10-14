import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getTrendingMoviesWithPages } from "../../services/movieApi";
import Button from "../../ui/Button";
import List from "../../ui/List";
import Header from "../../ui/Header";

function TrendingMovies() {
  const [page, setPage] = useState(1);

  const increasePage = () => {
    setPage((page) => page + 1);
  };
  const decreasePage = () => {
    setPage((page) => page - 1);
  };

  const { data: allTrendingMovies, isLoading: allPopulerMoviesLoading } =
    useQuery({
      queryKey: ["upcomingmovies", page],
      queryFn: () => getTrendingMoviesWithPages(page),
    });
  return (
    <div className="h-full text-white">
      <Header />
      <div className="flex justify-between border-b  border-stone-300 ">
        <h3 className="mt-5 p-3 uppercase tracking-widest text-white shadow-sm md:text-2xl">
          Trending Movies
        </h3>
        <h2 className="mt-5 p-3 uppercase tracking-widest text-white shadow-sm md:mr-10 md:text-2xl">
          Page: {page}
        </h2>
      </div>
      <List type="trending/all" allTrendingMovies={allTrendingMovies} />
      <div className="mr-8 flex justify-end gap-5 md:mr-28">
        {page !== 1 && (
          <Button type="normal" onClick={decreasePage}>
            Prev
          </Button>
        )}

        <Button type="normal" onClick={increasePage}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default TrendingMovies;
