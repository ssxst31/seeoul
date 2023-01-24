import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_APP_HOST_NAME;

interface CulturalEventRequest {
  page: number;
  sort: string;
  search?: string;
}

export async function fetchCulturalEvent({ page, sort, search }: CulturalEventRequest) {
  try {
    const resp = await axios.get(
      `/culturalEvents?offset=${(page - 1) * 20}&limit=20&option=${
        sort === "전체" ? "all" : encodeURI(sort)
      }&search=${search}`,
    );

    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
    }
  }
}

export async function fetchRandomCulturalEvent() {
  try {
    const resp = await axios.get(`/culturalEvents/random`);

    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
    }
  }
}

interface DetailCulturalEventRequest {
  id: number;
}

export async function fetchDetailCulturalEvent({ id }: DetailCulturalEventRequest) {
  try {
    const resp = await axios.get(`/culturalEvents/${id}`);

    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
    }
  }
}

export async function fetchInstagramFeed() {
  try {
    const resp = await axios.get(
      `https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=IGQVJXWE1XYzhQcDNUSXZA2QmR3b25nbGdrNTZAQMGtub0ZAXR0NqT3NleWl3T19mNklCVGNMN3NOVUNOXzNCOXc3TFQ5QUdWaTU5eWlnQS1UWF9MMW5hVm9WMXZAoOUxtMWdmMC1ZANHN3QTRuRXFCNDBjaAZDZD`,
    );

    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
    }
  }
}

interface InstagramReviewRequest {
  sort: string;
}

export async function fetchInstagramReview(sort: InstagramReviewRequest) {
  try {
    const resp = await axios.get(`/instagramFeeds?option=${sort}`);

    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
    }
  }
}
