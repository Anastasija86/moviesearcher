import React, { useState, useEffect } from "react";
import styled from "styled-components";
<<<<<<< HEAD
=======
import img1 from "components/images/img1.jpg";
import img2 from "components/images/img2.jpg";
import img3 from "components/images/img3.jpg";
import left from "components/images/left.png";
import right from "components/images/right.png";
>>>>>>> 99dac7c (fixed comments)

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
<<<<<<< HEAD
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  max-width: 1200px;
  width: 100%;
`;

const CartContainer = styled.li`
  list-style: none;
  display: block;
  margin: 5px 10px;
  border-radius: 15px;
  background-color: rgba(244, 244, 244, 1);
  border: 1px solid rgba(244, 244, 244, 1);
  padding-bottom: 10px;
  overflow: hidden;
  min-width: 140px;
  width: 160px;
  height: 346px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const CartImg = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
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
=======
  flex-direction: row;
  justify-content: space-around;
`;

const ArrowLeft = styled.button`
  position: absolute;
  left: 110px;
  bottom: 240px;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;
const ArrowRight = styled.button`
  position: absolute;
  right: 110px;
  bottom: 240px;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;

const ImgLeft = styled.img`
  width: 20px;
  height: 20px;
`;
const ImgRight = styled.img`
  width: 20px;
  height: 20px;
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
const TextCategory = styled.p`
  margin-top: 15px;
  text-align: center;
  color: #9d9ea2;
  font-weight: 300;
>>>>>>> 99dac7c (fixed comments)
  font-size: 14px;
  font-family: Lexend;
  line-height: 21px;
  letter-spacing: 0px;
`;
<<<<<<< HEAD

const Rating = styled.p`
  text-align: center;
  margin-bottom: 20px;
  color: #1a1e26;
  font-weight: 500;
  font-size: 12px;
=======
const TextCart = styled.h3`
  text-align: center;
  color: #1a1e26;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
>>>>>>> 99dac7c (fixed comments)
  font-family: Lexend;
  letter-spacing: 0px;
`;

<<<<<<< HEAD
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
=======
const Button = styled.button`
  padding: 0px, 24px, 0px, 24px;
  background-color: #17af26;
  border: none;
  cursor: pointer;
  width: 128px;
  height: 40px;
  border-radius: 100px;
  color: #ffffff;
  font-family: Lexend;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0px;
`;

export default function Catalog() {
  return (
    <Wrapper>
      <CartWrapper>
        <CartContainer>
          <ArrowLeft>
            <ImgLeft src={left} alt="left" />
          </ArrowLeft>
          <CartImg src={img1} alt="img1" />
          <TextCategory>FLOWER</TextCategory>
          <TextCart>2 Oz Deal Watermelon Zkittles + Purple Gushers</TextCart>
          <Button>Add to Cart</Button>
        </CartContainer>
        <CartContainer>
          <CartImg src={img2} alt="img2" />
          <TextCategory>FLOWER</TextCategory>
          <TextCart>2 Oz Deal Ahi Tuna + Master Tuna</TextCart>
          <Button>Add to Cart</Button>
        </CartContainer>
        <CartContainer>
          <ArrowRight>
            <ImgRight src={right} alt="right" />
          </ArrowRight>
          <CartImg src={img3} alt="img3" />
          <TextCategory>CONCENTRATES</TextCategory>
          <TextCart>Mix And Match Shatter/Budder 28g (4 X 7G)</TextCart>
          <Button>Add to Cart</Button>
        </CartContainer>
>>>>>>> 99dac7c (fixed comments)
      </CartWrapper>
    </Wrapper>
  );
}
export { Catalog };
