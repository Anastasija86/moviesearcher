import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  background-color: rgba(242, 246, 244, 1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: cover;
`;
const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const DefaultImg = styled.div`
  background-color: ${(props) => props.color};
  color: white;
  font-weight: bold;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
`;

  const getRandomColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
  };

function AuthorAvatar({ author, path }) {
  return (
    <Wrapper>
      {path ? (
        <AvatarImg
          src={`https://image.tmdb.org/t/p/w500${path}`}
          alt="Autor avatar"
        />
      ) : (
        <DefaultImg color={getRandomColor()}>
          {author[0].toUpperCase()}
        </DefaultImg>
      )}
    </Wrapper>
  );
}

AuthorAvatar.propTypes = {
  author: PropTypes.string,
  path: PropTypes.string
};


export { AuthorAvatar };