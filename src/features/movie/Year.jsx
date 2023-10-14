import React from "react";
import { BsFilm } from "react-icons/bs";
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
        <BsFilm className="ml-3 text-xl text-white" />
        <h3 className=" p-2 text-xl uppercase tracking-widest text-white">
          Year
        </h3>
      </div>
      <div
        className="scrollclass grid h-[40rem] grid-cols-2 gap-1 overflow-scroll overflow-x-hidden md:grid-cols-3"
      >
        {yearsArray.map((year) => {
          return (
            <Button
              type="category"
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
      <div className="mr-2 mb-10 flex justify-end">
        <Button type="smreset" onClick={handleClick}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default Year;
