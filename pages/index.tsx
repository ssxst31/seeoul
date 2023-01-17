import React from "react";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";

import Main from "components/Main";
import DefaultLayout from "layouts/DefaultLayout";
import { filterSort } from "utils/filterSort";
import IndexSeo from "pages/indexSeo";
import { fetchCulturalEvent } from "pages/api";
import { useTheme } from "next-themes";

export async function getServerSideProps(context: any) {
  let { tab, page } = context.query;

  page = Number(page ?? 1) as number;

  const sort = filterSort((tab as string) ?? "total");
  const search = undefined;
  const params = { page, sort, search };
  const data = await fetchCulturalEvent(params);
  const apiKey = `/culturalEvents?offset=${(page - 1) * 20}&limit=20&option=${
    sort === "전체" ? "all" : sort
  }&search=${search}`;

  return {
    props: {
      fallback: {
        [apiKey]: data,
      },
    },
  };
}

export default function HomepageLayout({ fallback }: any) {
  const router = useRouter();
  const { tab } = router.query;
  const sort = (tab ?? "total") as string;
  const { theme, setTheme } = useTheme();
  return (
    <>
      <IndexSeo title={["전체", "total"].includes(sort) ? "홈" : filterSort(sort)} />
      <DefaultLayout>
        <SWRConfig value={{ fallback }}>
          <Main />
        </SWRConfig>
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="fixed w-14 h-14 bg-white rounded-[50%] bottom-4 right-3 dark:bg-dark-200 shadow-lg"
        >
          {theme === "light" ? <div className="text-2xl">🌝</div> : <div className="text-2xl">🌚 </div>}
        </button>
      </DefaultLayout>
    </>
  );
}
