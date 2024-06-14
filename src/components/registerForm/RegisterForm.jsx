import { useDispatch, useSelector } from "react-redux";
import {
  addUsers,
  toggleIsLoggedIn,
  addCurrenUser,
} from "state/auth/registerSlice";
import { useNavigate } from "react-router-dom";
import { pathBoard } from "path";
import { InputForm } from "components/registerForm/InputForm";
import { useState } from "react";
import { getUsers } from "state/selectors/users";

const deafultForm = {
  name: "",
  email: "",
  password: "",
  repeat_password: "",
};

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(getUsers);
  const [userForm, setUserForm] = useState(deafultForm);

  const isEqual = (param1, param2) => {
    return param1 === param2;
  };
  const isEmail = (email) => {
    return users.some((user) => user.email === email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEqual(userForm.password, userForm.repeat_password)) {
      alert("Passwords do not mutch");
      return;
    } else if (isEmail(userForm.email)) {
      alert(`Email ${userForm.email} already exist`);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData);
    setUserForm(userData);
    const newUser = dispatch(addUsers(userData));
    dispatch(addCurrenUser(newUser.payload));
    dispatch(toggleIsLoggedIn(true));
    navigate(pathBoard.home);
  };

  return (
    <InputForm
      params={Object.keys(deafultForm)}
      handleSubmit={handleSubmit}
      title="Create an account"
      button="Register"
      questionText="Already have an account?"
      authorizationType="Log in"
      link={pathBoard.authentication}
    />
  );
}

export { RegisterForm };
