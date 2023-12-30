import { createContext, useContext, useReducer } from "react";

const MovieContext = createContext();
const initialState = {
  favorites: [],
  input: "",
  filterInput: "all",
  showNote: false,
  openSidebar: false,
  openMovieCategory: false,

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
        openMovieCategory: false,

        movieYear: "",
        movieVote: "",
      };
    case "movie/get/year":
      return {
        ...state,
        movieYear: action.payload,
        openMovieCategory: false,

        movieVote: "",
        movieGenre: "",
        movieGenreName: "",
      };
    case "movie/get/vote":
      return {
        ...state,
        movieVote: action.payload,
        openMovieCategory: false,

        movieGenre: "",
        movieYear: "",
        movieGenreName: "",
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
    // =================================================================================================//
    case "favorites/add":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "favorites/delete":
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };
    // =================================================================================================//
    case "filter/add":
      return {
        ...state,
        filterInput: action.payload,
      };

    case "note":
      return {
        ...state,
        showNote: !state.showNote,
      };
    case "add/mainInput":
      return {
        ...state,
        input: action.payload,
      };
    case "remove/mainInput":
      return {
        ...state,
        input: "",
      };
    case "openSidebar":
      return {
        ...state,
        openSidebar: true,
      };
    case "closeSidebar":
      return {
        ...state,
        openSidebar: false,
      };
    case "openMovieCategory":
      return {
        ...state,
        openMovieCategory: !state.openMovieCategory,
      };
    case "closeCategory":
      return {
        ...state,
        openMovieCategory: false,
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
      input,
      discoverPage,
      genrePage,
      openMovieCategory,
      yearPage,
      filterInput,
      showNote,
      favorites,
      openSidebar,
      votePage,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

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
        openSidebar,
        genrePage,
        yearPage,
        filterInput,
        votePage,
        favorites,
        showNote,
        input,
        openMovieCategory,
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
