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
    ACT_PLACE: "",
    PROGRAM_NO: 0,
    PRO_PLACE: "",
    CAPACITY: 0,
    GRADE: 0,
    INTRODUCTION: "",
    COLLEGE: "",
    DEADLINE: 0,
    MENTO_NO: 0,
    DETAIL: "",
    MAJOR: "",
    NAME: "",
    RECRUIT_FINISH_DATE: "",
    RECRUIT_START_DATE: "",
    SUBJECT: "",
    WEEKS: [],
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
