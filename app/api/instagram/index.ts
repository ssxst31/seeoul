import customAxios from "app/api";
import { InstagramFeed } from "type";

interface InstagramFeedResponse {
  data: InstagramFeed[];
}

export async function fetchInstagramFeed() {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`,
    {
      next: { revalidate: 60 * 60 * 24 },
    },
  );

  const data = await res.json();

  return data.data;
}

interface InstagramReviewRequest {
  sort: string;
}

export async function fetchInstagramReview(sort: InstagramReviewRequest) {
  return await customAxios.get<null, any>(`/instagramFeeds?option=${sort}`);
}
