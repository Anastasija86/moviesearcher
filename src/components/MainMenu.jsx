import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { pathBoard } from "path";

const Wrapper = styled.section`
  border-top: 2px solid rgba(244, 244, 244, 1);
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  padding-top: 1 rem;
  padding-bottom: 1 rem;
  align-items: center;
`;
const Item = styled(NavLink)`
  font-size: 16px;
  color: rgba(70, 73, 79, 1);
  cursor: pointer;
  text-decoration: none;

  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: auto;
  margin-right: auto;

  &:hover,
  &:focus,
  &.active {
    text-decoration: underline;
    color: rgba(5, 66, 44, 1);
  }
`;

export default function MainMenu() {
  return (
    <Wrapper>
      <Item to={pathBoard.home}>Home</Item>
      <Item to={pathBoard.catalog}>Catalog</Item>
      <Item to={pathBoard.contact}>Contacts</Item>
    </Wrapper>
  );
}
