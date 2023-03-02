import customAxios from "pages/api";
import { CulturalEvent } from "type";

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

export async function fetchRandomCulturalEvent() {
  return await customAxios.get<null, CulturalEvent[]>(`/culturalEvents/random`);
}

interface DetailCulturalEventRequest {
  title: string | string[] | undefined;
}

export async function fetchDetailCulturalEvent({ title }: DetailCulturalEventRequest) {
  return await customAxios.get<null, CulturalEvent[]>(encodeURI(`/culturalEvents/${title}`));
}
