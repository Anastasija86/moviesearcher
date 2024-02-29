// import styled from "./SearchBar.module.css";

import styled from "styled-components";
import magnifier from "../components/assets/headerIcons/magnifier.svg";

const Form = styled.form`
  height: 48px;
  display: flex;
  width: fit-content;
`;
const Input = styled.input`
  border: 1px solid rgb(234, 232, 232);
  border-radius: 25px;
  width: max-content;
  min-width: 270px;
  height: 48px;
  color: rgb(136, 137, 140);
  padding-left: 24px;
  padding-right: 24px;
  margin-right: 8px;
  cursor: pointer;
  &:hover, &:focus{
    border: 2px solid rgba(23, 175, 38, 1);
    outline: none;
    }
  }
`;
const Button = styled.button`
  background-color: rgba(23, 175, 38, 1);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  padding-block: 0;
  padding-inline: 0;
  cursor: pointer;
`;

export default function SearchBar() {
  return (
    <>
      <Form className={styled.form}>
        <Input className={styled.input} placeholder="Search"></Input>
        <Button className={styled.button} type="button">
          <img src={magnifier} alt="Search button" />
        </Button>
      </Form>
    </>
  );
}
