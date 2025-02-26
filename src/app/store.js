import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "./feature/counterSlice.js";
import appReducer from "./feature/appSlice.js";
import { authApi } from "./services/authApi";
import { taskApi } from "./services/taskApi.js";
import { submissionApi } from "./services/submissionApi.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    app: appReducer,
    [authApi.reducerPath]: authApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
    [submissionApi.reducerPath]: submissionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
      immutableCheck: true,
    }).concat(authApi.middleware, taskApi.middleware, submissionApi.middleware),
});

setupListeners(store.dispatch);
