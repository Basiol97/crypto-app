import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import currencyTypeReducer from "store/features/currencySlice/currencyTypeSlice";
import themeModeReducer from "store/features/ThemeModeSlice/ThemeModeSlice";
import coinListReducer from "store/features/cryptoTablelistSlice/cryptoTableList";
import periodDisplayReducer from "store/features/dataDisplayPeriodSlice/dataDisplayPeriod";
import chartsReducer from "store/features/chartsSlice/chartsSlice";
import coinPageReducer from "store/features/coinPageSlice/coinPageSlice";
import portfolioSliceReducer from "store/features/portfolioSlice/portfolioSlice";
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
  coinList: coinListReducer,
  theme: themeModeReducer,
  coinPage: coinPageReducer,
  portfolio: portfolioSliceReducer,
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
