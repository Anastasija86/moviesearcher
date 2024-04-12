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
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  max-width: 1200px;
  width: 100%;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px 20px;
  width: 280px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const CartImg = styled.img`
  width: 280px;
  height: 400px;
  border-radius: 10px 10px 0 0;
`;

const TextName = styled.p`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 5px;
  color: #1a1e26;
  font-weight: 500;
  font-size: 18px;
  font-family: Lexend;
  line-height: 21px;
  letter-spacing: 0px;
`;

const TextData = styled.p`
  text-align: center;
  margin-bottom: 10px;
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
  font-family: Lexend;
  letter-spacing: 0px;
`;

export default function Catalog() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=38afe4ec768518a2228d42cf16598485&language=en-US&page=1"
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
