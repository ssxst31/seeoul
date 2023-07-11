import customAxios from "app/api";
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

export async function fetchCulturalEvents({ page, tab, sort, search }: any) {
  const res = await fetch(
    `${getBaseUrl}/culturalEvents?offset=${(Number(page) - 1) * 20}&limit=20&option=${
      sort === "전체" ? "all" : sort
    }&search=${search}`,
    { next: { revalidate: 60 * 60 * 24 } },
  );

  return res.json();
}

export async function fetchRandomCulturalEvent() {
  return await customAxios.get<null, CulturalEvent[]>(`/culturalEvents/random`);
}
export async function fetchRandomCulturalEvent2() {
  const res = await fetch(`${getBaseUrl}/culturalEvents/random`, { next: { revalidate: 60 * 60 * 24 } });
  const data = await res.json();

  return data[0];
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
