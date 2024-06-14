import { LoginForm } from "components/registerForm/LoginForm";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 3rem 4.5rem;
  margin-top: 7.85rem;
  background-color: rgba(242, 246, 244, 1);
  display: flex;
  justify-content: center;
`;

function LogIn() {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
}

export { LogIn };
