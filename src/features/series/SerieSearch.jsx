import React from "react";
import { useSerie } from "../../contexts/SerieContext";

function SerieSearch() {
  const { dispatch, serieInput, serieGenreName, serieVote, serieYear } =
    useSerie();
  return (
    <div className="border border-stone-300">
      <div className="mt-10 flex flex-col items-center justify-between text-start  md:ml-5 md:mt-7 md:flex-row">
        <div className="mb-10 md:ml-20">
          <input
            className="focus:ring-border-primary w-56 rounded-md transition-all duration-200 focus:w-72 focus:p-1 focus:outline-none  focus:ring"
            type="text"
            value={serieInput}
            onChange={(e) =>
              dispatch({ type: "serie/getInputValue", payload: e.target.value })
            }
          />
        </div>
        {serieGenreName && !serieInput && (
          <h3 className="text-sm uppercase text-white md:mr-36">
            Choosen Genre : {serieGenreName}
          </h3>
        )}
        {!serieGenreName && !serieVote && !serieInput && serieYear && (
          <h3 className="text-sm uppercase text-white md:mr-36">
            Choosen Year : {serieYear}
          </h3>
        )}{" "}
        {!serieGenreName && serieVote && !serieInput && !serieYear && (
          <h3 className="text-sm uppercase text-white md:mr-36">
            Choosen Rating : {serieVote}⭐
          </h3>
        )}
      </div>
    </div>
  );
}

export default SerieSearch;
