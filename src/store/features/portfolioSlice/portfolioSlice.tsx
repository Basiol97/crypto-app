import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";

interface NewItem {
  id: string;
  last_updated: string;
  amount: number;
  image?: string; 
}

interface InitialState {
  isLoading: boolean,
  error: string,
  isOpen: boolean,
  newPortfolio: [],
  portfolio: NewItem[],
  value: {
    id: string,
    last_updated: string,
    amount: number,
  },
}

const initialState:InitialState = {
  isLoading: false,
  error: "",
  isOpen: false,
  newPortfolio: [],
  portfolio: [],
  value: {
    id: "",
    last_updated: "",
    amount: 0,
  },
};

export const fetchDefaultCoins = createAsyncThunk(
"portfolio/fetchDefaultCoins",
  async (currencyType:string) => {
    return fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyType}&ids=bitcoin%2C%20ethereum&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    ).then((response) => response.json());
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDefaultCoins.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDefaultCoins.fulfilled, (state, action) => {
      state.isLoading = false;
      state.portfolio = action.payload;
      state.error = "";
    });
    builder.addCase(fetchDefaultCoins.rejected, (state, action) => {
      state.isLoading = false;
      state.portfolio = [];
      state.error = action.error.message || "Somthing went wrong";
    });
  },
  reducers: {
    togglePopup: (state) => {
      state.isOpen = !state.isOpen;
    },
    chooseCoinId: (state, action) => {
      state.value.id = action.payload;
    },
    chooseAmount: (state, action) => {
      state.value.amount = action.payload;
    },
    handleSubmit: (state, action:PayloadAction<NewItem>) => {
      state.portfolio.push(action.payload);
    },
  },
});

export const {
  togglePopup,
  chooseCoinId,
  chooseAmount,
  handleSubmit,
} = portfolioSlice.actions;
export default portfolioSlice.reducer;


