import { useSelector } from "react-redux";
import { getUsers } from "state/selectors/users";

function useCurrentUserData(email, password) {
  const users = useSelector(getUsers);

  const currentUser = users.find(
    (user) => user.email === email && user.password === password
  );
  return currentUser;
}

export { useCurrentUserData };
