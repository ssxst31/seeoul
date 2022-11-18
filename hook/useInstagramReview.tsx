import React, { useState } from "react";
import useSWR from "swr";

import { fetchInstagramReview } from "pages/api/index";

interface FetchCulturalEventProps {
  sort: string;
}

export default function useInstagramReview({ sort }: FetchCulturalEventProps) {
  const [dsa, setDsa] = useState(null);

  const { data } = useSWR(
    {
      url: `/get`,
      params: { sort },
    },

    async ({ params }) => {
      const response = await fetchInstagramReview(params);

      setDsa(response.data);

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
    }) ?? dsa;

  return { totalInstagramReview };
}
