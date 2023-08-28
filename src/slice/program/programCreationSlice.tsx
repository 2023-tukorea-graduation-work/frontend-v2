import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { creationSlice } from "../user/creactionSlice";
import { dateFormat } from "../../utils/dateFormat";
import { toast } from "react-toastify";
interface intial {
  programCategories: Array<FianlData> | null;
  status: number | null;
}
const initialState: intial = {
  programCategories: null,
  status: null,
};
export interface FianlData {
  parent: string;
  child: string;
}
interface sendInfo {
  memberId: number;
  subject: string;
  detail: string;
  capacity: number;
  act_place: string;
  pro_finish_date: string;
  pro_start_date: string;
  recruit_finish_date: string;
  recruit_start_date: string;
  programWeeks: Array<any>;
  programCategories: Array<FianlData>;
}

export const programCreateAsync = createAsyncThunk<any, sendInfo>(
  "programCreate",
  async (creationInfo, { rejectWithValue }) => {
    console.log(`${dateFormat(creationInfo.pro_finish_date)}`);
    try {
      console.log(creationInfo);
      const data = await axios({
        method: "post",
        url: "/program",
        data: {
          memberId: creationInfo.memberId,
          subject: `${creationInfo.subject}`,
          programPlace: `${creationInfo.act_place}`,
          capacity: `${creationInfo.capacity}`,
          detail: `${creationInfo.detail}`,
          programFinishDate: `${dateFormat(creationInfo.pro_finish_date)}`,
          programStartDate: `${dateFormat(creationInfo.pro_start_date)}`,
          programWeeks: creationInfo.programWeeks,
          recruitFinishDate: `${dateFormat(creationInfo.recruit_finish_date)}`,
          recruitStartDate: `${dateFormat(creationInfo.recruit_start_date)}`,
          programCategories: creationInfo.programCategories,
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

export const programCreationSlice = createSlice({
  name: "creation",
  initialState,
  reducers: {
    addCategories: (state, action: PayloadAction<Array<FianlData>>) => {
      state.programCategories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(programCreateAsync.pending, (state, { payload }) => {
      state.status = null;
    });
    builder.addCase(programCreateAsync.fulfilled, (state, { payload }) => {
      state.status = payload.status;
      console.log(state);
      toast.done("프로그램 생성성공");
    });
    builder.addCase(programCreateAsync.rejected, (state, { payload }) => {
      toast.error("프로그램 생성실패");
    });
  },
});
export const { addCategories } = programCreationSlice.actions;
export default programCreationSlice.reducer;
