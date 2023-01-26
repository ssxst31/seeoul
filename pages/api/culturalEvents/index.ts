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
  try {
    return await customAxios.get<null, CulturalEventResponse>(
      `/culturalEvents?offset=${(Number(page) - 1) * 20}&limit=20&option=${
        sort === "전체" ? "all" : encodeURI(sort)
      }&search=${search}`,
    );
  } catch (error) {
    console.log(error);
  }
}

export async function fetchRandomCulturalEvent() {
  try {
    return await customAxios.get<null, CulturalEvent[]>(`/culturalEvents/random`);
  } catch (error) {
    console.log(error);
  }
}

interface DetailCulturalEventRequest {
  id: string | string[] | undefined;
}

export async function fetchDetailCulturalEvent({ id }: DetailCulturalEventRequest) {
  try {
    return await customAxios.get<null, CulturalEvent[]>(`/culturalEvents/${id}`);
  } catch (error) {
    console.log(error);
  }
}
