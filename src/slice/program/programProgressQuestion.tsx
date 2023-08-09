import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

interface QuestionList {
  questionId: number;
  question: string;
  answer: string;
  answerCreatedAt: string;
  answerUpdatedAt: string;
}
interface QustionForm {
  menteeId: number;
  programId: number;
  question: string;
}
interface initialType {
  QuestionList: Array<QuestionList>;
}
const initialState: initialType = {
  QuestionList: [],
};

export const loadQuestionListAsync = createAsyncThunk<
  Array<QuestionList>,
  number
>("loadQuestionList", async (programId, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `/question/program/${programId}`,
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
});

export const uploadQuestiontAsync = createAsyncThunk<any, any>(
  "uploadQuestiont",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "/question",
        data: {
          menteeId: formData.memberId,
          programId: formData.programId,
          question: `${formData.editorHtml}`,
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
      state.QuestionList = [...payload];
      console.log("질문리스트 로드 성공");
    });
    builder.addCase(loadQuestionListAsync.rejected, (state) => {
      console.log("질문 리스트실패");
    });
    builder.addCase(uploadQuestiontAsync.rejected, (state) => {
      console.log("업로드 실패");
    });
    builder.addCase(uploadQuestiontAsync.fulfilled, (state, payload) => {
      console.log(payload);
      console.log("질문 업로드 성공");
    });
  },
});
export default programQuestionSlice.reducer;
