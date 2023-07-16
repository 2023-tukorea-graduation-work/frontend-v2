import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
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
interface menteeWithProgram {
  menteeId: number | null;
  programId: number;
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
export const programParticipateAsync = createAsyncThunk<any, menteeWithProgram>(
  "programParticipate",
  async (menteeWithPrograminfo: menteeWithProgram, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: `/program/participate`,
        data: {
          menteeId: `${menteeWithPrograminfo.menteeId}`,
          programId: `${menteeWithPrograminfo.programId}`,
        },
      });
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(JSON.stringify(e));
    }
  }
);
const initialState: initial = {
  details: {
    programId: 0,
    programPlace: "",
    capacity: 0,
    grade: 0,
    introduce: "",
    mentorName: "",
    mentorId: 0,
    detail: "",
    major: "경영학과",
    recruitFinishDate: "",
    recruitStartDate: "",
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
    builder.addCase(programParticipateAsync.fulfilled, (state) => {
      console.log("신청완료");
    });
    builder.addCase(programParticipateAsync.rejected, (state, action) => {
      console.log(action);
      toast.error("신청실패");
    });
  },
});
export default programListDetalSlice.reducer;
