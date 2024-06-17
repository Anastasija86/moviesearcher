import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Spinner } from "components/uiPrimitives/Spinner";
import { Movies } from "components/MovieListContainer/MovieList";
import { LoadMoreButton } from "components/uiPrimitives/LoadMoreButton";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  height: 100%;
  width: 100%;
  background-color: #f2f6f4;
`;

function MovieListContainer({ method, movieName }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const previousMovieName = useRef(movieName);

  async function getMovies() {
    try {
      setLoading(true);
      const response = await method(page, movieName);
      setMovies((prev) => [...prev, ...response.results]);
      setTotalPage(response.total_pages);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (previousMovieName.current !== movieName) {
      setMovies([]);
      setPage(1);
    }
    previousMovieName.current = movieName;
  }, [movieName]);

  useEffect(() => {
    getMovies();
  }, [page, movieName]);

  const handleLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Wrapper>
      {loading && <Spinner />}
      {!loading && movies.length > 0 && <Movies movies={movies} />}
        {" "}
        {!loading && page < totalPage && (
          <LoadMoreButton onClick={handleLoadMoreClick} />
        )}
    </Wrapper>
  );
}
MovieListContainer.propTypes = {
  method: PropTypes.func.isRequired,
  movieName: PropTypes.string,
};

export { MovieListContainer };
