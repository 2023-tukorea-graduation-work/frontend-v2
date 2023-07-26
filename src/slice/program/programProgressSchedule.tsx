import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

interface ScheduleList {
  content: string;
  scheduleStartDatetime: string;
  scheduleFinishDatetime: string;
}
interface ScheduleForm {
  memberId: number;
  content: string;
  scheduleStartDatetime: string;
  scheduleFinishDatetime: string;
}
const initialState: Array<ScheduleList> = [];

export const loadScheduleAsync = createAsyncThunk<Array<ScheduleList>>(
  "loadSchedule",
  async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: "/schedule/1",
      });
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const uploadScheduleAsync = createAsyncThunk<any, ScheduleForm>(
  "uploadSchedule",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "/schedule",
        data: {
          memberId: formData.memberId,
          content: `${formData.content}`,
          scheduleStartDatetime: `${formData.scheduleStartDatetime}`,
          scheduleFinishDatetime: `${formData.scheduleFinishDatetime}`,
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

export const programScheduleSlice = createSlice({
  name: "programSchedule",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadScheduleAsync.fulfilled, (state, { payload }) => {
      state = payload;
      console.log("스케쥴 리스트로드 성공");
    });
    builder.addCase(uploadScheduleAsync.rejected, (state) => {
      console.log("스케쥴 업로드 실패");
    });
  },
});
export default programScheduleSlice.reducer;
