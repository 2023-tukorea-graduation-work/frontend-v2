import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {};

export const loadProfileProgramListAsync = createAsyncThunk<any, number | null>(
  "loadProfile",
  async (userId) => {
    const { data } = await axios({
      method: "get",
      url: `/member/my-page/${userId}`,
    });
    console.log(data);
    return data;
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loadProfileProgramListAsync.fulfilled,
      (state, { payload }) => {
        console.log("프로필 프로그램 리스트 불러오기 성공");
      }
    );
    builder.addCase(
      loadProfileProgramListAsync.rejected,
      (state, { payload }) => {
        console.log("프로필 프로그램 리스트 불러오기 실패");
      }
    );
  },
});
export default profileSlice.reducer;
