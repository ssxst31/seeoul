import MainArticle from "app/_component/MainArticle";
import Pagination from "app/_component/Pagination";
import InputBox from "app/_component/molecules/InputBox";
import { fetchCulturalEvents } from "app/api/culturalEvents";

export default async function MainSection({ page, tab, sort, search }: any) {
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
      <MainArticle totalCulturalEvent={data.data} />
      <div className="w-full h-8" />
      <div className="text-center">
        <Pagination totalPages={Math.ceil(data.totalCount / 20)} page={page} tab={tab} />
      </div>
    </>
  );
}
