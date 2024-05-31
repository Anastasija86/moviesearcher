import { useDispatch} from "react-redux";
import { toggleIsLoggedIn } from "../../redux/auth/registerSlice";
import { useNavigate } from "react-router-dom";
import { pathBoard } from "../../path";
import { useState } from "react";
import { InputForm } from "./InputForm";
import { addCurrenUser } from "../../redux/auth/registerSlice";
import { useCurrentUserData } from 'components/registerForm/GetUserData';

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const params = [
    { type: "email", value: userEmail },
    { type: 'password', value: userPassword }
  ];
  const currentUser = useCurrentUserData(userEmail, userPassword);

  const handleChange = (e) => {
    const type = e.currentTarget.name;
    const value = e.currentTarget.value;
    type === 'email' ? setUserEmail(value) : setUserPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      dispatch(addCurrenUser(currentUser));
      dispatch(toggleIsLoggedIn(true));
      navigate(pathBoard.home);
    } else {
      alert("There are no users with such email and password");
    };
  };

  return (
    <InputForm
      params={params}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      title="Log in"
      button="Log in"
      questionText="Are you new to moviesearcher"
      authorizationType="Create an account"
      link={pathBoard.registration}
    />
  );
}

export { LoginForm };
