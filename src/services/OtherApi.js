const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "961f07487fe060051d66e8185e535b32";

export async function getMovieGenres() {
  const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${KEY}`);
  const { genres } = await res.json();
  return genres;
}

export async function getSerieGenres() {
  const res = await fetch(`${BASE_URL}/genre/tv/list?api_key=${KEY}`);
  const { genres } = await res.json();
  return genres;
}
export async function getBelongToCollection(collection_id) {
  const res = await fetch(
    `${BASE_URL}collection/${collection_id}?api_key=${KEY}`,
  );
  const data = await res.json();
  return data;
}
export async function getMultiSearch(query) {
  const res = await fetch(`${BASE_URL}search/multi?api_key=${KEY}&query=${query}`);
  const {results} = await res.json();
  return results;
}
// https://api.themoviedb.org/3/search/multi?api_key=961f07487fe060051d66e8185e535b32&query=harry