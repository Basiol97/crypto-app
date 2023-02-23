import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";

type Data = {
  prices?: number[];
  total_volumes?: number[];  
};

interface InitialState { 
  isLoading: boolean,
  chartsData: Data,
  error: string,
}

const initialState : InitialState  = {
  isLoading: false,
  chartsData: {},
  error: "",
};

export const fetchData = createAsyncThunk(
  "chartsData/fetchData",
  async (currencyType:string) => {
    return fetch(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currencyType}&days=180&interval=daily`
    ).then((response) => response.json());
  }
);

const chartsSlice = createSlice({
  name: "chartsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<Data>) => {
      state.isLoading = false;
      state.chartsData = action.payload;
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.chartsData = {};
      state.error = action.error.message  || "Somthing went wrong";
    });
  },
});

export default chartsSlice.reducer;
