import { createSlice } from "@reduxjs/toolkit";

interface Button {
  id: string;
  label: string;
  periodInDays: number;
  status: boolean;
}

interface InitialState {
  buttonsLabels: Button[];
}

const initialState: InitialState = {
  buttonsLabels: [
    { id: "1", label: "1w", periodInDays: 7, status: false },
    { id: "2", label: "1m", periodInDays: 30, status: false },
    { id: "3", label: "3m", periodInDays: 90, status: true },
    { id: "4", label: "6m", periodInDays: 180, status: false },
  ],
};

export const dataPeriodDisplaySlice = createSlice({
  name: "periodDisplay",
  initialState,
  reducers: {
    handleClick: (state, action) => {
      state.buttonsLabels = state.buttonsLabels.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, status: !item.status };
        } else {
          return { ...item, status: false };
        }
      });
    },
  },
});

export const { handleClick } = dataPeriodDisplaySlice.actions;
export default dataPeriodDisplaySlice.reducer;
