import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
interface creationSuccess {
  message: string;
  status: string;
}
interface creationInfo {
  userInfo: FormData;
  userGB: string;
}
const initialState: creationSuccess = {
  message: "",
  status: "",
};
export const creationAsync = createAsyncThunk<creationSuccess, creationInfo>(
  "creationAsync",
  async (creationData) => {
    try {
      const { data } = await axios({
        url: `/api/v1/${creationData.userGB}`,
        method: "post",
        data: creationData.userInfo,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);
export const creationSlice = createSlice({
  name: "creation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(creationAsync.fulfilled, (state, { payload }) => {
      console.log(payload);
    });
  },
});
// export const { } = creationSlice.actions;
export default creationSlice.reducer;
