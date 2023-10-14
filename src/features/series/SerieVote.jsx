import React from "react";
import { useSerie } from "../../contexts/SerieContext";
import { BsStar } from "react-icons/bs";
import Button from "../../ui/Button";

function SerieVote() {
  const { dispatch } = useSerie();
  const yearsArray = [];

  for (let year = 1; year <= 10; year++) {
    yearsArray.push(year);
  }
  const handleClick = () => {
    dispatch({ type: "serie/reset/vote" });
  };
  return (
    <div>
      <div className="flex items-center gap-1 border-b border-stone-300 ">
        <BsStar className="ml-3 text-xl text-white" />
        <h3 className=" p-2 text-xl uppercase tracking-widest text-white">
          Vote
        </h3>
      </div>
      <div className="grid grid-cols-2  place-items-center ">
        {yearsArray.map((year) => {
          return (
            <Button
              type="category"
              onClick={() =>
                dispatch({ type: "serie/get/vote", payload: year })
              }
              key={year}
            >
              {year}⭐
            </Button>
          );
        })}
      </div>
      <div className="mr-3 mb-10  flex justify-end">
        <Button type="smreset" onClick={handleClick}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default SerieVote;
