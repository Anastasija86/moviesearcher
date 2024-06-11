import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  box-sizing: border-box;
  max-width: 500px;
  min-width: 40px;
  min-height: 35px;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  align-items: center;
  background-color: rgba(5, 66, 44, 1);
  border: none;
  padding-block: 0;
  padding-inline: 0;
  cursor: pointer;
  border-radius: 50px;
  color: rgba(255, 255, 255, 0.71);
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 500ms ease;
  &:hover,
  &:focus,
  &.active {
    background-color: rgba(23, 175, 38, 1);
    color: white;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 0, 0, 0.5),
      0 0 25px rgba(0, 0, 0, 0.5);
  }
`;

function LoadMoreButton({ onClick }) {
  return <Button onClick={onClick}>Load more</Button>;
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func,
};

export { LoadMoreButton };
