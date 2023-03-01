import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  coinsData: [],
  error: "",
};

interface Arg {
  currencyType: string;
  CoinPage: number;
  order: string | null;
}

export const fetchData = createAsyncThunk(
  "coinList/fetchData",
  async ({ currencyType, CoinPage, order }: Arg) => {
    return fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyType}&order=${order}&per_page=${
        CoinPage === 1 ? 10 : CoinPage === 2 ? 20 : CoinPage === 3 ? 30 : 30
      }&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    ).then((response) => response.json());
  }
);

const coinListSlice = createSlice({
  name: "coinList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.coinsData = action.payload;
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.coinsData = [];
      state.error = action.error.message || "Somthing went wrong";
    });
  },
});

export default coinListSlice.reducer;
