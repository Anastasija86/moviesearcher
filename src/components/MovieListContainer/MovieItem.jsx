import React from "react";
import styled from "styled-components";
import { ProgressBar } from "components/uiPrimitives/ProgressBar";
import { Link } from "react-router-dom";
import { pathBoard } from "path";
import PropTypes from "prop-types";
import { FcGallery } from "react-icons/fc";

const ItemContainer = styled(Link)`
  list-style: none;
  display: block;
  margin: 5px 10px;
  border-radius: 15px;
  background-color: rgba(244, 244, 244, 1);
  border: 1px solid rgba(244, 244, 244, 1);
  padding-bottom: 10px;
  min-width: 140px;
  width: 180px;
  height: 320px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

const ImgContainer = styled.div`
  height: 260px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #84887f7a;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
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
  font-size: 14px;
  font-family: Lexend;
  line-height: 21px;
  letter-spacing: 0px;
`;

const MovieItem = React.memo(({ movie }) => {
  const { id, poster_path, title, release_date, vote_average } = movie;
  return (
    <ItemContainer to={`${pathBoard.PRODUCT}/${id}`}>
      <ImgContainer>
        {poster_path ? (
          <Img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        ) : (
          <FcGallery size={70} color="rgba(5, 66, 44, 1)" />
        )}
        <ProgressBar raiting={vote_average.toFixed(1)} />
      </ImgContainer>
      <div>
        <TextName>{title}</TextName>
        <TextData>({release_date.split("-")[0]})</TextData>
      </div>
    </ItemContainer>
  );
});
MovieItem.displayName = "MovieItem";

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
export { MovieItem };
