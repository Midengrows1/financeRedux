import { configureStore } from "@reduxjs/toolkit";
import financeReducer from "./FinanceSlice";
export default configureStore({
  reducer: {
    finances: financeReducer,
  },
});
