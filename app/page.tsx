import { Suspense } from "react";

import MainCarousel from "components/MainCarousel";
import Section from "components/Section";
import MainSection from "components/MainSection";
import BlackButton from "components/BlackButton";
import CarouselSkeleton from "components/skeleton/CarouselSkeleton";
import { fetchRandomCulturalEvent } from "api/culturalEvents";
import UnderscoreTitle from "components/UnderscoreTitle";

interface Props {
  searchParams: {
    page: string;
    tab: string;
    search: undefined | string;
  };
}

export default async function Page({ searchParams }: Props) {
  const randomCulturalEventList = await fetchRandomCulturalEvent();

  return (
    <main className="pt-[71px] px-[30px] w-full -md:px-4 -md:pt-[104px]">
      <section>
        <UnderscoreTitle title="전시회를 생각 중이라면 👀" />
        <div className="w-full h-8 -md:h-4" />
        <Suspense fallback={<CarouselSkeleton width="386" height="360" />}>
          <MainCarousel randomCulturalEventList={randomCulturalEventList} />
        </Suspense>
      </section>
      <div className="w-full h-10" />
      <section>
        <UnderscoreTitle title="어디서 구경할까요? 🤔" />
        <div className="w-full h-7 -md:h-4" />
        <Section />
        <div className="w-full h-8 -md:h-4" />
        <Suspense>
          {/* @ts-expect-error */}
          <MainSection searchParams={searchParams} />
        </Suspense>
        <div className="w-full h-8" />
        <div className="text-center"></div>
        <div className="w-full h-8" />
        <div className="max-w-[728px] mx-auto overflow-x-hidden -md:max-w-[300px]"></div>
        <div className="w-full h-8" />
      </section>
      <BlackButton />
    </main>
  );
}
