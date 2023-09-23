import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { dateFormat } from "../../utils/dateFormat";

export interface Multiple {
  questionType: string;
  question: string;
  score: number;
  options: Array<MutlipleOption | null>;
  subjectAnswer: string | null;
}

export interface MutlipleOption {
  choices: string;
  isCorrect: boolean;
}

export interface Subjects {
  questionType: string;
  question: string;
  score: number;
  options: Array<MutlipleOption | null>;
  subjectAnswer: string | null;
}

export interface ExamForm {
  programId: number;
  examTitle: string;
  examStartTime: string;
  examFinishTime: string;
  isExamRegistered: boolean;
  examQuestionRegisterRequest: Array<any>;
}

export interface ExamList {
  examId: number;
  examTitle: string;
  examStartDate: string;
  examFinishDate: string;
}

interface initialStateType {
  Examlist: Array<ExamList>;
}
const initialState: initialStateType = {
  Examlist: [],
};

export const uploadExamAsync = createAsyncThunk<any, ExamForm>(
  "uploadExam",
  async (examData, { rejectWithValue }) => {
    console.log(examData);
    try {
      const { data, status } = await axios({
        method: "post",
        url: "/exam",
        data: {
          programId: `${examData.programId}`,
          examTitle: `${examData.examTitle}`,
          examStartDate: `${dateFormat(examData.examStartTime)}`,
          examFinishDate: `${dateFormat(examData.examFinishTime)}`,
          isExamRegistered: `${examData.isExamRegistered}`,
          examQuestionRegisterRequest: examData.examQuestionRegisterRequest,
        },
      });
      console.log(data, status);
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

export const loadExamListAsync = createAsyncThunk<any, number>(
  "loadExamList",
  async (programId, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `/exam/program/${programId}`,
      });
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
export const programExamSlice = createSlice({
  name: "programExam",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadExamAsync.fulfilled, (state, payload) => {
      console.log("시험올리기 성공");
      toast.success("시험올리기 성공");
    });
    builder.addCase(uploadExamAsync.rejected, (state) => {
      console.log("시험 업로드 실패");
    });
    builder.addCase(loadExamListAsync.fulfilled, (state, payload) => {
      state.Examlist = [...payload.payload];
      console.log("리스트 조회성공");
    });
    builder.addCase(loadExamListAsync.rejected, (state, payload) => {
      console.log("리스트 조회실패");
    });
  },
});
export default programExamSlice.reducer;
