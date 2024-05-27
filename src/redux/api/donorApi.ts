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
  }),
});

export const { useGetAllDonorQuery } = donorApi;
