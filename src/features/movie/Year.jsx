import React from "react";
import { GoHistory } from "react-icons/go";

import Button from "../../ui/Button";
import { useMovie } from "../../contexts/movieContext";

function Year() {
  const { dispatch } = useMovie();
  const yearsArray = [];

  for (let year = 1970; year <= 2023; year++) {
    yearsArray.push(year);
  }
  const handleClick = () => {
    dispatch({ type: "movie/reset/year" });
  };
  return (
    <div>
      <div className="flex items-center gap-1 border-b border-stone-300 ">
        <span className="text-md mb-1 flex items-center gap-2   pb-2 uppercase text-sky-200/50">
          <GoHistory />
          Year
        </span>
      </div>
      <div className="scrollclass grid h-[40rem] grid-cols-2 gap-1 overflow-scroll overflow-x-hidden md:grid-cols-3">
        {yearsArray.map((year) => {
          return (
            <Button
              type="primary_category"
              onClick={() =>
                dispatch({ type: "movie/get/year", payload: year })
              }
              key={year}
            >
              {year}
            </Button>
          );
        })}
      </div>
      <div className="flex justify-end">
        <Button type="secondary_smreset" onClick={handleClick}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default Year;
