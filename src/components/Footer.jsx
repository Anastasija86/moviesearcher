import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgba(26, 30, 38, 1);
  height: 64px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
`;
const Text = styled.p`
  color: rgba(113, 115, 120, 1);
  font-size: 16px;
`;

export default function Footer() {
    return (
      <Wrapper>
          <Text>© 2022 Top Shelf BC. All Rights Reserved. </Text>
      </Wrapper>
    );
}