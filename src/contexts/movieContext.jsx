import { createContext, useContext, useReducer } from "react";

const MovieContext = createContext();
const initialState = {
  movieGenreName: "",
  movieGenre: "",
  movieYear: "",
  movieVote: "",
  movieInput: "",
  movieIsGenre: false,
  movieIsYear: false,
  movieIsVote: false,
  discoverPage: 1,
  genrePage: 1,
  yearPage: 1,
  votePage: 1,
};
function reducer(state, action) {
  switch (action.type) {
    case "movie/getInputValue":
      return {
        ...state,
        movieInput: action.payload,
      };
    case "movie/get/genre":
      return {
        ...state,
        movieGenre: action.payload.genre,
        movieGenreName: action.payload.genreName,
      };
    case "movie/get/year":
      return {
        ...state,
        movieYear: action.payload,
      };
    case "movie/get/vote":
      return {
        ...state,
        movieVote: action.payload,
      };
    // =================================================================================================//
    case "movie/increase/page/discover":
      return {
        ...state,
        discoverPage: state.discoverPage + 1,
      };
    case "movie/increase/page/genre":
      return {
        ...state,
        genrePage: state.genrePage + 1,
      };
    case "movie/increase/page/year":
      return {
        ...state,
        yearPage: state.yearPage + 1,
      };
    case "movie/increase/page/vote":
      return {
        ...state,
        votePage: state.votePage + 1,
      };

    case "movie/decrease/page/vote":
      return {
        ...state,
        votePage: state.votePage - 1,
      };
    case "movie/decrease/page/year":
      return {
        ...state,
        yearPage: state.yearPage - 1,
      };

    case "movie/decrease/page/genre":
      return {
        ...state,
        genrePage: state.genrePage - 1,
      };
    case "movie/decrease/page/discover":
      return {
        ...state,
        discoverPage: state.discoverPage - 1,
      };
    // =================================================================================================//
    case "movie/show/year":
      return {
        ...state,
        movieIsYear: true,
        movieIsGenre: false,
        movieIsVote: false,

        movieVote: "",
        movieGenre: "",
        movieGenreName: "",
      };
    case "movie/show/genre":
      return {
        ...state,
        movieIsGenre: true,
        movieIsYear: false,
        movieIsVote: false,

        movieYear: "",
        movieVote: "",
      };
    case "movie/show/vote":
      return {
        ...state,
        movieIsGenre: false,
        movieIsYear: false,
        movieIsVote: true,

        movieGenre: "",
        movieYear: "",
        movieGenreName: "",
      };
    case "movie/reset/genre":
      return {
        ...state,
        movieGenre: "",
        movieGenreName: "",
      };
    case "movie/reset/year":
      return {
        ...state,
        movieYear: "",
      };
    case "movie/reset/vote":
      return {
        ...state,
        movieVote: "",
      };
    default:
      return {
        ...state,
      };
  }
}
function MovieProvider({ children }) {
  const [
    {
      movieInput,
      movieGenre,
      movieYear,
      movieGenreName,
      movieVote,
      movieIsGenre,
      movieIsVote,
      movieIsYear,
      discoverPage,
      genrePage,
      yearPage,
      votePage,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  console.log(movieYear);
  return (
    <MovieContext.Provider
      value={{
        dispatch,
        movieInput,
        movieGenre,
        movieGenreName,
        movieYear,
        movieVote,
        movieIsGenre,
        movieIsVote,
        movieIsYear,
        discoverPage,
        genrePage,
        yearPage,
        votePage,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

function useMovie() {
  const context = useContext(MovieContext);
  return context;
}

export { MovieProvider, useMovie };
