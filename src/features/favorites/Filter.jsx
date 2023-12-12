import { MdOutlineSpeakerNotes } from "react-icons/md";
import { useMovie } from "../../contexts/movieContext";

function Filter() {
  const { dispatch, filterInput } = useMovie();
  const handleFilter = (e) => {
    dispatch({ type: "filter/add", payload: e.target.value });
  };
  const handleNote = () => {
    dispatch({ type: "note" });
  };
  return (
    <div className="flex items-center gap-5 mt-4 ">
      <MdOutlineSpeakerNotes
        onClick={handleNote}
        className="cursor-pointer text-xl text-stone-200 md:text-3xl"
      />
      <select
        value={filterInput}
        onChange={(e) => handleFilter(e)}
        className="mr-5 cursor-pointer rounded-lg md:p-2 p-1 lowercase transition-all duration-200 hover:scale-[1.01] focus:outline-none"
      >
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="serie">Serie</option>
      </select>
    </div>
  );
}

export default Filter;
