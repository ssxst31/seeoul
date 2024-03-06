import { Suspense } from "react";

import MainArticle from "components/page/main/MainArticle";
import Pagination from "components/common/Pagination";
import InputBox from "components/molecules/InputBox";
import UnderscoreTitle from "components/common/UnderscoreTitle";
import GridSkeleton from "components/page/main/skeleton/GridSkeleton";

interface MainSectionProps {
  data2: any;
  tab: string;
  page: string;
}

export default async function MainSection({ data2, tab, page }: MainSectionProps) {
  const data = await data2.then((res: any) => res.json());

  return (
    <>
      <div className="flex justify-between -md:flex-col items-center">
        <div className="h-6 w-full">
          <UnderscoreTitle title="여기서 골라보세요! 🫧" />
        </div>
        <div className="hidden w-full -md:h-4 -md:block" />
        <div className="flex items-center -md:justify-between w-full justify-end">
          <div className="gradient">
            총&nbsp;
            <span className="font-bold ">{data.totalCount}</span>
            &nbsp;건
          </div>
          <div className="w-full max-w-[250px] ml-4 overflow-hidden border border-indigo-600 rounded-lg -md:w-auto">
            <InputBox />
          </div>
        </div>
      </div>
      <div className="w-full h-4" />
      {/* @ts-expect-error Async Server Component */}
      <MainArticle totalCulturalEvent={data.data} />
      <div className="w-full h-8" />
      <div className="text-center">
        <Pagination totalPages={Math.ceil(data.totalCount / 20)} page={page} tab={tab} />
      </div>
    </>
  );
}
