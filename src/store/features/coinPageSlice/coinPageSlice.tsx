import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Currency {
  usd: number;
  gbp: number;
  eur: number;
  btc: number;
}

interface Price {
  usd: number;
  gbp: number;
  eur: number;
}

interface Date {
  usd: string;
  gbp: string;
  eur: string;
}

type Coin = {
  genesis_date?: string;
  description?: { en: string };
  links?: {
    blockchain_site: string[];
    homepage: string;
  };
  id?: string;
  image?: { small: string };
  name?: string;
  symbol?: string;
  market_data?: {
    ath: Currency;
    atl: Currency;
    atl_date: Date;
    ath_date: Date;
    current_price: Currency;
    market_cap: Currency;
    fully_diluted_valuation: Price;
    high_24h: Price;
    total_volume: Price;
    circulating_supply: string;
    max_supply: string;
  };
};

type InitialState = {
  isLoading: boolean;
  coinData: Coin;
  error: string;
};
  
const initialState: InitialState = {
  isLoading: false,
  coinData: {},
  error: "",
};

export const fetchData = createAsyncThunk(
  "coinPage/fetchData",
  async (coinid: string | undefined) => {
    return fetch(
      `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
    ).then((response) => response.json());
  }
);

const coinPageSlice = createSlice({
  name: "coinPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchData.fulfilled,
      (state, action: PayloadAction<Coin>) => {
        state.isLoading = false;
        state.coinData = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.coinData = {};
      state.error = action.error.message || "Somthing went wrong";
    });
  },
});

export default coinPageSlice.reducer;
