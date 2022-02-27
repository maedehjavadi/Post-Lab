import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
  users: any;
  ErrorMassage: string;
}
const initialState: UsersState = {
  users: [
    {
      id: 1,
      firstName: "farshad",
      lastName: "shabani",
      userName: "farshadshabani69",
      password: "123456",
    },
  ],
  ErrorMassage: "",
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<any>) {
      if (
        state.users.find((item) => item.userName === action.payload.userName)
      ) {
        state.ErrorMassage = "userName is not valid";
      } else {
        state.users.push(action.payload);
      }
    },
  },
});
export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
