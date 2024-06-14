import React from "react";
import { RegisterForm } from "components/registerForm/RegisterForm";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 1rem;
  margin-top: 7.85rem;
  background-color: rgba(242, 246, 244, 1);
  display: flex;
  justify-content: center;
`;

function Registration() {
  return (
    <Wrapper>
      <RegisterForm />
    </Wrapper>
  );
}

export { Registration };
