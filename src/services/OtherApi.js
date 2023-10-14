const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "961f07487fe060051d66e8185e535b32";
// https://api.themoviedb.org/3/genre/movie/list
export async function getMovieGenres() {
  const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${KEY}`);
  const {genres}  = await res.json();
  return genres;
}
export async function getSerieGenres() {
  const res = await fetch(`${BASE_URL}/genre/tv/list?api_key=${KEY}`);
  const {genres}  = await res.json();
  return genres;
}
