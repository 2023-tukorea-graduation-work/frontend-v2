import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { creationSlice } from "../user/creactionSlice";
import dateFormat from "../../utils/dateFormat";

interface intial {
  programCategories: Array<FianlData> | null;
}
const initialState: intial = {
  programCategories: null,
};
interface FianlData {
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
  async (creationInfo) => {
    try {
      console.log(creationInfo);
      const { data } = await axios({
        method: "post",
        url: "/program",
        data: {
          // memberId: mento_no,
          memberId: 1,
          subject: `${creationInfo.subject}`,
          programPlace: `${creationInfo.act_place}`,
          capacity: `${creationInfo.capacity}`,
          // detail: `${data.detail}`,
          detail: `qweqweq`,
          programFinishDate: `${dateFormat(creationInfo.pro_finish_date)}`,
          programStartDate: `${dateFormat(creationInfo.pro_start_date)}`,
          programWeeks: creationInfo.programWeeks,
          recruitFinishDate: `${dateFormat(creationInfo.recruit_finish_date)}`,
          recruitStartDate: `${dateFormat(creationInfo.recruit_start_date)}`,
          programCategories: `${creationInfo.programCategories}`,
        },
      });
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const programCreationSlice = createSlice({
  name: "creation",
  initialState,
  reducers: {
    addCategories: (state, action: PayloadAction<Array<FianlData>>) => {
      state.programCategories = action.payload;
      console.log(state.programCategories);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(programCreateAsync.fulfilled, (state, { payload }) => {
      console.log(payload);
    });
  },
});
export const { addCategories } = programCreationSlice.actions;
export default programCreationSlice.reducer;
