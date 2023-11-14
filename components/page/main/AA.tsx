import MainCarousel from "./MainCarousel";

interface MainCarouselProps {
  data: any;
}

export default async function AA({ data }: MainCarouselProps) {
  const randomCulturalEventList = await data.then((res: any) => res.json());

  return <MainCarousel randomCulturalEventList={randomCulturalEventList} />;
}
