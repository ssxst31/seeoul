import { fetchCulturalEvents } from "app/api/culturalEvents";
import Container from "app/cultural-event-map/_component/Container";

export default async function Page() {
  const page = 1;
  const tab = "total";
  const sort = "전체";
  const search = undefined;
  const limit = 50000;

  const data = await fetchCulturalEvents({ page, tab, sort, search, limit });

  return <Container data={data} />;
}
