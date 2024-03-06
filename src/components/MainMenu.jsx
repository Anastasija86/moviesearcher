import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { pathBoard } from "../path";

const Wrapper = styled.section`
  border-top: 2px solid rgba(244, 244, 244, 1);
  display: flex;
  justify-content: center;
  padding-top: 1 rem;
  padding-bottom: 1 rem;
`;
const Item = styled(Link)`
  margin-left: 120px;
  font-size: 16px;
  color: rgba(70, 73, 79, 1);
  cursor: pointer;
  text-decoration: none;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export default function MainMenu() {
  const menuItems = [
    { name: "Home", path: pathBoard.home },
    { name: "Catalog", path: pathBoard.catalog },
    { name: "Contact", path: pathBoard.contact },
  ];

  return (
    <Wrapper>
      {menuItems.map((item) => (
        <Item key={item.name} to={item.path}>
          {item.name}
        </Item>
      ))}
    </Wrapper>
  );
}
