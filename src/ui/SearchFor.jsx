import { useMovie } from "../contexts/movieContext";
import useCloseModalClickByOutside from "../hooks/useCloseModalClickByOutside";
import List from "./List";
import Loader from "./Loader";
import { TbError404 } from "react-icons/tb";

function SearchFor({ data, curMultiSearchLoading }) {
  const { input, dispatch } = useMovie();
  const handleClick = (e) => {
    dispatch({ type: "remove/mainInput" });
  };
  const { ref } = useCloseModalClickByOutside(handleClick);
  return (
    <div
      ref={ref}
      className={`${
        input ? "animate-moveInTop" : "animate-moveToTop"
      } scrollclass absolute z-[1000] md:mr-96 rounded-lg flex  h-[40rem] w-80 justify-center overflow-auto border border-sky-200/40 bg-secondary transition-all duration-300`}
    >
      {curMultiSearchLoading ? (
        <div className="flex  items-center justify-center">
          <Loader />
        </div>
      ) : data.length ? (
        <List type="list10" data={data} />
      ) : (
        <span className="flex  items-center justify-center">
          <TbError404 className="text-sky-400 text-[5rem]" />
        </span>
      )}
    </div>
  );
}

export default SearchFor;
