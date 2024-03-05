import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: rgba(113, 115, 120, 1);
  font-size: 16px;
  display: flex;
  align-items: center;

  vertical-align: middle;
  background-color: rgba(26, 30, 38, 1);
  height: 3rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-left: 4rem;
`;

export default function Footer() {
  return (
      <Text>© {(new Date().getFullYear())} Top Shelf BC. All Rights Reserved. </Text>
  );
}
