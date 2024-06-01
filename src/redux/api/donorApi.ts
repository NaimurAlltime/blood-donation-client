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

    getMyProfile: build.query({
      query: () => ({
        url: "/my-profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetAllDonorQuery,
  useCreateBloodRequestMutation,
  useGetMyProfileQuery,
} = donorApi;
