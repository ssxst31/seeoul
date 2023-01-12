import React, { useState } from "react";
import useSWR, { useSWRConfig } from "swr";

import { fetchCulturalEvent } from "pages/api/index";
import { CulturalEvent } from "type";

interface FetchCulturalEventProps {
  page: number;
  sort: string;
  search: string | undefined;
}

export default function useFetchCulturalEvent({ page = 1, sort, search }: FetchCulturalEventProps): {
  totalCulturalEvent: CulturalEvent[] | [] | null;
  totalCount: number;
} {
  const { data } = useSWR(
    `/get?offset=${(page - 1) * 20}&limit=20&option=${sort === "전체" ? "all" : sort}&search=${search}`,
    async () => {
      const params = { page, sort, search };
      const response = await fetchCulturalEvent(params);
      return response;
    },
    { revalidateIfStale: false },
  );
  console.log(data);
  const totalCulturalEvent = data?.data ?? null;
  const totalCount = data?.totalCount ?? 0;

  return { totalCulturalEvent, totalCount };
}
