import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/task/",
    credentials: "include",
    prepareHeaders: (Headers, { getState }) => {
      // const token = localStorage.getItem("token");
      const token = getState().app.token;
      if (token) {
        Headers.set("Authorization", `Bearer ${token}`);
      }
      Headers.set("Content-Type", "application/json");
      return Headers;
    },
  }),

  endpoints: (build) => ({
    getAllTasks: build.query({
      query: () => ({
        url: "admin/getalltasks",
        method: "GET",
      }),
    }),
    assigntask: build.mutation({
      query: ({ userid, taskid }) => ({
        url: "admin/asigntouser",
        method: "PUT",
        params: { userid, taskid },
      }),
    }),
    createtask: build.mutation({
      query: (taskData) => ({
        url: "admin/createtask",
        method: "POST",
        body: taskData,
      }),
    }),
    completetask: build.mutation({
      query: ({ taskid }) => ({
        url: "completetask",
        method: "PUT",
        params: { taskid },
      }),
    }),
    gettask: build.query({
      query: ({ id }) => ({
        url: `gettask/${id}`,
        method: "GET",
      }),
    }),
    tasksasigndtouser: build.query({
      query: ({ userid, status }) => {
        if (!userid) {
          console.error("⚠️ ERROR: User ID is missing!");
          return "";
        }
        return {
          url: `/tasksasigndtouser`,
          method: "GET",
          params: { userid, status }, // ✅ Send as query parameters
        };
      },
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useAssigntaskMutation,
  useCreatetaskMutation,
  useTasksasigndtouserQuery,
  useGettaskQuery,
  useCompletetaskMutation,
} = taskApi;
