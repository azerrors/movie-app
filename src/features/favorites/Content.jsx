import { useMovie } from "../../contexts/movieContext";
import Filter from "./Filter";

function Content() {
  const { favorites, filterInput } = useMovie();

  return (
    <div>
      <h3 className="pt-5 text-center font-semibold uppercase tracking-widest text-stone-200 md:text-2xl">
        Your Favorite List
      </h3>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <span className="ml-11 mt-4 text-xs font-medium lowercase tracking-wider text-stone-200">
            Total:{" "}
            {
              favorites?.filter((item) =>
                filterInput === "movie"
                  ? item.title
                  : filterInput === "serie"
                  ? item.name
                  : filterInput === "all"
                  ? item
                  : item,
              ).length
            }{" "}
            element{" "}
          </span>
          {filterInput !== "all" && (
            <span className="ml-11 text-xs font-medium lowercase tracking-wider text-stone-200">
              filtered: {filterInput}
            </span>
          )}
        </div>
        <Filter />
      </div>
    </div>
  );
}

export default Content;
