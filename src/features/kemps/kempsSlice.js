import { createSlice } from "@reduxjs/toolkit";

export const kempsSlice = createSlice({
  name: "Kemps",
  initialState: {
    user: [],
    isAuth: false,
  },
  reducers: {
    adduser: (state, action) => {
      state.user = action.payload;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    deleteUser: (state, action) => {
      state.user = {};
    },
  },
});

export const { adduser, setIsAuth, deleteUser } = kempsSlice.actions;
export default kempsSlice.reducer;
