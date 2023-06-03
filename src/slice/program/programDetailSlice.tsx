import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
interface itemBox {
  ACT_PLACE: string;
  PROGRAM_NO: number;
  PRO_PLACE: string;
  CAPACITY: number;
  GRADE: number;
  INTRODUCTION: string;
  COLLEGE: string;
  DEADLINE: number;
  MENTO_NO: number;
  DETAIL: string;
  MAJOR: string;
  NAME: string;
  RECRUIT_FINISH_DATE: string;
  RECRUIT_START_DATE: string;
  SUBJECT: string;
  WEEKS: object[];
}
interface initial {
  detail: itemBox;
}
export const loadItemDetailAsync = createAsyncThunk<itemBox, number>(
  "loadItemDetail",
  async (number) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `/api/v1/program/${number}`,
      });
      return data.object;
    } catch (e) {
      console.log(e);
    }
  }
);
const initialState: initial = {
  detail: {
    ACT_PLACE: "경기도 시흥시",
    PROGRAM_NO: 1,
    PRO_PLACE: "",
    CAPACITY: 5,
    GRADE: 4,
    INTRODUCTION: "안녕하세요 저희 프로그램 입니다",
    COLLEGE: "홍길동",
    DEADLINE: 3,
    MENTO_NO: 24,
    DETAIL: "안녕하세요 저희 프로그램입니다",
    MAJOR: "경영학과",
    NAME: "홍길동",
    RECRUIT_FINISH_DATE: "2023-05-02",
    RECRUIT_START_DATE: "2023-05-01",
    SUBJECT: "프로그램",
    WEEKS: [
      { DETAIL: "프로그램 주차에대한 자세한설명" },
      { DETAIL: "프로그램 주차에대한 자세한설명" },
      { DETAIL: "프로그램 주차에대한 자세한설명" },
      { DETAIL: "프로그램 주차에대한 자세한설명" },
    ],
  },
};

export const programListDetalSlice = createSlice({
  name: "programlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadItemDetailAsync.fulfilled, (state, { payload }) => {
      state.detail = payload;
      console.log(state.detail);
    });
  },
});
export default programListDetalSlice.reducer;
