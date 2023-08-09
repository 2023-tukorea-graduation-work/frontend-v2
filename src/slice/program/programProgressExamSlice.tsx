import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

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
  examQuestionRegisterRequest: Array<Multiple | Subjects>;
}

export interface ExamList {
  examId: number;
  examTitle: string;
  examStartTime: string;
  examFinishTime: string;
}

interface initialStateType {
  list: Array<ExamList>;
}
const initialState: initialStateType = {
  list: [],
};


export const uploadExamAsync = createAsyncThunk<any, ExamForm>(
  "uploadExam",
  async (examData, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "/exam",
        data: {
          programId: `${examData.programId}`,
          examTitle: `${examData.examTitle}`,
          examStartTime: `${examData.examStartTime}`,
          examFinishTime: `${examData.examFinishTime}`,
          isExamRegistered: `${examData.isExamRegistered}`,
          examQuestionRegisterRequest: examData.examQuestionRegisterRequest,
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
    builder.addCase(uploadExamAsync.fulfilled, (state, { payload }) => {
      state = payload;
      console.log("시험올리기 성공");
      toast.success("시험올리기 성공");
    });
    builder.addCase(uploadExamAsync.rejected, (state) => {
      console.log("시험 업로드 실패");
    });
    builder.addCase(loadExamListAsync.fulfilled, (state, payload) => {
      console.log(payload);
      console.log("리스트 조회성공");
    });
    builder.addCase(loadExamListAsync.rejected, (state, payload) => {
      console.log("리스트 조회실패");
    });
  },
});
export default programExamSlice.reducer;
