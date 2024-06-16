import React from "react";
import { getTopRated } from "apis/movies/index";
import { MovieListContainer } from "components/MovieListContainer";

function TopRated() {
  return <MovieListContainer method={getTopRated} />;
}
export { TopRated };
