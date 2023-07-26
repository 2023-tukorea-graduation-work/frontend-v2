import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface NumExamOptions {
  choices: string;
  isCorrect: boolean;
}

interface ExamData {
  questionType: string;
  question: string;
  score: number;
  options: Array<NumExamOptions>;
  subjectAnswer: null;
  multipleChoiceType: boolean;
}

interface TestForm {
  programId: number;
  examtitle: string;
  examStartTime: string;
  examFinishTime: string;
  isExamRegistered: boolean;
  examQuestionRegisterRequest: Array<ExamData>;
}
