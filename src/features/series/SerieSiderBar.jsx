import { BsSearch } from "react-icons/bs";
import { useSerie } from "../../contexts/SerieContext";

import SerieGenre from "./SerieGenre";
import SerieVote from "./SerieVote";
import SerieYear from "./SerieYear";

function SerieSiderBar() {
  const { dispatch, sereiInput } = useSerie();

  return (
    <div className="flex flex-col ">
      <div className="mt-3">
        <span className="text-md mb-1 flex items-center gap-2 border-b border-sky-200/20 pb-2 uppercase text-sky-200/50">
          <BsSearch />
          Search
        </span>
        <div className="mb-10">
          <input
            className="focus:ring-border-primary w-full rounded-md p-1 transition-all duration-200  focus:outline-none  focus:ring"
            type="text"
            value={sereiInput}
            placeholder="search for a movie"
            onChange={(e) =>
              dispatch({ type: "serie/getInputValue", payload: e.target.value })
            }
          />
        </div>
      </div>
      <SerieGenre />
      <SerieVote />
      <SerieYear />
    </div>
  );
}

export default SerieSiderBar;
