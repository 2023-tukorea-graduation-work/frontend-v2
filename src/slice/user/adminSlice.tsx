import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
interface adminList {
  memberId: number;
  createdAt: string;
  email: string;
  name: string;
  age: number;
  college: string;
  major: string;
  lesson: string;
  filepath: string;
  isPassed: boolean;
}
interface initialStateType {
  list: Array<adminList>;
  list2: Array<adminList>;
}
const initialState: initialStateType = {
  list: [],
  list2: [],
};

export const adminLoadAsync = createAsyncThunk<any>(
  "adminLoadAsync",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `/admin`,
      });
      return data;
    } catch (e) {
      let error: any = e;
      console.log(error);
      if (!error.response) {
        throw error.response;
      }
      return rejectWithValue("No user found");
    }
  }
);

export const admindecisionAsync = createAsyncThunk<
  any,
  { id: number; type: boolean }
>("admindecisionAsync", async ({ id, type }) => {
  console.log(id, type);
  const { data } = await axios({
    method: "post",
    url: `/admin`,
    data: {
      mentorId: id,
      isPassed: type,
    },
  });
  return data;
});

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(adminLoadAsync.fulfilled, (state, payload) => {
      state.list = payload.payload;
      state.list2 = state.list.filter((item) => item !== null);
      state.list2.map((value) => {
        value.email = value.email.split("@")[0];
        if (value.createdAt) value.createdAt = value.createdAt.split("T")[0];
        return value;
      });
      console.log(state.list);
      console.log("리스트 조회 성공");
    });
    builder.addCase(adminLoadAsync.rejected, (state, { payload }) => {
      console.log("프로필 프로그램 리스트 불러오기 실패");
    });
  },
});
export default adminSlice.reducer;
