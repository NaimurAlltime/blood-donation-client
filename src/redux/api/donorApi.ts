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
          contentType: "multipart/form-data",
        };
      },
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

export const { useGetAllDonorQuery, useGetMyProfileQuery } = donorApi;
