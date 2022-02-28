import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
  users: any;
  currentUser?: any;
  ErrorMessage: string;
}

const initialState: UsersState = {
  users: [
    {
      id: 1,
      firstName: "maedeh",
      lastName: "javadi",
      userName: "mjd",
      password: "12345678",
    },
    {
      id: 2,
      firstName: "farshad",
      lastName: "shabani",
      userName: "fsh",
      password: "12345678",
    },
  ],
  ErrorMessage: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
   catchUserName(state, action: PayloadAction<any>) {
      const user = state.users.find(
        (user) =>
          user.userName === action.payload.username &&
          user.password === action.payload.password
      );
      if (user) {
        state.currentUser = {...user,postLikes: []};
        state.ErrorMessage = "";
        console.log(state.currentUser);
      } else {
        state.ErrorMessage = "UserName or Password is not correct";
        console.log(state.ErrorMessage);
      } 
    },
    addUser(state, action: PayloadAction<any>) {
        state.users.push(action.payload);
    },
  },
});
export const { catchUserName, addUser } = usersSlice.actions;
export default usersSlice.reducer;
