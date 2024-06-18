import React from "react";
import { RegisterForm } from "components/registerForm/RegisterForm";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 1rem;
  background-color: rgba(242, 246, 244, 1);
  display: flex;
  justify-content: center;
  height: 100%;
`;

function Registration() {
  return (
    <Wrapper>
      <RegisterForm />
    </Wrapper>
  );
}

export { Registration };
