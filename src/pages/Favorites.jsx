import React from "react";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { useMovie } from "../contexts/movieContext";
import Header from "../ui/Header";
import List from "../ui/List";
import Note from "../features/favorites/Note";
import Filter from "../features/favorites/Filter";
import Content from "../features/favorites/Content";

function Favorites() {
  const { favorites, showNote } = useMovie();

  return (
    <div className={`${!favorites.length >= 0 || showNote ? "h-screen" : ""}`}>
      <Header />
      <Content />
      {showNote && <Note />}
      {!showNote && <List type="favorites" movie={favorites} />}
    </div>
  );
}

export default Favorites;
