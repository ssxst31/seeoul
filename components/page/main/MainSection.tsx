import { Suspense } from "react";

import MainArticle from "components/page/main/MainArticle";
import Pagination from "components/common/Pagination";
import InputBox from "components/molecules/InputBox";
import { filterSort } from "utils/filterSort";
import { fetchCulturalEvents } from "api/culturalEvents";
import GridSkeleton from "components/page/main/skeleton/GridSkeleton";
import UnderscoreTitle from "components/common/UnderscoreTitle";

interface MainSectionProps {
  searchParams: {
    page: string;
    tab: string;
    search: undefined | string;
  };
}

export default async function MainSection({ searchParams }: MainSectionProps) {
  const page = searchParams.page ?? "1";
  const tab = searchParams.tab ?? "total";
  const sort = filterSort((tab as string) ?? "total");
  const search = searchParams.search ?? undefined;
  const data = await fetchCulturalEvents({ page, sort, search });

  return (
    <>
      <div className="flex justify-between -md:flex-col">
        <UnderscoreTitle title="여기서 골라보세요! 🫧" />
        <div className="hidden w-full -md:h-4 -md:block" />
        <div className="flex items-center -md:justify-between">
          <div className="gradient">
            총&nbsp;
            <span className="font-bold ">{data.totalCount}</span>
            &nbsp;건
          </div>
          <div className="w-full ml-4 overflow-hidden border border-indigo-600 rounded-lg -md:w-auto">
            <InputBox />
          </div>
        </div>
      </div>
      <div className="w-full h-8 -md:h-4" />
      <Suspense fallback={<GridSkeleton height="418" row={16} />}>
        {/* @ts-expect-error Async Server Component */}
        <MainArticle totalCulturalEvent={data.data} />
      </Suspense>
      <div className="w-full h-8" />
      <div className="text-center">
        <Pagination totalPages={Math.ceil(data.totalCount / 20)} page={page} tab={tab} />
      </div>
    </>
  );
}
