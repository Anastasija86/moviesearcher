import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pathBoard } from "path";
import { useState } from "react";
import { InputForm } from "components/registerForm/InputForm";
import { addCurrenUser, toggleIsLoggedIn } from "state/auth/registerSlice";
import { useCurrentUserData } from "components/registerForm/GetUserData";

const defaultForm = {
  email: "",
  password: "",
};

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [userForm, setUserForm] = useState(defaultForm);
  const currentUser = useCurrentUserData(userForm.userForm, userForm.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      dispatch(addCurrenUser(currentUser));
      dispatch(toggleIsLoggedIn(true));
      navigate(pathBoard.home);
    } else {
      alert("There are no users with such email and password");
    }
  };

  return (
    <InputForm
      params={Object.keys(defaultForm)}
      handleSubmit={handleSubmit}
      title="Log in"
      button="Log in"
      questionText="Are you new to moviesearcher?"
      authorizationType="Create an account"
      link={pathBoard.registration}
    />
  );
}

export { LoginForm };
