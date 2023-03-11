import { configureStore } from "@reduxjs/toolkit";
import kempsReducer from "./features/kemps/kempsSlice";

export default configureStore({
  reducer: {
    kemps: kempsReducer,
  },
});
