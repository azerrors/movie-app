import React, { useState } from "react";
import { BsFilm } from "react-icons/bs";
import List from "../../../ui/List";
import Button from "../../../ui/Button";

function SerieSimilar({ serie }) {
  const [length, setLength] = useState(8);

  const newMovieArray = serie.slice(0, length);
  const handleMore = () => {
    setLength(20);
  };
  const handleShort = () => {
    setLength(8);
  };
  return (
    <ul>
      <h3 className="flex items-center gap-3 border-b border-gray-200 px-2 uppercase tracking-wider text-white  md:text-2xl">
        <BsFilm />
        Similar Movies
      </h3>
      <List type="serie/detail/similar" key={serie.id} movie={newMovieArray} />
      {length === 8 && (
        <div className="mr-5 flex justify-end">
          <Button type="normal" onClick={handleMore}>
            More
          </Button>
        </div>
      )}

      {length === 20 && (
        <div className="mr-5 flex justify-end">
          <Button type="normal" onClick={handleShort}>
            Less
          </Button>
        </div>
      )}
    </ul>
  );
}

export default SerieSimilar;
