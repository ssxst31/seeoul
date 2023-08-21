import { fetchCulturalEvents } from "api/culturalEvents";
import Container from "app/cultural-event-map/_component/Container";

export default async function Page() {
  const page = "1";
  const sort = "전체";
  const search = undefined;
  const limit = 50000;

  const data = await fetchCulturalEvents({ page, sort, search, limit });

  return <Container data={data.data} />;
}
