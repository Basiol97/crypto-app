import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Data {
  active_cryptocurrencies: number;
  ended_icos: number;
  market_cap_percentage: {
    btc: number;
    usd: number;
    eth: number;
  };
  total_market_cap: {
    btc: number;
    usd: number;
    eth: number;
  };
  total_volume: {
    btc: number;
    usd: number;
    eth: number;
  };
  markets: number;
}

interface Coin {
  data?: Data;
}

interface InitialState {
  isLoading: boolean;
  lowerNavbarData: Coin;
  error: string;
}

const initialState: InitialState = {
  isLoading: false,
  lowerNavbarData: {},
  error: "",
};

export const fetchLowerNavbarData = createAsyncThunk(
  "lowerNavbar/fetchLowerNavbarData",
  async () => {
    return fetch("https://api.coingecko.com/api/v3/global").then((response) =>
      response.json()
    );
  }
);

const lowernavBar = createSlice({
  name: "lowerNavbar",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchLowerNavbarData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLowerNavbarData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.lowerNavbarData = action.payload;
      state.error = "";
    });
    builder.addCase(fetchLowerNavbarData.rejected, (state, action) => {
      state.isLoading = false;
      state.lowerNavbarData = {};
      state.error = action.error.message || "Somthing went wrong";
    });
  },
  reducers: {},
});

export default lowernavBar.reducer;
