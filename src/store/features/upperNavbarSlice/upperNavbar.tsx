import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  dropDownData: [],
  searchInput: "",
  error: "",
};

export const fetchUpperNavbarData = createAsyncThunk(
  "upperNavbar/fetchUpperNavbarData",
  async () => {
    return fetch(`https://api.coingecko.com/api/v3/coins/`).then((response) =>
      response.json()
    );
  }
);

const coinPageSlice = createSlice({
  name: "upperNavbar",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUpperNavbarData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUpperNavbarData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dropDownData = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUpperNavbarData.rejected, (state, action) => {
      state.isLoading = false;
      state.dropDownData = [];
      state.error = action.error.message  || "Somthing went wrong";
    });
  },
  reducers: {
    handleInputChange: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { handleInputChange } = coinPageSlice.actions;
export default coinPageSlice.reducer;
