import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

interface MaterialForm {}

const initialState: Array<any> = [];

export const uploadMaterialAsync = createAsyncThunk<any, any>(
  "uploadMaterial",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "/material ",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
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

export const programMaterialSlice = createSlice({
  name: "programMaterial",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadMaterialAsync.fulfilled, (state, { payload }) => {
      state = payload;
      console.log("자료올리기 성공");
      toast.success("자료올리기 성공");
    });
    builder.addCase(uploadMaterialAsync.rejected, (state) => {
      console.log("업로드 실패");
    });
  },
});
export default programMaterialSlice.reducer;
