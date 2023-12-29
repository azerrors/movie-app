import React from "react";
import { useMovie } from "../contexts/movieContext";
import Content from "../features/favorites/Content";
import Note from "../features/favorites/Note";
import List from "../ui/List";

function Favorites() {
  const { favorites, showNote } = useMovie();

  return (
    <div className={`${!favorites.length >= 0 || showNote ? "h-screen" : ""}`}>
      <Content />
      {showNote && <Note />}
      {!showNote && <List type="favorites" movie={favorites} />}
    </div>
  );
}

export default Favorites;
