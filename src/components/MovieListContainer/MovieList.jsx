import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MovieItem } from "components/MovieListContainer/MovieItem";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
`;

function Movies({ movies }) {
  return (
    <Wrapper>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Wrapper>
  );
}

Movies.propTypes = {
  movies: PropTypes.array,
};

export { Movies };
