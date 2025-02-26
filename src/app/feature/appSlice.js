import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userId: null,
  profile: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addUserId: (state, action) => {
      console.log("Dispatched addUserId with:", action.payload); // ✅ Debug log
      state.userId = action.payload; // ✅ Ensure correct assignment
    },
    addProfile: (state, action) => {
      state.profile = action.payload;
    },
    addToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUserId, addProfile } = appSlice.actions;

export default appSlice.reducer;
