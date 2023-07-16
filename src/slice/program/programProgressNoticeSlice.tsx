import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

interface NoticeList {
  title: string;
  content: string;
}
interface NoticeForm {
  programId: number;
  title: string;
  content: string;
}
const initialState: Array<NoticeList> = [];

export const loadNoticeListAsync = createAsyncThunk<Array<NoticeList>>(
  "loadNoticeList",
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

export const uploadNoticetAsync = createAsyncThunk<any, NoticeForm>(
  "uploadNotice",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "/notice",
        data: {
          programId: 0,
          title: "test",
        },
      });
      console.log(data);
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

export const programNoticeSlice = createSlice({
  name: "programNotice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadNoticeListAsync.fulfilled, (state, { payload }) => {
      state = payload;
      console.log("리스트로드 성공");
    });
    builder.addCase(uploadNoticetAsync.rejected, (state) => {
      console.log("업로드 실패");
    });
  },
});
export default programNoticeSlice.reducer;
