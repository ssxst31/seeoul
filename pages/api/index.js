import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_APP_HOST_NAME;

export async function fetchCulturalEvent({ page, sort }) {
  const resp = await axios.get(
    `/get?offset=${(page - 1) * 20}&limit=20&option=${
      sort === "전체" ? "all" : sort
    }`,
  );
  return resp.data;
}

export async function fetchRandomCulturalEvent() {
  const resp = await axios.get(`/random`);
  return resp.data;
}

export async function fetchDetailCulturalEvent({ id }) {
  const resp = await axios.get(`/detail/${id}`);
  return resp.data;
}
