import { fetchNaverShop } from "api/naver";
import Container from "app/cultural-event-shop/_component/Container";

export default async function Page() {
  const title = "서울 전시";

  const data = await fetchNaverShop(title);
  if (!data) {
    return <></>;
  }
  return <Container data={data} />;
}
