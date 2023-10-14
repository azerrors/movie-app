const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "961f07487fe060051d66e8185e535b32";

export async function getMovieDetails(id) {
  const res = await fetch(`${BASE_URL}movie/${id}?api_key=${KEY}`);
  const data = await res.json();
  return data;
}

export async function getSeriesDetails(id) {
  const res = await fetch(`${BASE_URL}tv/${id}?api_key=${KEY}`);
  const data = await res.json();
  return data;
}
