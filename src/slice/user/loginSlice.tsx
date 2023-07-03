import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { setCookie } from "../../utils/setCookie";
interface userObject {
  USER_NO: number | null;
  user_gb: string;
}
interface loginSuccess {
  email: string;
  memberId: number;
  roles: Array<string>;
}

interface loginInfo {
  email: string;
  password: string;
}

interface initialStateType {
  object: userObject;
}
const initialState: initialStateType = {
  object: { USER_NO: null, user_gb: "MENTEE" },
};
export const loginAsync = createAsyncThunk<loginSuccess, loginInfo>(
  "login",
  async (loginData) => {
    try {
      const { data, headers } = await axios({
        url: "/auth/login",
        method: "post",
        data: {
          email: `${loginData.email}`,
          password: `${loginData.password}`,
        },
      });
      console.log("어세스토큰=", headers.authorization);
      console.log("리프레시토큰=", headers.refresh);
      setAuthToken(headers.authorization);
      setCookie("accessToken", headers.authorization);
      setCookie("refreshToken", headers.refresh);
      console.log(data);
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
      state.object = { USER_NO: null, user_gb: "" };
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
      state.object.USER_NO = payload.memberId;
      state.object.user_gb = payload.roles[0];
      console.log("로그인 성공");
    });
  },
});
export const { logOut, changeUserGB } = loginSlice.actions;
export default loginSlice.reducer;
