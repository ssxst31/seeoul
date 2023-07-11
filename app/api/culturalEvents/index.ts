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

export async function fetchCulturalEvent({ page, sort, search }: CulturalEventRequest) {
  return await customAxios.get<null, CulturalEventResponse>(
    `/culturalEvents?offset=${(Number(page) - 1) * 20}&limit=20&option=${
      sort === "전체" ? "all" : encodeURI(sort)
    }&search=${search}`,
  );
}

export async function fetchCulturalEvent2({ page, sort, search }: CulturalEventRequest) {
  const res = await fetch(
    `/culturalEvents?offset=${(Number(page) - 1) * 20}&limit=20&option=${
      sort === "전체" ? "all" : encodeURI(sort)
    }&search=${search}`,
    { next: { revalidate: 10 } },
  );
  return await res.json();
}

export async function fetchRandomCulturalEvent() {
  return await customAxios.get<null, CulturalEvent[]>(`/culturalEvents/random`);
}
export async function fetchRandomCulturalEvent2() {
  const res = await fetch(`${getBaseUrl}/culturalEvents/random`, {
    cache: "no-cache",
  });
  const data = await res.json();

  return data[0];
}
interface DetailCulturalEventRequest {
  title: string;
}

export async function fetchDetailCulturalEvent({ title }: DetailCulturalEventRequest) {
  const res = await fetch(`${getBaseUrl}/culturalEvents/${decodeURIComponent(title)}`, {
    cache: "no-cache",
  });

  const data = await res.json();

  return data[0];
}
