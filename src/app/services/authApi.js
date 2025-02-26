import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/user",
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      console.log(token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");

      return headers;
    },
    responseHandler: async (response) => {
      if (!response.ok && response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        window.location.href = "/login"; // Redirect user to login
      }
      return response.json();
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
