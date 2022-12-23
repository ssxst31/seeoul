import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_APP_HOST_NAME;

export async function fetchCulturalEvent({ page, sort, search }: { page: number; sort: string; search?: string }) {
  if (search) {
    const resp = await axios.get(`/get?offset=${(page - 1) * 20}&limit=20&search=${search}`).catch((e) => ({
      data: {
        error: e.response.data,
      },
    }));

    return resp.data;
  } else {
    const resp = await axios
      .get(`/get?offset=${(page - 1) * 20}&limit=20&option=${sort === "전체" ? "all" : sort}`)
      .catch((e) => ({
        data: {
          error: e.response.data,
        },
      }));

    return resp.data;
  }
}

export async function fetchRandomCulturalEvent() {
  const resp = await axios.get(`/random`).catch((e) => ({
    data: {
      error: e.response.data,
    },
  }));

  return resp.data;
}

export async function fetchDetailCulturalEvent({ id }: { id: number }) {
  const resp = await axios.get(`/detail/${id}`).catch((e) => ({
    data: {
      error: e.response.data,
    },
  }));

  return resp.data;
}

export async function fetchInstagramFeed() {
  const resp = await axios
    .get(
      `https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=IGQVJWMEVEZA3VjeXdQZAUVYV0NTSmxfaDh6bEk1dW5TTldNdFgzd3oyeTBlY1FOU3lnbHVQOUVqbmRMeXFhSWpTZAXFSX1cydGM2Y1QwMi1Kank5dXUyUzJaWW9DVktwbVE1b0hkdmNvSWRyX2U1MENiRgZDZD`,
    )
    .catch((e) => ({
      data: {
        error: e.response.data,
      },
    }));

  return resp.data;
}

export async function fetchInstagramReview(sort: { sort: string }) {
  const resp = await axios.get(`/instaget?option=${sort}`).catch((e) => ({
    data: {
      error: e.response.data,
    },
  }));

  return resp.data;
}
