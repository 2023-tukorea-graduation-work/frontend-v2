import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

interface QuestionList {
  questionId: number;
  question: string;
  answer: string;
  answerCreatedAt: Date;
  answerUpdatedAt: Date;
}
interface QustionForm {
  menteeId: number;
  programId: number;
  question: string;
}
const initialState: Array<QuestionList> = [];

export const loadQuestionListAsync = createAsyncThunk<Array<QuestionList>>(
  "loadQuestionList",
  async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: "/question/program/1",
      });
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const uploadQuestiontAsync = createAsyncThunk<any, QustionForm>(
  "uploadQuestiont",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "/question",
        data: {
          menteeId: 1,
          programId: 1,
          question: "123",
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

export const programQuestionSlice = createSlice({
  name: "programQuestion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadQuestionListAsync.fulfilled, (state, { payload }) => {
      state = payload;
      console.log("질문리스트 로드 성공");
    });
    builder.addCase(loadQuestionListAsync.rejected, (state) => {
      console.log("질문 리스트실패");
    });
  },
});
export default programQuestionSlice.reducer;
