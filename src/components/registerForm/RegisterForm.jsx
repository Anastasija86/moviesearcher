import { useDispatch, useSelector } from "react-redux";
import {
  addUsers,
  toggleIsLoggedIn,
  addCurrenUser,
} from "../../redux/auth/registerSlice";
import { useNavigate } from "react-router-dom";
import { pathBoard } from "../../path";
import { InputForm } from "./InputForm";
import { useState } from "react";

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(state => state.register.users);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPasswordFirst, setUserPasswordFirst] = useState("");
  const [userPasswordSecond, setUserPasswordSecond] = useState("");

  const params = [
    { type: "name", value: userName },
    { type: "email", value: userEmail },
    { type: "password", value: userPasswordFirst },
    { type: "Repeat password", value: userPasswordSecond },
  ];

  const isEqual = (param1, param2) => {
    return param1 === param2 ? true : false;
  };
  const isEmail = (email) => {
    return users.some((user=>user.email===email))
  };

  const handleChange = (e) => {
    const type = e.currentTarget.name;
    const value = e.currentTarget.value;
    switch (type) {
      case "email":
        setUserEmail(value);
        break;
      case "name":
        setUserName(value);
        break;
      case "password":
        setUserPasswordFirst(value);
        break;
      case "Repeat password":
        setUserPasswordSecond(value);
        break;
      default:
        console.log(`There are no related type with ${type}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEqual(userPasswordFirst, userPasswordSecond)) {
      alert('Passwords do not mutch');
      return;
    } else if (isEmail(userEmail)) {
      alert(`Email ${userEmail} already exist`);
      return;
    }
  
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData);
    const newUser = dispatch(addUsers(userData));
    dispatch(addCurrenUser(newUser.payload));
    dispatch(toggleIsLoggedIn(true));
    navigate(pathBoard.home);
  };

  return (
    <InputForm
      params={params}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      title="Create an account"
      button="Register"
      questionText="Already have an account"
      authorizationType="Log in"
      link={pathBoard.authentication}
    />
  );
}

export { RegisterForm };
