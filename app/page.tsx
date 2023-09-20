import { Suspense } from "react";

import MainCarousel from "components/page/main/MainCarousel";
import Section from "components/page/main/Section";
import MainSection from "components/page/main/MainSection";
import CarouselSkeleton from "components/page/main/skeleton/CarouselSkeleton";
import { fetchRandomCulturalEvent } from "api/culturalEvents";
import UnderscoreTitle from "components/common/UnderscoreTitle";
import ApiErrorBoundary from "components/common/ApiErrorBoundary";

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
        <ApiErrorBoundary>
          <Suspense fallback={<CarouselSkeleton width="386" height="360" />}>
            <MainCarousel randomCulturalEventList={randomCulturalEventList} />
          </Suspense>
        </ApiErrorBoundary>
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
    </main>
  );
}
