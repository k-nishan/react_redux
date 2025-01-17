import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

/* createSlice need 3 props
    1. name for that slice
    2. initial state of the users
    3. reducer functions    */
export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    /* first reducer function with name setUsers and 2 props(state, action) 
            1. state = current state of the users
            2. action = which contain the update values in payload */
    setUsers: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    deleteUsers: (state, action) => {
      state.users = state.users.filter(
        (user, index) => index != action.payload
      );
    },
  },
});

/* destructure and exporting the actions */
export const { setUsers, deleteUsers } = userSlice.actions;

/* exporting all the reducers */
export default userSlice.reducer;
