import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { setCookie } from "../../utils/setCookie";
import { toast } from "react-toastify";
interface userObject {
  USER_NO: number | null;
  user_gb: string;
  error: number | null;
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
  object: { USER_NO: null, user_gb: "MENTEE", error: null },
};
export const loginAsync = createAsyncThunk<loginSuccess, loginInfo>(
  "login",
  async (loginData, { rejectWithValue }) => {
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
      return data;
    } catch (e) {
      let error: any = e;
      console.log(error.response);
      if (!error.response) {
        throw error.response;
      }
      return rejectWithValue("No user found");
    }
  }
);
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logOut: (state) => {
      state.object = { USER_NO: null, user_gb: "MENTEE", error: null };
      toast.success("로그아웃 완료");
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
      console.log(payload.roles[0]);
      state.object.USER_NO = payload.memberId;
      state.object.user_gb =
        payload.roles[0] === "ROLE_MENTEE" ? "MENTEE" : "MENTO";
      toast.success("로그인성공");
      state.object.error = null;
    });
    builder.addCase(loginAsync.rejected, (state, { payload }) => {
      let errorCode: any = payload;
      if (errorCode) {
        state.object.error = errorCode.status;
      }
      toast.error("로그인 실패");
      console.log(state.object.error);
    });
  },
});
export const { logOut, changeUserGB } = loginSlice.actions;
export default loginSlice.reducer;
