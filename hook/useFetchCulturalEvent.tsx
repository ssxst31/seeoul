import React, { useState } from "react";
import useSWR from "swr";

import { fetchCulturalEvent } from "pages/api/index";

interface FetchCulturalEventProps {
  page: number;
  sort: string;
  search: string;
}

export default function useFetchCulturalEvent({
  page = 1,
  sort,
  search,
}: FetchCulturalEventProps) {
  const [dsa, setDsa] = useState(null);

  const { data } = useSWR(
    {
      url: `/get`,
      params: { page, sort, search },
    },

    async ({ params }) => {
      const response = await fetchCulturalEvent(params);

      setDsa(response.data);

      return response;
    },
    { revalidateIfStale: false },
  );

  const totalCulturalEvent = data?.data ?? dsa;
  const totalCount = data?.totalCount ?? null;

  return { totalCulturalEvent, totalCount };
}
