import React from "react";
import styled from "styled-components";
import { Input } from "components/SearchBar";
import { Link } from "react-router-dom";
import { Button } from "components/uiPrimitives/Button";
import PropTypes from "prop-types";

const Wrapper = styled.form`
  border: 1px solid rgb(234, 232, 232);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 15px;
  padding: 25px;
`;
const Title = styled.h1`
  margin-left: auto;
  margin-right: auto;
  color: rgba(5, 66, 44, 1);
  font-size: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;
const FormItem = styled(Input)`
  margin-bottom: 15px;
  width: 200px;
  height: 35px;
  display: block;
  border-radius: 15px;
  color: rgba(5, 66, 44, 1);
  &:hover,
  &:focus {
    background-color: rgba(242, 246, 244, 1);
  }
`;
const Text = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;
const RegisterButton = styled.div`
  display: flex;
  justify-content: center;
`;

const LogInLink = styled(Link)`
  margin-left: 10px;
  display: flex;
  justify-content: center;
`;
const Label = styled.label`
  color: rgb(136, 137, 140);
`;

function InputForm({
  params,
  handleSubmit,
  title,
  button,
  questionText,
  authorizationType,
  link,
}) {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Title>{title}</Title>
      {params.map((param) => (
        <Label key={param}>
          {capitalize(param)}
          <FormItem type={param === "name" ? "text" : param} name={param} />
        </Label>
      ))}
      <RegisterButton>
        <Button type="submit">{button}</Button>
      </RegisterButton>
      <Text>{questionText}</Text>
      <LogInLink to={link}>{authorizationType}</LogInLink>
    </Wrapper>
  );
}
InputForm.propTypes = {
  params: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func,
  title: PropTypes.string,
  button: PropTypes.string,
  questionText: PropTypes.string,
  authorizationType: PropTypes.string,
  link: PropTypes.string,
};

export { InputForm };
