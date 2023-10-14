import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getPopulerTvWithPage } from "../../services/tvSeries";
import Button from "../../ui/Button";
import Header from "../../ui/Header";
import List from "../../ui/List";

function PopulerSeries() {
  const [page, setPage] = useState(1);

  const increasePage = () => {
    setPage((page) => page + 1);
  };
  const decreasePage = () => {
    setPage((page) => page - 1);
  };
  const { data: allPopulerSeries, isLoading: allPopulerMoviesLoading } =
    useQuery({
      queryKey: ["populerseries", page],
      queryFn: () => getPopulerTvWithPage(page),
    });
  return (
    <div className="h-full text-white">
      <Header />
      <div className="flex justify-between border-b  border-stone-300 ">
        <h3 className="mt-5 p-3 md:text-2xl uppercase tracking-widest text-white shadow-sm">
          Populer Series
        </h3>
        <h2 className="md:mr-10 mt-5 p-3 md:text-2xl uppercase tracking-widest text-white shadow-sm">
          Page: {page}
        </h2>
      </div>
      <List type="populer/series/all" allPopulerSeries={allPopulerSeries} />
      <div className="md:mr-28 mr-8 flex justify-end gap-5">
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

export default PopulerSeries;
