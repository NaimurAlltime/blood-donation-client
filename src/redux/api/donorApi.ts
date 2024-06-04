import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const donorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllDonor: build.query({
      query: (queryFilter) => {
        const qs = Object.keys(queryFilter)
          .map((key) => {
            if (encodeURIComponent(queryFilter[key])) {
              return `${encodeURIComponent(key)}=${encodeURIComponent(
                queryFilter[key]
              )}`;
            }
          })
          .join("&");

        return {
          url: `/donor-list?${qs}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.user],
    }),

    createBloodRequest: build.mutation({
      query: (data) => ({
        url: "/donation-request",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.request],
    }),

    getMyBloodRequests: build.query({
      query: () => ({
        url: "/donation-request",
        method: "GET",
      }),
      providesTags: [tagTypes.request],
    }),

    bloodRequestToMe: build.query({
      query: () => ({
        url: `/my-donation-request`,
        method: "GET",
      }),
      providesTags: [tagTypes.request],
    }),

    updateMyBloodRequestStatus: build.mutation({
      query: ({ id, payload }) => ({
        url: `/donation-request/${id}`,
        method: "PATCH",
        data: payload,
      }),
      invalidatesTags: [tagTypes.request],
    }),

    getMyProfile: build.query({
      query: () => ({
        url: "/my-profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    getSingleDonor: build.query({
      query: (id) => ({
        url: `/donor-list/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.donor],
    }),
  }),
});

export const {
  useGetAllDonorQuery,
  useCreateBloodRequestMutation,
  useGetMyBloodRequestsQuery,
  useBloodRequestToMeQuery,
  useUpdateMyBloodRequestStatusMutation,
  useGetMyProfileQuery,
  useGetSingleDonorQuery,
} = donorApi;
