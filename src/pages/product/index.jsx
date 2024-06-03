import React from "react";
import styled from "styled-components";
import { pathBoard } from "path";
import { NavLink, Outlet} from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailsById } from "apis/movies/index";
import { Poster } from "pages/product/Poster";
import { Genres } from "pages/product/Genres";
import { ActionIcons } from "pages/product/ActionIcons";

const Wrapper = styled.section`
  padding: 1rem 4.5rem;
  margin-top: 7.85rem;
  display: flex;
`;
const ContantContainer = styled.div`
  width: 60%;
  padding-left: 2.5rem;
`;
const ChildrenContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;

  border-top: 2px solid rgba(244, 244, 244, 1);
  border-bottom: 2px solid rgba(244, 244, 244, 1);
  padding-top: 10px;
  padding-bottom: 10px;
`;
const NestedLink = styled(NavLink)`
  margin-right: 20px;
  text-decoration: none;
  color: black;
  &:hover,
  &:focus,
  &.active {
    text-decoration: underline;
    color: rgba(5, 66, 44, 1);
  }
`;


function Product() {
  const nestedLink = [
    {
      name: "Actors",
      path: pathBoard.PRODUCT_ACTORS,
    },
    {
      name: "Review",
      path: pathBoard.PRODUCT_REVIEWS,
    },
  ];

  const [movieDetails, setMovieDetails] = useState({});
  async function getMovieDetails(id) {
    await getDetailsById(id).then((response) => setMovieDetails(response));
  }

  useEffect(() => {
    getMovieDetails(157336);
  }, []);
  const {
    poster_path,
    title,
    release_date,
    genres,
    runtime,
    overview,
    vote_average,
  } = movieDetails;

  return (
    <Wrapper>
      <Poster path={poster_path} />
      <ContantContainer>
        {title && (
          <h1>
            {title} ({release_date?.slice(0, 4)})
          </h1>
        )}
        <Genres genres={genres} runtime={runtime} />
        <ActionIcons raiting={vote_average} />
        <h3>Overview</h3>
        <p>{overview}</p>
        <ChildrenContainer>
          {nestedLink.map(({ name, path }, index) => (
            <NestedLink key={index} to={path}>
              {name}
            </NestedLink>
          ))}
        </ChildrenContainer>
        <Outlet />
      </ContantContainer>
    </Wrapper>
  );
}

export { Product };
