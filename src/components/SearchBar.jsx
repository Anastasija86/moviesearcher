import styled from "styled-components";
import magnifier from "components/assets/headerIcons/magnifier.svg";

const Form = styled.form`
  height: 1.9rem;
  display: flex;
  width: fit-content;
  justify-content: ;
  padding-left: 1rem;
`;
const Input = styled.input`
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
  &:hover, &:focus{
    border: 1px solid rgba(23, 175, 38, 1);
    outline: none;
    }
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
export default function SearchBar() {
  return (
    <>
      <Form>
        <Input placeholder="Search"></Input>
        <Button type="button">
          <Magnifier src={magnifier} alt="Search button" />
        </Button>
      </Form>
    </>
  );
}
