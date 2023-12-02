import { fetchNaverShop } from "api/naver";
import Container from "app/cultural-event-shop/_components/Container";

export default async function Page() {
  const title = "서울 전시";

  const data = await fetchNaverShop(title);

  return <Container data={data} />;
}
