import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export interface profileProgramList {
  mentorName: string;
  mentorInstitution: string;
  mentorMajor: string;
  subject: string;
  programPlace: string;
  capacity: number;
  recruitPeriod: string;
  programPeriod: string;
  state: string;
  programId: number;
}
interface profileInfo {
  name: string | null;
  age: number | null;
  email: string | null;
  imgUrl: string | null;
  programRecruitList: Array<profileProgramList> | null;
  programOpenList: Array<profileProgramList> | null;
  programCloseList: Array<profileProgramList> | null;
}
const initialState: profileInfo = {
  name: null,
  age: null,
  email: null,
  imgUrl: null,
  programRecruitList: null,
  programOpenList: null,
  programCloseList: null,
};

export const loadProfileProgramListAsync = createAsyncThunk<any, number | null>(
  "loadProfile",
  async (userId) => {
    const { data } = await axios({
      method: "get",
      url: `/member/my-page/${userId}`,
    });
    return data;
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loadProfileProgramListAsync.fulfilled,
      (state, { payload }) => {
        console.log(payload);
        state.age = payload.age;
        state.email = payload.email;
        state.imgUrl = payload.imgUrl;
        state.name = payload.name;
        state.programRecruitList = payload.programList.filter(
          (value: profileProgramList) => value.state === "RECRUIT"
        );
        state.programOpenList = payload.programList.filter(
          (value: profileProgramList) => value.state === "OPEN"
        );
        state.programCloseList = payload.programList.filter(
          (value: profileProgramList) => value.state === "CLOSE"
        );
        console.log("프로필 프로그램 리스트 불러오기 성공");
      }
    );
    builder.addCase(
      loadProfileProgramListAsync.rejected,
      (state, { payload }) => {
        console.log("프로필 프로그램 리스트 불러오기 실패");
      }
    );
  },
});
export default profileSlice.reducer;
