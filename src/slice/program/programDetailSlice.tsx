import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
interface itemBox {
  programId: number;
  programPlace: string;
  capacity: number;
  grade: number;
  introduce: string;
  mentorId: number | null;
  detail: string;
  major: string;
  mentorName: string;
  recruitFinishDate: string;
  recruitStartDate: string;
  subject: string;
  programWeeks: object[];
  institution: string;
  lesson: string;
  programFinishDate: string;
  programStartDate: string;
}
interface initial {
  details: itemBox;
}
export const loadItemDetailAsync = createAsyncThunk<itemBox, number>(
  "loadItemDetail",
  async (number) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `/program/${number}`,
      });
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);
const initialState: initial = {
  details: {
    programId: 1,
    programPlace: "",
    capacity: 5,
    grade: 4,
    introduce: "",
    mentorName: "123",
    mentorId: 24,
    detail: "안녕하세요 저희 프로그램입니다",
    major: "경영학과",
    recruitFinishDate: "2023-05-02",
    recruitStartDate: "2023-05-01",
    subject: "프로그램",
    programWeeks: [
      { content: "프로그램 주차에대한 자세한설명" },
      { content: "프로그램 주차에대한 자세한설명" },
      { content: "프로그램 주차에대한 자세한설명" },
      { content: "프로그램 주차에대한 자세한설명" },
    ],
    institution: "",
    lesson: "",
    programFinishDate: "",
    programStartDate: "",
  },
};

export const programListDetalSlice = createSlice({
  name: "programlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadItemDetailAsync.fulfilled, (state, { payload }) => {
      state.details = payload;
      console.log(state.details);
    });
  },
});
export default programListDetalSlice.reducer;
