import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: "",
  isAuth: false,
  currentUser: {},
  emails: ["ab@gmail.com", "xy@gmail.com"],
  users: [
    {
      name: "Durgesh Kumar Rai",
      email: "ab@gmail.com",
      password: "1234",
    },
    {
      name: "Kishan Kumar Rai",
      email: "xy@gmail.com",
      password: "1234",
    },
  ],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkAuth: (state) => {
      return state;
    },
    createUser: (state, { payload }) => {
      if (!state.emails.includes(payload.email)) {
        state.users.push(payload);
        state.emails.push(payload.email);
        state.currentUser = { ...payload };
        state.isAuth = true;
        state.error = "you are logged in";
      } else {
        state.error = "Email already exists";
      }
    },
    loginUser: (state, { payload }) => {
      if (state.emails.includes(payload.email)) {
        state.users.forEach((user) => {
          if (payload.email == user.email) {
            if (payload.password == user.password) {
              state.isAuth = true;
              state.currentUser = { ...user };
              state.error = "You are logged in";
            } else {
              state.error = "You entered wrong password";
            }
          }
        });
      } else {
        state.error = "You are not registered";
      }
    },
  },
});

export const { loginUser, checkAuth, createUser } = authSlice.actions;

export default authSlice.reducer;
