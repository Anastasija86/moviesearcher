import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: rgba(255, 255, 255, 0.811);
  font-size: 16px;
  display: flex;
  align-items: center;
  vertical-align: middle;
  background-color: rgba(5, 66, 44, 1);
  height: 1.75rem;
  bottom: 0;
  width: 100%;
  padding-left: 4rem;
`;

function Footer() {
  return <Text>©{new Date().getFullYear()} </Text>;
}
export { Footer };
