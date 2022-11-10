import React from "react";
import useSWR from "swr";

import { fetchCulturalEvent } from "pages/api/index";

export default function useFetchCulturalEvent({ page = 1, sort }) {
  const { data } = useSWR(
    {
      url: `/get`,
      params: { page, sort },
    },
    async ({ params }) => {
      const response = await fetchCulturalEvent(params);

      return response;
    },
    { revalidateIfStale: false },
  );

  const totalCulturalEvent = data?.data ?? null;
  const totalCount = data?.totalCount ?? null;

  return { totalCulturalEvent, totalCount };
}
