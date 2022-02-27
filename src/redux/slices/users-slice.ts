import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
  users: any;
  currentUser: any;
  ErrorMessage:string;
}

const initialState: UsersState = {
  users: [
    {
      id: 1,
      firstName: "maedeh",
      lastName: "javadi",
      userName: "mjd",
      password: "12345678",
      ErrorMessage: "",
    },
    {
      id: 2,
      firstName: "farshad",
      lastName: "shabani",
      userName: "fsh",
      password: "12345678",
      ErrorMessage: "",
    },
  ],
  currentUser: {},
  ErrorMessage:''
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    catchUserName(state, action: PayloadAction<any>) {
      console.log(
        state.users.findIndex(
          (user) => user.userName === action.payload.username
        )
      );
      // console.log(Index)
      if (
        state.users.findIndex(
          (user) => user.userName === action.payload.username
        ) == 0 &&
        state.users.findIndex(
          (user) => user.password === action.payload.password
        ) == 0
      ) {
        state.currentUser= state.users.find((item)=> item.userName===action.payload.username)
        state.ErrorMessage=''
        console.log(state.currentUser)
      } else {
         state.ErrorMessage='UserName or Password is not correct'
         console.log(state.ErrorMessage)
      }
    },
  },
});
export const { catchUserName } = usersSlice.actions;
export default usersSlice.reducer;
