import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { FianlData } from "./programCreationSlice";
import { filter } from "../../utils/filter";
export interface PostState {
  post_id: number;
}
export interface itemBox {
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
  categories: Array<FianlData>;
}
export interface filterList {
  place: string;
  interest: string;
}
interface totalState {
  post: itemBox[];
  postData: itemBox[];
  filterAll: filterList;
  searchContent: string;
}
const initialState: totalState = {
  post: [],
  postData: [],
  filterAll: {
    place: "",
    interest: "전체",
  },
  searchContent: "",
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
      state.post = filter(state.filterAll, state.post, state.postData);
      console.log(state.post);
    },
    interestSelect: (state, action: PayloadAction<string>) => {
      state.filterAll.interest = action.payload;
      state.post = filter(state.filterAll, state.post, state.postData);
    },
    search: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.post = state.postData.filter((value) =>
          value.subject.includes(action.payload)
        );
        state.filterAll.place = "";
        state.filterAll.interest = "전체";
      } else {
        state.post = state.postData;
        state.filterAll.place = "";
        state.filterAll.interest = "전체";
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadItemListAsync.fulfilled, (state, { payload }) => {
      const filtered = payload.filter(
        (value) => Boolean(value.categories.length) !== false
      );
      state.post = filtered;
      state.postData = filtered;
      console.log(state.post);
    });
  },
});
export const { placeSelect, interestSelect, search } = programListSlice.actions;
export default programListSlice.reducer;

// state.post = state.postData.filter(
//   (value) =>
//     value?.categories[0]?.parent === state.filterAll.interest &&
//     value.programPlace === state.filterAll.place
// );
// if (state.filterAll.interest === "전체" && state.filterAll.place !== "") {
//   state.post = state.postData.filter(
//     (value) => value.programPlace === state.filterAll.place
//   );
// }
// if (state.filterAll.place === "") {
//   state.post = state.postData.filter(
//     (value) => value?.categories[0]?.parent === state.filterAll.interest
//   );
// }
// if (state.filterAll.place === "" && state.filterAll.interest === "전체") {
//   state.post = state.postData;
// }
