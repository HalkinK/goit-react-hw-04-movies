import axios from "axios";

const API_KEY = "612ad9e57f61526bfd55d457eca2466c";
const BASE_URL = "https://api.themoviedb.org/3";

// function fetchMovies(url) {
//   const URL = url;

//   return fetch(URL)
//     .then((responce) => responce.json())
//     .then((data) => data.results);
// }

export function fetchMovieDetails(movieId) {
  return axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.data);
}

async function fetchMovies(url, config = {}) {
  const responce = await fetch(url, config);

  return responce.ok
    ? await responce.json().then((data) => data.results)
    : Promise.reject(new Error("Not found"));
}

function fetchMoviesTrend(page = 1) {
  const trendMoviesUrl = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${page}`;

  return fetchMovies(trendMoviesUrl);
}

function fetchMoviesByQuery(searchQuery, page = 1) {
  const searchQueryUrl = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${searchQuery}`;
  return fetchMovies(searchQueryUrl);
  // .responce.json()
  // .then((data) => data.results);
}

// function fetchMovieDetails(movie_id) {
//   const detailsUrl = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
//   return fetchMovies(detailsUrl);
//   //   return fetch(detailsUrl).then((response) => response.data);
// }

function fetchMovieCast(movie_id) {
  const castUrl = `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`;
  return fetch(castUrl)
    .then((responce) => responce.json())
    .then((data) => data.cast);
}

function fetchMovieReviews(movie_id, page = 1) {
  const reviewsUrl = `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`;
  return fetchMovies(reviewsUrl);
}

const api = {
  fetchMoviesTrend,
  fetchMoviesByQuery,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
};

export default api;
