import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  border-top: 2px solid rgba(244, 244, 244, 1);
  display: flex;
  justify-content: center;
`;
const Item = styled.p`
  margin-left: 40px;
  font-size: 16px;
  color: rgba(70, 73, 79, 1);
  cursor: pointer;
`;

export default function MainMenu() {
    return (
      <Wrapper>
        <Item>Home</Item>
        <Item>Products</Item>
        <Item>Contacts</Item>
        <Item>Blog</Item>
      </Wrapper>
    );
}