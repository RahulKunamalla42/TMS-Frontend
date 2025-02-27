import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import appReducer from "./feature/appSlice.js";
import { authApi } from "./services/authApi";
import { taskApi } from "./services/taskApi.js";
import { submissionApi } from "./services/submissionApi.js";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["app"], //
};

// ✅ Combine reducers and persist `appReducer`
const rootReducer = combineReducers({
  app: persistReducer(persistConfig, appReducer),
  [authApi.reducerPath]: authApi.reducer,
  [taskApi.reducerPath]: taskApi.reducer,
  [submissionApi.reducerPath]: submissionApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ✅ Fix persist-related errors
      immutableCheck: false,
    }).concat(authApi.middleware, taskApi.middleware, submissionApi.middleware),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
