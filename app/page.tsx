import { Suspense } from "react";

import MainCarousel from "app/_component/MainCarousel";
import Section from "app/_component/Section";
import MainSection from "app/_component/MainSection";
import BlackButton from "app/_component/BlackButton";
import { filterSort } from "utils/filterSort";
import { fetchCulturalEvents } from "app/api/culturalEvents";

export const dynamic = "force-static";

export default async function Page({ searchParams }: any) {
  const page = searchParams.page ?? "1";
  const tab = (searchParams.tab ?? "total") as string;
  const sort = filterSort((tab as string) ?? "total");
  const search = searchParams.search ?? undefined;
  const data = await fetchCulturalEvents({ page, tab, sort, search });

  return (
    <main className="pt-[71px] px-[30px] w-full -md:px-4 -md:pt-[104px]">
      <section>
        <h2 className="pb-1 text-2xl font-bold text-black dark:text-white linear2">전시회를 생각 중이라면 👀</h2>
        <div className="w-full h-8 -md:h-4" />
        <MainCarousel />
      </section>
      <div className="w-full h-10" />
      <section>
        <h2 className="pb-1 text-2xl font-bold text-black dark:text-white linear2 h-[29px] self-start">
          어디서 구경할까요? 🤔
        </h2>
        <div className="w-full h-7 -md:h-4" />
        <Section />
        <div className="w-full h-8 -md:h-4" />
        <Suspense>
          {/* @ts-expect-error */}
          <MainSection page={page} tab={tab} data={data} />
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
