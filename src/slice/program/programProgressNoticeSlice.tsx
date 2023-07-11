import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

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
  "loadNoticeListAsync",
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
  "uploadNoticetAsync",
  async (formData) => {
    try {
      const data = await axios({
        method: "post",
        url: "/notice",
        data: {},
      });
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const programNoticeSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadNoticeListAsync.fulfilled, (state, { payload }) => {
      state = payload;
      console.log("리스트로드 성공");
    });
    builder.addCase(uploadNoticetAsync.fulfilled, (state, { payload }) => {
      console.log("업로드 성공");
    });
    builder.addCase(uploadNoticetAsync.rejected, (state) => {
      console.log("업로드 실패");
      console.log("ㅣㅣㅣㅣㅣㅣ");
    });
  },
});
export default programNoticeSlice.reducer;
