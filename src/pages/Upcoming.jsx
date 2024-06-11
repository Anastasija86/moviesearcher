import React from "react";
import { getUpcoming } from "apis/movies/index";
import { MovieListContainer } from "components/MovieListContainer";

function Upcoming() {
  return <MovieListContainer method={getUpcoming} />;
}
export { Upcoming };
