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
        <span className="text-md mb-1 flex items-center gap-2  pb-2 uppercase text-sky-200/50">
          <BsStar />
          Vote
        </span>
      </div>
      <div className="mt-2 flex flex-wrap justify-center gap-3 ">
        {yearsArray.map((year) => {
          return (
            <Button
              type="primary_category"
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
      <div className="mb-10 mr-3  flex justify-end">
        <Button type="secondary_smreset" onClick={handleClick}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default SerieVote;
