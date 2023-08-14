import { fetchInstagramFeed } from "api/instagram";

import Container from "app/popular/_component/Container";

export default async function Page() {
  const instagramFeeds = await fetchInstagramFeed();

  return <Container instagramFeeds={instagramFeeds} />;
}
