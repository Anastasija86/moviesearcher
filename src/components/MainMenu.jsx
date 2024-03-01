import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  border-top: 2px solid rgba(244, 244, 244, 1);
  display: flex;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;
`;
const Item = styled(Link)`
  margin-left: 120px;
  font-size: 16px;
  color: rgba(70, 73, 79, 1);
  cursor: pointer;
  text-decoration: none;
`;

export default function MainMenu() {
  return (
    <Wrapper>
      <Item to="/">Home</Item>
      <Item to="/catalog">Catalog</Item>
      <Item to="/contacts">Contacts</Item>
    </Wrapper>
  );
}
