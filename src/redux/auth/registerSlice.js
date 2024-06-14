import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  users: [{ id: '12345', name: "Ivan", email: "ivan@gmail.com", password: "1234567890" }],
  currentUser: {},
  isLoggedIn: false,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      const newUser = {
        id: nanoid(),
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
      state.users.push(newUser);
    },
    addCurrenUser: (state, action) => {
      const newUser = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email
      };
      state.currentUser= newUser;
    },
    toggleIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    }
  },
});

export const { addUsers, toggleIsLoggedIn, addCurrenUser } =
  registerSlice.actions;

export default registerSlice.reducer;
