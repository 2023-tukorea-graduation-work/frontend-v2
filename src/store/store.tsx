import { combineReducers, configureStore } from "@reduxjs/toolkit";
import leftbarReducer from "../slice/common/leftBarSlice";
import programListReducer from "../slice/program/programListSlice";
import programDetailReducer from "../slice/program/programDetailSlice";
import loginReducer from "../slice/user/loginSlice";
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
import creationReducer from "../slice/user/creactionSlice";
import headerReducer from "../slice/common/headerSlice";
import programProgressNoticeReducer from "../slice/program/programProgressNoticeSlice";
import programCreationReducer from "../slice/program/programCreationSlice";
import programMaterialReducer from "../slice/program/programProgressMaterial";
import programQuestionReducer from "../slice/program/programProgressQuestion";
import programScheduleReducer from "../slice/program/programProgressSchedule";
import profileReducer from "../slice/user/profileSlice";
import programExamReducer from "../slice/program/programProgressExamSlice";
import progressReducer from "../slice/program/programProgress";
import programTaskReducer from "../slice/program/programProgressTask";
import adminReducer from "../slice/user/adminSlice";
const reducers = combineReducers({
  leftBar: leftbarReducer,
  programList: programListReducer,
  programDetail: programDetailReducer,
  programCreation: programCreationReducer,
  login: loginReducer,
  creation: creationReducer,
  header: headerReducer,
  programNotice: programProgressNoticeReducer,
  programMaterial: programMaterialReducer,
  programQuestion: programQuestionReducer,
  programSchedule: programScheduleReducer,
  profile: profileReducer,
  programProgressExam: programExamReducer,
  programProgress: progressReducer,
  programProgressTask: programTaskReducer,
  admin: adminReducer,
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
