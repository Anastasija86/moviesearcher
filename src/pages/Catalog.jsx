import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 100px 20px;
  height: 100%;
  width: 100%;
  background-color: #f2f6f4;
`;
const CartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 280px;
  height: 400px;
`;
const CartImg = styled.img`
  width: 280px;
  height: 240px;
`;

const TextName = styled.p`
  font-size: small;
  font-weight: bold;
  margin-top: 10px;
  padding: 5px;
  text-align: center;
`;

const TextData = styled.p`
  text-align: center;
  margin-bottom: 5px;
  color: #9d9ea2;
  font-size: 14px;
  font-family: Lexend;
  line-height: 21px;
  letter-spacing: 0px;
`;

const Rating = styled.p`
  text-align: center;
  margin-bottom: 20px;
  color: #1a1e26;
  font-weight: 500;
  font-size: 12px;
`;

const apiKey = process.env.REACT_APP_API_KEY;

export default function Catalog() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Wrapper>
      <CartWrapper>
        {movies.map((movie, index) => (
          <CartContainer key={index}>
            <CartImg
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <TextName>{movie.title}</TextName>
            <TextData>({movie.release_date.split("-")[0]})</TextData>
            <Rating>Rating: {movie.vote_average.toFixed(1)}</Rating>
          </CartContainer>
        ))}
      </CartWrapper>
    </Wrapper>
  );
}

export { Catalog };
