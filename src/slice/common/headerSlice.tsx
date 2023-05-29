import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  alertModal: boolean;
  profileModal: boolean;
}
interface InputState {
  value: boolean;
}
const initialState: ModalState = {
  alertModal: false,
  profileModal: false,
};
export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    alertModalChange: (state, action: PayloadAction<InputState>) => {
      state.alertModal = action.payload.value;
    },
    profileModalChange: (state, action: PayloadAction<InputState>) => {
      state.profileModal = action.payload.value;
    },
  },
});

export const { alertModalChange, profileModalChange } = headerSlice.actions;
export default headerSlice.reducer;
