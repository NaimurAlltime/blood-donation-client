import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    changePassword: build.mutation({
      query: (data) => ({
        url: `/change-password`,
        method: "POST",
        contentType: "application/json",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    getSingleUser: build.query({
      query: () => ({
        url: "/my-profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    updateMyProfile: build.mutation({
      query: ({ updateData }) => ({
        url: "/my-profile",
        method: "PUT",
        data: updateData,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.request, tagTypes.donor],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useChangePasswordMutation,
  useGetSingleUserQuery,
  useUpdateMyProfileMutation,
} = authApi;
