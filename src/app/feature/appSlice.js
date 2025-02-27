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
      state.userId = action.payload;
    },
    addProfile: (state, action) => {
      state.profile = action.payload;
    },
    addToken: (state, action) => {
      state.token = action.payload;
    },
    removetoken: (state) => {
      state.token = null;
    },
  },
});

// Export actions
export const { addUserId, addProfile, addToken, removetoken } =
  appSlice.actions;

export default appSlice.reducer;
