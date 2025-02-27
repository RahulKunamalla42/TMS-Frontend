import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/user",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().app.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  endpoints: (build) => ({
    register: build.mutation({
      query: (regData) => ({
        url: "/register",
        method: "POST",
        body: regData,
      }),
    }),
    login: build.mutation({
      query: (loginData) => ({
        url: "/login",
        method: "POST",
        body: loginData,
      }),
    }),
    addAdmin: build.mutation({
      query: () => ({
        url: "/addadmin",
        method: "POST",
      }),
    }),
    getAllProfiles: build.query({
      query: () => ({
        url: "/getallprofiles",
        method: "GET",
      }),
    }),
    getProfile: build.query({
      query: () => ({
        url: "/getprofile",
        method: "GET",
      }),
    }),
    getProfileById: build.query({
      query: ({ id }) => ({
        url: `/getprofilebyid/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useAddAdminMutation,
  useGetAllProfilesQuery,
  useLazyGetProfileQuery,
  useGetProfileByIdQuery,
} = authApi;
