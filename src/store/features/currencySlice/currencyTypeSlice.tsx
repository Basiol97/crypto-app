import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencyType: "usd",
  currencyOptions: ["USD", "GBP", "EUR"],
};

export const currencyTypeSlice = createSlice({
  name: "currencyType",
  initialState,
  reducers: {
    handleCurrencyChange: (state, action) => {
      state.currencyType = action.payload;
    },
  },
});

export const { handleCurrencyChange } = currencyTypeSlice.actions;

export default currencyTypeSlice.reducer;
