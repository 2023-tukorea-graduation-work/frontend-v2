import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
export interface PostState {
  post_id: number;
}
interface itemBox {
  programId: number;
  capacity: number;
  institution: string;
  major: string;
  memberName: string;
  totalParticipants: number;
  programFinishDate: string;
  programStartDate: string;
  programPlace: string;
  subject: string;
  detail: string;
  lesson: string;
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
        url: "/program",
        params: { keyword: keys },
      });
      console.log(data);
      return data;
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
