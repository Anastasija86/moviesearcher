import { requstMethods } from "apis/requestMethods";

const apiKey = process.env.REACT_APP_API_KEY;
const authorization = process.env.AUTHORIZATION;
const apiUrl = "https://api.themoviedb.org/3/";

async function fetchMovie(url) {
  const options = {
    method: requstMethods.GET,
    headers: {
      accept: "application/json",
      Authorization: authorization,
    },
  };
  try {
    const response = await fetch(`${apiUrl}${url}`, options);
    if (!response.ok) {
      throw new Error("Network response was not ok!");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    console.error(error);
    throw error;
  }
}

export async function getPopular(page) {
  return await fetchMovie(
    `movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
  );
}

export async function getDetailsById(movieId) {
  return await fetchMovie(`movie/${movieId}?api_key=${apiKey}&language=en-US`);
}

export async function getActorList(movieId) {
  return await fetchMovie(
    `movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
  );
}

export async function getReviews(movieId) {
  return await fetchMovie(
    `movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`
  );
}

export async function getTopRated(page) {
  return await fetchMovie(
    `movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`
  );
}

export async function getUpcoming(page) {
  return await fetchMovie(
    `movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`
  );
}

export async function getMovieListByName(page, name) {
  return await fetchMovie(
    `search/movie?api_key=${apiKey}&query=${name}&include_adult=false&language=en-US&page=${page}`
  );
}
