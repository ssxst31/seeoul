import React, { useState } from "react";
import useSWR, { SWRResponse } from "swr";

import { fetchInstagramReview } from "pages/api";

interface FetchCulturalEventProps {
  sort: string;
}
interface InstagramReview {
  children: null | string;
  id: number;
  mediaType: string;
  mediaUrl: null | string;
  type: string;
  permalink: string;
}

interface Data {
  data: InstagramReview[];
}

export default function useInstagramReview({ sort }: FetchCulturalEventProps) {
  const [dummyData, setDummyData] = useState<InstagramReview[] | null>(null);

  const { data }: SWRResponse<Data, any> = useSWR(
    {
      url: `/get`,
      params: { sort },
    },

    async ({ params }) => {
      const response = await fetchInstagramReview(params);

      setDummyData(response.data);

      return response;
    },
    { revalidateIfStale: false },
  );

  const totalInstagramReview =
    data?.data.map((a) => {
      if (a.children) {
        return { ...a, children: JSON.parse(a.children) };
      }
      return a;
    }) ?? dummyData;

  return { totalInstagramReview };
}
