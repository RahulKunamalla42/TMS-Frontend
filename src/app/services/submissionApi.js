import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const submissionApi = createApi({
  reducerPath: "submissionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/submission",
    credentials: "include",
    prepareHeaders: (Headers) => {
      const token = localStorage.getItem("token");
      Headers.set("Authorization", token);
      Headers.set("Content-Type", "application/json");
      return Headers;
    },
  }),

  endpoints: (build) => ({
    AllsubmissionsByUserid: build.query({
      query: ({ userid }) => ({
        url: "/getsubsbyuserid",
        method: "GET",
        params: { userid },
      }),
    }),
    submittask: build.mutation({
      query: ({ userId, taskId, githubLink }) => ({
        url: `/submit?userid=${userId}&taskid=${taskId}&githublink=${encodeURIComponent(
          githubLink
        )}`,
        method: "POST",
      }),
    }),
    getallsubs: build.query({
      query: () => ({
        url: `/getallsubs`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLazyAllsubmissionsByUseridQuery,
  useSubmittaskMutation,
  useGetallsubsQuery,
} = submissionApi;
