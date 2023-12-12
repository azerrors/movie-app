import { RiEyeCloseFill } from "react-icons/ri";
import { useMovie } from "../../contexts/movieContext";
import List from "../../ui/List";

function Note() {
  const { favorites, dispatch } = useMovie();
  return (
    <div className="animate-showOn mt-10 flex justify-center ">
      <div className="bg-secondary h-96 w-80 absolute md:h-[45rem] md:w-[90rem] overflow-auto rounded-lg text-stone-200 shadow-xl">
        <div className="flex md:flex-row flex-col-reverse justify-between">
          <div className="md:w-3/5 overflow-auto">
            <List type="favorites/note" movie={favorites} />
          </div>
          <div className=" md:w-2/5 border-b md:border-b-0 md:border-l flex justify-end">
            <RiEyeCloseFill
              className="cursor-pointer text-xl  text-stone-200 md:text-3xl"
              onClick={() => dispatch({ type: "note" })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
