import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
interface userObject {
  USER_NO: number | null;
  user_gb: string;
}
interface loginSuccess {
  message: string;
  object: userObject;
  status: string;
}
interface loginInfo {
  email: string;
  password: string;
  user_gb: string;
}
const initialState: loginSuccess = {
  message: "",
  object: { USER_NO: null, user_gb: "MENTEE" },
  status: "",
};
export const loginAsync = createAsyncThunk<loginSuccess, loginInfo>(
  "login",
  async (loginData) => {
    try {
      const { data } = await axios({
        url: "/api/v1/login",
        method: "post",
        data: {
          email: `${loginData.email}`,
          password: `${loginData.password}`,
          user_gb: `${loginData.user_gb}`,
        },
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logOut: (state) => {
      state.message = "";
      state.object = { USER_NO: null, user_gb: "" };
      state.status = "";
    },
    changeUserGB: (state, { payload }) => {
      state.object.user_gb = payload;
      console.log(state.object.user_gb);
      // state.object.user_gb === "MENTO"
      //   ? (state.object.user_gb = "MENTEE")
      //   : (state.object.user_gb = "MENTO");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, { payload }) => {
      state.message = payload.message;
      state.status = payload.status;
      state.object.USER_NO = payload.object.USER_NO;
      state.object.user_gb = payload.object.user_gb;
    });
  },
});
export const { logOut, changeUserGB } = loginSlice.actions;
export default loginSlice.reducer;
