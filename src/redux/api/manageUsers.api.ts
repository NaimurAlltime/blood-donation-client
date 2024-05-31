import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const manageUsersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    updateUserRole: build.mutation({
      query: ({ id, payload }) => ({
        url: `/users/role/${id}`,
        method: "PATCH",
        data: payload,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    updateUserStatus: build.mutation({
      query: ({ id, payload }) => ({
        url: `/users/status/${id}`,
        method: "PATCH",
        data: payload,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useUpdateUserRoleMutation, useUpdateUserStatusMutation } =
  manageUsersApi;
