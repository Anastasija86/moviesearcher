import React from "react";
import styled from "styled-components";
import { pathBoard } from "path";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailsById } from "apis/movies/index";
import { BsFillHeartFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Tooltip } from "react-tooltip";

const Wrapper = styled.section`
  padding: 1rem 4.5rem;
  margin-top: 7.85rem;
  display: flex;
`;
const ImgContainer = styled.div`
  width: 23rem;
  height: 33rem;
`;
const ContantContainer = styled.div`
  width: 60%;
  padding-left: 2.5rem;
`;
const MainPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2rem;
`;
const GenreList = styled.div`
  display: flex;
  align-items: center;
`;
const GanreContainer = styled(GenreList)`
  vertical-align: middle;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;
const ActionContainer = styled(GenreList)`
  margin-bottom: 45px;
  size: 18px;
`;
const Dot = styled.span`
  margin-left: 8px;
  margin-right: 8px;
  background-color: #262626;
  width: 5px;
  height: 5px;
  border-radius: 50px;
`;
const IconContainer = styled.div`
  background-color: rgba(23, 175, 38, 1);
  border-radius: 50%;
  padding: 15px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  cursor: pointer;
  color: white;
`;
const ProgressBar = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 45px;
  font-size: small;
  font-weight: bold;
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
function timeConvert(time) {
  let min = time % 60;
  let hours = Math.floor(time / 60);
  return `${hours}h${min}m`;
}
const ActionIcons = [
  {
    name: "Mark as favorite",
    icon: <BsFillHeartFill />,
  },
  {
    name: "Add to watchlist",
    icon: <FaList />,
  },
  {
    name: "Rate",
    icon: <AiFillStar />,
  },
];

function Product() {
  const nestedLink = [
    {
      name: "Actors",
      path: pathBoard.actors,
    },
    {
      name: "Review",
      path: pathBoard.reviews,
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

  const location = useLocation();
  console.log(location);

  return (
    <Wrapper>
      <ImgContainer>
        <MainPicture
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="Movie poster"
        />
      </ImgContainer>
      <ContantContainer>
        {title && (
          <h1>
            {title} ({release_date?.slice(0, 4)})
          </h1>
        )}
        <GanreContainer>
          {genres &&
            genres.map(({ name }) => (
              <GenreList key={name}>
                <p>{name}</p>
                <Dot></Dot>
              </GenreList>
            ))}
          {runtime && <p>{timeConvert(runtime)}</p>}
        </GanreContainer>
        <ActionContainer>
          <ProgressBar>
            <CircularProgressbar
              values={[0, 20, 40, 60, 80, 100]}
              value={Math.round(vote_average * 10)}
              text={`${Math.round(vote_average * 10)}%`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                textColor: "white",
                pathColor: "white",
                backgroundColor: "rgba(23, 175, 38, 1)",
                trailColor: "transparent",
              })}
              strokeWidth={9}
            />
            <p>User score</p>
          </ProgressBar>
          {ActionIcons.map((item, index) => (
            <IconContainer key={index} id={`icon-${index}`}>
              {item.icon}
              <Tooltip anchorSelect={`#icon-${index}`} content={item.name} />
            </IconContainer>
          ))}
        </ActionContainer>
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
