import { createContext, useContext, useReducer } from "react";

const SerieContext = createContext();
const initialState = {
  episodes: [],
  serieGenreName: "",
  serieGenre: "",
  serieYear: "",
  serieVote: "",
  serieInput: "",
  serieIsGenre: false,
  serieIsYear: false,
  serieIsVote: false,
  showWindow: false,

  windowInput: "",
  discoverPage: 1,
  genrePage: 1,
  yearPage: 1,
  votePage: 1,
};
function reducer(state, action) {
  switch (action.type) {
    case "serie/getInputValue":
      return {
        ...state,
        serieInput: action.payload,
      };
    case "serie/get/genre":
      return {
        ...state,
        serieGenre: action.payload.genre,
        serieGenreName: action.payload.genreName,

        serieYear: "",
        serieVote: "",
      };
    case "serie/get/year":
      return {
        ...state,
        serieYear: action.payload,

        serieVote: "",
        serieGenre: "",
        serieGenreName: "",
      };
    case "serie/get/vote":
      return {
        ...state,
        serieVote: action.payload,

        serieGenre: "",
        serieYear: "",
        serieGenreName: "",
      };
    // =================================================================================================//
    case "serie/increase/page/discover":
      return {
        ...state,
        discoverPage: state.discoverPage + 1,
      };
    case "serie/increase/page/genre":
      return {
        ...state,
        genrePage: state.genrePage + 1,
      };
    case "serie/increase/page/year":
      return {
        ...state,
        yearPage: state.yearPage + 1,
      };
    case "serie/increase/page/vote":
      return {
        ...state,
        votePage: state.votePage + 1,
      };

    case "serie/decrease/page/vote":
      return {
        ...state,
        votePage: state.votePage - 1,
      };
    case "serie/decrease/page/year":
      return {
        ...state,
        yearPage: state.yearPage - 1,
      };

    case "serie/decrease/page/genre":
      return {
        ...state,
        genrePage: state.genrePage - 1,
      };
    case "serie/decrease/page/discover":
      return {
        ...state,
        discoverPage: state.discoverPage - 1,
      };
    // =================================================================================================//
    case "serie/show/year":
      return {
        ...state,
        serieIsYear: true,
        serieIsGenre: false,
        serieIsVote: false,

        serieVote: "",
        serieGenre: "",
        serieGenreName: "",
      };
    case "serie/show/genre":
      return {
        ...state,
        serieIsGenre: true,
        serieIsYear: false,
        serieIsVote: false,

        serieYear: "",
        serieVote: "",
      };
    case "serie/show/vote":
      return {
        ...state,
        serieIsGenre: false,
        serieIsYear: false,
        serieIsVote: true,

        serieGenre: "",
        serieYear: "",
        serieGenreName: "",
      };
    case "serie/reset/genre":
      return {
        ...state,
        serieGenre: "",
        serieGenreName: "",
      };
    case "serie/reset/year":
      return {
        ...state,
        serieYear: "",
      };
    case "serie/reset/vote":
      return {
        ...state,
        serieVote: "",
      };
    case "showWindow":
      return {
        ...state,
        showWindow: !state.showWindow,
        windowInput: action.payload.input,
        episodes: action.payload.episodes,
      };
    default:
      return {
        ...state,
      };
  }
}
function SerieProvider({ children }) {
  const [
    {
      serieInput,
      serieGenre,
      serieYear,
      serieGenreName,
      serieVote,
      serieIsGenre,
      serieIsVote,
      showWindow,
      serieIsYear,
      discoverPage,
      windowInput,
      genrePage,
      episodes,
      yearPage,
      votePage,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  console.log(episodes);

  return (
    <SerieContext.Provider
      value={{
        dispatch,
        serieInput,
        serieGenre,
        serieGenreName,
        episodes,
        serieYear,
        serieVote,
        serieIsGenre,
        serieIsVote,
        serieIsYear,
        windowInput,
        discoverPage,
        genrePage,
        showWindow,
        yearPage,
        votePage,
      }}
    >
      {children}
    </SerieContext.Provider>
  );
}

function useSerie() {
  const context = useContext(SerieContext);
  return context;
}

export { SerieProvider, useSerie };
