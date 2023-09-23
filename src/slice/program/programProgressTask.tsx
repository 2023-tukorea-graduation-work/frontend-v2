import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { dateFormat, timeFormat } from "../../utils/dateFormat";

interface TaskForm {
  programId: number;
  title: string;
  content: string;
  startTaskDate: string;
  endTaskDate: string;
}
interface TaskList {
  taskId: number;
  title: string;
  content: string;
  startTaskDate: string;
  endTaskDate: string;
}
interface initialStateType {
  list: Array<TaskList>;
}
const initialState: initialStateType = {
  list: [],
};

export const loadTaskAsync = createAsyncThunk<Array<TaskList>, number>(
  "loadTask",
  async (programId) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `/task/program/${programId}`,
      });
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const uploadTaskAsync = createAsyncThunk<any, any>(
  "uploadTask",
  async (formData, { rejectWithValue }) => {
    console.log(formData);

    try {
      const data = await axios({
        method: "post",
        url: "/task",
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

export const programTaskSlice = createSlice({
  name: "programTask",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadTaskAsync.fulfilled, (state, { payload }) => {
      state.list = [...payload];
      console.log(payload, "과제 리스트로드 성공");
    });
    builder.addCase(uploadTaskAsync.rejected, (state) => {
      console.log("과제 업로드 실패");
    });
    builder.addCase(uploadTaskAsync.fulfilled, (state, action) => {
      console.log("과제 업로드 성공");
    });
  },
});
export default programTaskSlice.reducer;
