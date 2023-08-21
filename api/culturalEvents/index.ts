import customAxios from "api";
import { CulturalEvent } from "type";
import { getBaseUrl } from "utils/getBaseUrl";

interface CulturalEventRequest {
  page: string | string[];
  sort: string;
  search?: string;
}

interface CulturalEventResponse {
  data: CulturalEvent[];
  totalCount: number;
}

export async function fetchCulturalEvents({
  page,
  sort,
  search,
  limit = 20,
}: {
  page: string;
  sort: string;
  search: undefined | string;
  limit?: number;
}) {
  const res = await fetch(
    `${getBaseUrl}/culturalEvents?offset=${(Number(page) - 1) * 20}&limit=${limit}&option=${
      sort === "전체" ? "all" : sort
    }&search=${search}`,
    { next: { revalidate: 60 * 60 * 24 } },
  );

  return res.json();
}

export async function fetchRandomCulturalEvent() {
  const res = await fetch(`${getBaseUrl}/culturalEvents/random`, { cache: "no-store" });
  const data = await res.json();

  return data;
}
interface DetailCulturalEventRequest {
  title: string;
}

export async function fetchDetailCulturalEvent({ title }: DetailCulturalEventRequest) {
  const res = await fetch(`${getBaseUrl}/culturalEvents/${decodeURIComponent(title)}`, {
    next: { revalidate: 60 * 60 * 24 },
  });

  const data = await res.json();

  return data[0];
}
