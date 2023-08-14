import useSWR from "swr";

import { fetchCulturalEvents } from "api/culturalEvents";
import { CulturalEvent } from "type";
import { getAxiosError, isAxiosError } from "utils/errors";

interface FetchCulturalEventProps {
  page: string | string[] | undefined;
  sort: string;
  search: string | undefined;
}

export const useFetchCulturalEvent = ({
  page = "1",
  sort,
  search,
}: FetchCulturalEventProps): {
  totalCulturalEvent: CulturalEvent[] | [] | null;
  totalCount: number;
} => {
  const { data } = useSWR(
    `/culturalEvents?offset=${(Number(page) - 1) * 20}&limit=20&option=${
      sort === "전체" ? "all" : sort
    }&search=${search}`,
    () => fetchCulturalEvents({ page, sort, search }),
    {
      revalidateIfStale: false,
      onError: (err) => {
        if (isAxiosError(err)) {
          const errorMessage = getAxiosError(err).message;

          console.log(errorMessage);
        }
      },
    },
  );

  const totalCulturalEvent = data?.data ?? null;
  const totalCount = data?.totalCount ?? 0;

  return { totalCulturalEvent, totalCount };
};
