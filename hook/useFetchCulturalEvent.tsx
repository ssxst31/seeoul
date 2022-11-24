import React, { useState } from "react";
import useSWR from "swr";

import { fetchCulturalEvent } from "pages/api/index";
import { CulturalEvent } from "type";

interface FetchCulturalEventProps {
  page: number;
  sort: string;
  search: string;
}

export default function useFetchCulturalEvent({
  page = 1,
  sort,
  search,
}: FetchCulturalEventProps): {
  totalCulturalEvent: CulturalEvent[];
  totalCount: any;
} {
  const [insteadData, setInsteadData] = useState(null);

  const { data } = useSWR(
    {
      url: `/get`,
      params: { page, sort, search },
    },

    async ({ params }) => {
      const response = await fetchCulturalEvent(params);

      setInsteadData(response.data);

      return response;
    },
    { revalidateIfStale: false },
  );

  const totalCulturalEvent = data?.data ?? insteadData;
  const totalCount = data?.totalCount ?? null;

  return { totalCulturalEvent, totalCount };
}
