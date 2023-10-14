const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "961f07487fe060051d66e8185e535b32";

export async function getPeopleDetail(id) {
  const res = await fetch(`${BASE_URL}person/${id}?api_key=${KEY}`);
  const data = await res.json();
  return data;
}

export async function getPeopleMovieCredits(id) {
  const res = await fetch(`${BASE_URL}person/${id}/movie_credits?api_key=${KEY}`);
  const {cast} = await res.json();
  return cast;
}
