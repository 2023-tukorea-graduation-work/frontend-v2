import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState: any = [];

export const AccessProgressAsync = createAsyncThunk<any>(
  "AccessProgress",
  async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: "/notice/program/1",
      });
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const programProgressSlice = createSlice({
  name: "programProgress",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AccessProgressAsync.fulfilled, (state, { payload }) => {
      state = payload;
      console.log("리스트로드 성공");
    });
  },
});
export default programProgressSlice.reducer;
