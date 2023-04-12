import { combineReducers, configureStore } from "@reduxjs/toolkit";
import leftbarReducer from "../features/leftBarSlice/leftBarSlice";
import programListReducer from "../features/programListSlice/programListSlice";
import programDetailReducer from "../features/programListDetailSlice/programListDetailSlice";
import loginReducer from "../features/loginSlice/loginSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";

const reducers = combineReducers({
  leftBar: leftbarReducer,
  programList: programListReducer,
  programDetail: programDetailReducer,
  login: loginReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage: storageSession,
  whitelist: ["login"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;