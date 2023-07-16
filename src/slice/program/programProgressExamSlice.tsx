import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

interface Multiple {
  questionType: string;
  question: string;
  score: number;
  options: Array<MutlipleOption>;
  subjectAnswer: null;
  multipleChoiceType: boolean;
}

interface MutlipleOption {
  choices: string;
  isCorrect: boolean;
}

interface Subject {
  questionType: string;
  question: string;
  score: number;
  options: null;
  subjectAnswer: string;
  multipleChoiceType: boolean;
}

interface ExamForm {
  programId: number;
  examTitle: string;
  examStartTime: Date;
  examFinishTime: Date;
  isExamRegistered: boolean;
  examQuestionRegisterRequest: Array<Multiple | Subject>;
}

const initialState = "";

export const uploadExamAsync = createAsyncThunk<any, ExamForm>(
  "uploadMaterial",
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

export const programExamSlice = createSlice({
  name: "programMaterial",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadExamAsync.fulfilled, (state, { payload }) => {
      state = payload;
      console.log("자료올리기 성공");
      toast.success("자료올리기 성공");
    });
    builder.addCase(uploadExamAsync.rejected, (state) => {
      console.log("업로드 실패");
    });
  },
});
export default programExamSlice.reducer;
