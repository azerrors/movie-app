import { BsFilm } from "react-icons/bs";
import { useSerie } from "../../contexts/SerieContext";

import Button from "../../ui/Button";
import { GoHistory } from "react-icons/go";

function SerieYear() {
  const { dispatch } = useSerie();
  const yearsArray = [];

  for (let year = 1970; year <= 2023; year++) {
    yearsArray.push(year);
  }
  const handleClick = () => {
    dispatch({ type: "serie/reset/year" });
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
                dispatch({ type: "serie/get/year", payload: year })
              }
              key={year}
            >
              {year}
            </Button>
          );
        })}
      </div>{" "}
      <div className="flex justify-end">
        <Button type="secondary_smreset" onClick={handleClick}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default SerieYear;
