import React from "react";
import { useMovie } from "../../contexts/movieContext";
import Loader from "../../ui/Loader";
import List from "../../ui/List";

function MovieInputSection({ searchMovie, searchedMovieLoading }) {
  const { movieInput } = useMovie();
  return (
    <div>
      {movieInput && <List type="list2" data={searchMovie} />}
      {searchedMovieLoading && (
        <div className="mt-10 flex h-screen items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default MovieInputSection;
