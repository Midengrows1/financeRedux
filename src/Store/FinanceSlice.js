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
          return (state.category = action.payload);
        case "expenses":
          return (state.category = action.payload);
        case "salary":
          return (state.type = action.payload);
        case "food":
          return (state.type = action.payload);
        case "deposit":
          return (state.type = action.payload);
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
