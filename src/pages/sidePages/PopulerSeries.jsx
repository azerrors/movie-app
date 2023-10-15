import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getPopulerTvWithPage } from "../../services/tvSeries";
import Button from "../../ui/Button";
import Header from "../../ui/Header";
import List from "../../ui/List";
import Loader from "../../ui/Loader";

function PopulerSeries() {
  const [page, setPage] = useState(1);

  const increasePage = () => {
    setPage((page) => page + 1);
  };
  const decreasePage = () => {
    setPage((page) => page - 1);
  };
  const { data: allPopulerSeries, isLoading: allPopulerSeriesLoading } =
    useQuery({
      queryKey: ["populerseries", page],
      queryFn: () => getPopulerTvWithPage(page),
    });

  if (allPopulerSeriesLoading) {
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
          Populer Series
        </h3>
        <h2 className="mt-5 p-3 uppercase tracking-widest text-white shadow-sm md:mr-10 md:text-2xl">
          Page: {page}
        </h2>
      </div>
      <List type="serie/populer/all" serie={allPopulerSeries} />
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

export default PopulerSeries;
