import { createSlice } from "@reduxjs/toolkit";
const financeSlice = createSlice({
  name: "finances",
  initialState: {
    finances: [],
    money: "",
    category: "Income",
    type: "salary",
    date: "",
  },
  reducers: {
    selectCurrentOption(state, action) {
      switch (action.payload) {
        case "income":
          state.category = action.payload;
          break;
        case "expenses":
          state.category = action.payload;
          break;
        case "salary":
          state.type = action.payload;
          break;
        case "food":
          state.type = action.payload;
          break;
        case "deposit":
          state.type = action.payload;
          break;
      }
    },

    setMoney(state, action) {
      if (+action.payload) {
        state.money = action.payload;
      } else {
        state.money = "";
      }
    },
    ShowDate(state, action) {
      state.date = action.payload;
    },
    addIndicator(state, action) {
      console.log(state.date);
      if (state.money != "" && state.date != "") {
        state.finances.push({
          category: state.category,
          type: state.type,
          money: state.money,
          date: state.date,
        });
      }
      state.money = "";
    },
    clearIndicators(state, action) {
      state.finances = [];
    },
  },
});
export const {
  selectCurrentOption,
  setMoney,
  addIndicator,
  clearIndicators,
  ShowDate,
} = financeSlice.actions;
export default financeSlice.reducer;
