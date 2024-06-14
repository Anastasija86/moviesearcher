
import { useSelector } from "react-redux";

function useCurrentUserData(email, password) {

    const users = useSelector((state) => state.register.users);
        
    const currentUser = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log('UserHook', currentUser)
    return currentUser;
};

export { useCurrentUserData };