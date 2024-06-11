import React from "react";
import { getMovieListByName } from "apis/movies/index";
import { MovieListContainer } from "components/MovieListContainer/index";
import { useParams } from "react-router-dom";

function Search() {
  const params = useParams();
  const movieName = params.name;
  return (
    <MovieListContainer method={getMovieListByName} movieName={movieName} />
  );
}
export { Search };
