import styled from "./SearchBar.module.css";
import magnifier from "../../assets/headerIcons/magnifier.svg";

export default function SearchBar() {
  return (
    <>
      <form className={styled.form}>
        <input className={styled.input} placeholder='Search'></input>
        <button className={styled.button} type="button">
          <span>
            <img src={magnifier} alt="Search button" />
          </span>
        </button>
      </form>
    </>
  );
}
