import { Suspense } from "react";

import AA from "components/page/main/AA";
import Section from "components/page/main/Section";
import MainSection from "components/page/main/MainSection";
import CarouselSkeleton from "components/page/main/skeleton/CarouselSkeleton";
import UnderscoreTitle from "components/common/UnderscoreTitle";
import { filterSort } from "utils/filterSort";
import GridSkeleton from "components/page/main/skeleton/GridSkeleton";
import { getBaseUrl } from "utils/getBaseUrl";

interface Props {
  searchParams: {
    page: string;
    tab: string;
    search: undefined | string;
  };
}

export default async function Page({ searchParams }: Props) {
  const page = searchParams.page ?? "1";
  const tab = searchParams.tab ?? "total";
  const sort = filterSort((tab as string) ?? "total");
  const search = searchParams.search ?? undefined;
  const limit = 20;

  return (
    <main className="pt-[71px] px-[30px] w-full -md:px-4 -md:pt-[104px]">
      <section>
        <UnderscoreTitle title="전시회를 생각 중이라면 👀" />
        <div className="w-full h-4" />
        <Suspense fallback={<CarouselSkeleton width="386" height="360" />}>
          {/* @ts-expect-error */}
          <AA data={fetch(`${getBaseUrl}/culturalEvents/random`, { cache: "no-store" })} />
        </Suspense>
      </section>
      <div className="w-full h-10" />
      <section>
        <UnderscoreTitle title="어디서 구경할까요? 🤔" />
        <div className="w-full h-4" />
        <Section />
        <div className="w-full h-4" />
        <Suspense fallback={<GridSkeleton height="418" row={16} />}>
          {/* @ts-expect-error */}
          <MainSection
            page={page}
            tab={tab}
            data2={fetch(
              `${getBaseUrl}/culturalEvents?offset=${(Number(page) - 1) * 20}&limit=${limit}&option=${
                sort === "전체" ? "all" : sort
              }&search=${search}`,
              { next: { revalidate: 60 * 60 * 24 } },
            )}
          />
        </Suspense>
      </section>
    </main>
  );
}
