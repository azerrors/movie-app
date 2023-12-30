const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "961f07487fe060051d66e8185e535b32";

export async function getTrendingTv(filter = "day" ) {
  const res = await fetch(`${BASE_URL}trending/tv/${filter}?api_key=${KEY}`);
  const { results } = await res.json();
  return results;
}

export async function getTrendingTvWithPage(page) {
  const res = await fetch(
    `${BASE_URL}trending/tv/day?api_key=${KEY}&page=${page}`,
  );
  const { results } = await res.json();
  return results;
}
export async function getPopulerTv() {
  const res = await fetch(`${BASE_URL}tv/popular?api_key=${KEY}`);
  const { results } = await res.json();
  return results;
}

export async function getPopulerTvWithPage(page) {
  const res = await fetch(`${BASE_URL}tv/popular?api_key=${KEY}&page=${page}`);
  const { results } = await res.json();
  return results;
}

//================================================================
export async function getDiscoveredSeries(page) {
  const res = await fetch(`${BASE_URL}discover/tv?api_key=${KEY}&page=${page}`);
  const { results } = await res.json();
  return results;
}

export async function getSerieByGenre(genre, page) {
  const res = await fetch(
    `${BASE_URL}discover/tv?api_key=${KEY}&with_genres=${genre}&page=${page}`,
  );
  const { results } = await res.json();
  return results;
}

export async function getSerieByYear(year) {
  const res = await fetch(
    `${BASE_URL}discover/tv?api_key=${KEY}&first_air_date.gte=${year}-01-01&first_air_date.lte=${year}-12-31`,
  );
  const { results } = await res.json();
  return results;
}

export async function getSerieByVoteAverage(vote) {
  const res = await fetch(
    `${BASE_URL}discover/tv?api_key=${KEY}&vote_average.gte=${vote}&vote_average.lte=${vote}`,
  );
  const { results } = await res.json();
  return results;
}

export async function getSearchedSerie(query) {
  const res = await fetch(`${BASE_URL}search/tv?api_key=${KEY}&query=${query}`);
  const { results } = await res.json();
  return results;
}

//================================================================
export async function getSerieCast(id) {
  const res = await fetch(`${BASE_URL}tv/${id}/credits?api_key=${KEY}`);
  const { cast } = await res.json();
  return cast;
}
export async function getSerieVideo(id) {
  const res = await fetch(`${BASE_URL}tv/${id}/videos?api_key=${KEY}`);
  const { results } = await res.json();
  return results;
}
export async function getSerieImage(id) {
  const res = await fetch(`${BASE_URL}tv/${id}/images?api_key=${KEY}`);
  const { backdrops } = await res.json();
  return backdrops;
}
export async function getSerieSimilar(id) {
  const res = await fetch(`${BASE_URL}tv/${id}/similar?api_key=${KEY}`);
  const { results } = await res.json();
  return results;
}
//====================================================================

export async function getEpisodes(id, season) {
  console.log(id);
  const res = await fetch(
    `${BASE_URL}tv/${id}/season/${season}?api_key=${KEY}`,
  );
  const data = await res.json();
  return data;
}

export async function getAiringTodaySeries() {
  const res = await fetch(`${BASE_URL}tv/airing_today?api_key=${KEY}`);
  const { results } = await res.json();
  return results;
}
export async function getOnTheAirSeries() {
  const res = await fetch(`${BASE_URL}tv/on_the_air?api_key=${KEY}`);
  const { results } = await res.json();
  return results;
}
