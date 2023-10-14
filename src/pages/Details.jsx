import React from "react";
import { useSearchParams } from "react-router-dom";
import MovieDetailSection from "../features/details/movie/MovieDetailSection";
import SerieDetailSection from "../features/details/series/SerieDetailSection";
import PeopleDetailSection from "../features/details/people/PeopleDetailSection";

function Details() {
  const [searchParam] = useSearchParams();

  const movieID = searchParam.get("movieId");
  const serieID = searchParam.get("serieId");
  const peopleId = searchParam.get("peopleId");

  // =================================================================

  if (movieID) {
    return <MovieDetailSection movieID={movieID} />;
  }

  if (serieID) {
    return <SerieDetailSection serieID={serieID} />;
  }
  if (peopleId) {
    return <PeopleDetailSection peopleId={peopleId} />;
  }
}

export default Details;
