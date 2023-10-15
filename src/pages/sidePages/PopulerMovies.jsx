import React, { useState } from "react";
import Header from "../../ui/Header";
import { useQuery } from "@tanstack/react-query";
import { getPopularMoviesWithPages } from "../../services/movieApi";
import Button from "../../ui/Button";
import List from "../../ui/List";
import Loader from "../../ui/Loader";

function PopulerMovies() {
  const [page, setPage] = useState(1);

  const increasePage = () => {
    setPage((page) => page + 1);
  };
  const decreasePage = () => {
    setPage((page) => page - 1);
  };

  const { data: allPopulerMovies, isLoading: allPopulerMoviesLoading } =
    useQuery({
      queryKey: ["populermovies ", page],
      queryFn: () => getPopularMoviesWithPages(page),
    });

  if (allPopulerMoviesLoading) {
    return (
      <div>
        <div className="mt-10 flex h-screen items-center justify-center">
          <Loader />
        </div>
      </div>
    );
  }
  return (
    <div className="h-full text-white">
      <Header />
      <div className="flex justify-between border-b  border-stone-300 ">
        <h3 className="mt-5 p-3 uppercase tracking-widest text-white shadow-sm md:text-2xl">
          Populer Movies
        </h3>
        <h2 className="mt-5 p-3 uppercase tracking-widest text-white shadow-sm md:mr-10 md:text-2xl">
          Page: {page}
        </h2>
      </div>
      <List type="movie/populer/all" movie={allPopulerMovies} />
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

export default PopulerMovies;
