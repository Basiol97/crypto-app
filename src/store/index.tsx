import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import currencyTypeReducer from "store/features/currencySlice/currencyTypeSlice";
import themeModeReducer from "store/features/ThemeModeSlice/ThemeModeSlice";
import periodDisplayReducer from "store/features/dataDisplayPeriodSlice/dataDisplayPeriod";
import chartsReducer from "store/features/chartsSlice/chartsSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  currencyType: currencyTypeReducer,
  chartsData: chartsReducer,
  periodDisplay: periodDisplayReducer,
  theme: themeModeReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 