import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";

const Wrapper = styled.div`
  width: 23rem;
  height: 33rem;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2rem;
`;

function Poster({path}) {
  return (
    <Wrapper>
      <Image
        src={`https://image.tmdb.org/t/p/w500${path}`}
        alt="Movie poster"
      />
    </Wrapper>
  );
}

Poster.propTypes = {
  path: PropTypes.string,
};

export { Poster };
