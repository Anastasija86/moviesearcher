import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import magnifier from "assets/headerIcons/magnifier.svg";
import { pathBoard } from "path";

const Form = styled.form`
  height: 1.9rem;
  display: flex;
  width: fit-content;
  padding-left: 1rem;
`;
export const Input = styled.input`
  border: 1px solid rgb(234, 232, 232);
  border-radius: 25px;
  width: max-content;
  min-width: 270px;
  height: 100%;
  color: rgb(136, 137, 140);
  padding-left: 24px;
  padding-right: 24px;
  margin-right: 8px;
  cursor: pointer;
  &:hover,
  &:focus {
    border: 1px solid rgba(23, 175, 38, 1);
    outline: none;
  }
`;
const Button = styled.button`
  background-color: rgba(23, 175, 38, 1);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  padding-block: 0;
  padding-inline: 0;
  cursor: pointer;
`;
const Magnifier = styled.img`
  width: 0.8rem;
  height: 2rem;
`;

function SearchBar() {
  const [movieName, setMovieName] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.currentTarget.value.toLowerCase();
    setMovieName(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`${pathBoard.search}/${movieName}`);
    setMovieName("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search"
        onChange={handleChange}
        value={movieName}
      ></Input>
      <Button type="submit">
        <Magnifier src={magnifier} alt="Search button" />
      </Button>
    </Form>
  );
}

export { SearchBar };
