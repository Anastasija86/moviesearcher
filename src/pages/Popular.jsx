import React from "react";
import { getPopular } from "apis/movies/index";
import { MovieListContainer } from "components/MovieListContainer/index";

function Popular() {
  return <MovieListContainer method={getPopular} />;
}
export { Popular };
