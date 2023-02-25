import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  currencyType: string,
  currencyOptions: string[],
};

const initialState:InitialState = {
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
