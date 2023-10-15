const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "961f07487fe060051d66e8185e535b32";

export async function getRatedMovies() {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${KEY}`);
  const { results } = await res.json();
  return results;
}

export async function getRatedMoviesWithPages() {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${KEY}`);
  const { results } = await res.json();
  return results;
}

export async function getTrendingMovies() {
  const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
  const { results } = await res.json();
  return results;
}
export async function getTrendingMoviesWithPages(page) {
  const res = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${KEY}&page=${page}`,
  );
  const { results } = await res.json();
  return results;
}

export async function getPopularMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${KEY}`);
  const { results } = await res.json();
  return results;
}

export async function getPopularMoviesWithPages(page) {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${KEY}&page=${page}`,
  );
  const { results } = await res.json();
  return results;
}

export async function getUpcomingMovies() {
  const res = await fetch(`${BASE_URL}/movie/upcoming?api_key=${KEY}`);
  const { results } = await res.json();
  return results;
}
export async function getUpcomingMoviesByPage(page) {
  const res = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${KEY}&page=${page}`,
  );
  const { results } = await res.json();
  return results;
}

//================================================================
export async function getDiscoveredMovies(page) {
  const res = await fetch(
    `${BASE_URL}discover/movie?api_key=${KEY}&page=${page}`,
  );
  const { results } = await res.json();
  return results;
}
export async function getMoviesByGenre(genre, page) {
  const res = await fetch(
    `${BASE_URL}discover/movie?api_key=${KEY}&with_genres=${genre}&page=${page}`,
  );
  const { results } = await res.json();
  return results;
}
export async function getMoviesByYear(year) {
  const res = await fetch(
    `${BASE_URL}discover/movie?api_key=${KEY}&primary_release_date.gte=${year}-01-01&primary_release_date.lte=${year}-12-31`,
  );
  const { results } = await res.json();
  return results;
}
export async function getMoviesByVoteAverage(vote) {
  const res = await fetch(
    `${BASE_URL}discover/movie?api_key=${KEY}&vote_average.gte=${vote}&vote_average.lte=${vote}`,
  );
  const { results } = await res.json();
  return results;
}
export async function getSearchedMovies(query) {
  const res = await fetch(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${query}`,
  );
  const { results } = await res.json();
  return results;
}
// =================================================================
export async function getMovieCast(id) {
  const res = await fetch(`${BASE_URL}movie/${id}/credits?api_key=${KEY}`);
  const { cast } = await res.json();
  return cast;
}
export async function getMovieVideo(id) {
  const res = await fetch(`${BASE_URL}movie/${id}/videos?api_key=${KEY}`);
  const { results } = await res.json();
  return results;
}
export async function getMovieImage(id) {
  const res = await fetch(`${BASE_URL}movie/${id}/images?api_key=${KEY}`);
  const { backdrops } = await res.json();
  return backdrops;
}
export async function getMovieSimilar(id) {
  const res = await fetch(`${BASE_URL}movie/${id}/similar?api_key=${KEY}`);
  const { results } = await res.json();
  return results;
}
// =================================================================