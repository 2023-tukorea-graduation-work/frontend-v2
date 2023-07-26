import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

interface materialForm {
  materialId: number | null;
  title: string | null;
  detail: string | null;
  fileName: string | null;
}

interface initialStateType {
  MaterialList: Array<materialForm>;
}
const initialState: initialStateType = {
  MaterialList: [],
};

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

export const loadMaterialAsync = createAsyncThunk<any>(
  "loadMaterial",
  async () => {
    const { data } = await axios({
      method: "get",
      url: "/material/program/1",
    });
    console.log(data);
    return data;
  }
);

export const downloadMaterialAsync = createAsyncThunk<any, number>(
  "downloadMaterial",
  async (materailId) => {
    const data = await axios({
      method: "get",
      url: "/material/download",
      params: {
        materialId: materailId,
      },
    });
    console.log(data);
    return data;
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
    builder.addCase(loadMaterialAsync.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.MaterialList = [...payload];
      console.log(state);
      console.log("자료로드 성공");
    });
    builder.addCase(uploadMaterialAsync.rejected, (state) => {
      console.log("업로드 실패");
    });
    builder.addCase(loadMaterialAsync.rejected, (state) => {
      console.log("자료로드 실패");
    });
    builder.addCase(downloadMaterialAsync.rejected, (state) => {
      console.log("다운로드 실패");
    });
    builder.addCase(downloadMaterialAsync.fulfilled, (state, action) => {
      console.log(action);
    });
  },
});
export default programMaterialSlice.reducer;
