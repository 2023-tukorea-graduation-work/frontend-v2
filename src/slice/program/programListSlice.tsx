import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
export interface PostState {
  post_id: number;
}
interface itemBox {
  PROGRAM_NO: number;
  ACT_PLACE: string;
  CAPACITY: number;
  COLLEGE: string;
  DEADLINE: number;
  DETAIL: string;
  MAJOR: string;
  NAME: string;
  PARTICIPANT: number;
  PRO_FINISH_DATE: string;
  PRO_START_DATE: string;
  ROW_NUM: number;
  SUBJECT: string;
}
interface filterList {
  place: string;
  teach: string;
  interest: string;
}
interface totalState {
  post: itemBox[];
  postData: itemBox[];
  filterAll: filterList;
}
const initialState: totalState = {
  post: [],
  postData: [],
  filterAll: {
    place: "onlineWithOffline",
    teach: "typeAll",
    interest: "interestAll",
  },
};
export const loadItemListAsync = createAsyncThunk<itemBox[], string>(
  "loadItemList",
  async (keys) => {
    try {
      const { data } = await axios({
        method: "get",
        url: "/api/v1/program?",
        params: { keyword: keys },
      });
      return data.object;
    } catch (e) {
      console.log(e);
    }
  }
);
export const programListSlice = createSlice({
  name: "programlist",
  initialState,
  reducers: {
    placeSelect: (state, action: PayloadAction<string>) => {
      state.filterAll.place = action.payload;
      console.log(state.filterAll.place);
      console.log(state.filterAll.teach);
      console.log(state.filterAll.interest);
    },
    teachTypeSelect: (state, action: PayloadAction<string>) => {
      state.filterAll.teach = action.payload;
    },
    interestSelect: (state, action: PayloadAction<string>) => {
      state.filterAll.interest = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadItemListAsync.fulfilled, (state, { payload }) => {
      state.post = payload;
      state.postData = payload;
      console.log(state.post);
    });
  },
});
export const { placeSelect, teachTypeSelect, interestSelect } =
  programListSlice.actions;
export default programListSlice.reducer;