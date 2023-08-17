import { Suspense } from "react";

import MainArticle from "components/MainArticle";
import Pagination from "components/Pagination";
import InputBox from "components/molecules/InputBox";
import { filterSort } from "utils/filterSort";
import { fetchCulturalEvents } from "api/culturalEvents";
import GridSkeleton from "components/skeleton/GridSkeleton";

export default async function MainSection({ searchParams }: any) {
  const page = searchParams.page ?? "1";
  const tab = (searchParams.tab ?? "total") as string;
  const sort = filterSort((tab as string) ?? "total");
  const search = searchParams.search ?? undefined;
  const data = await fetchCulturalEvents({ page, tab, sort, search });

  return (
    <>
      <div className="flex justify-between -md:flex-col">
        <h2 className="pb-[34px] text-2xl font-bold text-black dark:text-white linear2 h-[29px] self-start">
          여기서 골라보세요! 🫧
        </h2>
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
