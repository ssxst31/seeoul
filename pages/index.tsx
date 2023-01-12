import React from "react";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";

import Main from "components/Main";
import DefaultLayout from "layouts/DefaultLayout";
import { filterSort } from "utils/filterSort";
import IndexSeo from "pages/indexSeo";
import { fetchCulturalEvent } from "pages/api";

export async function getServerSideProps(context: any) {
  let { tab, page } = context.query;

  page = Number(page ?? 1) as number;

  const sort = filterSort((tab as string) ?? "total");
  const params = { page, sort };
  const data = await fetchCulturalEvent(params);
  const search = undefined;
  const apiKey = `/get?offset=${(page - 1) * 20}&limit=20&option=${sort === "전체" ? "all" : sort}&search=${search}`;

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

  return (
    <>
      <IndexSeo title={["전체", "total"].includes(sort) ? "홈" : filterSort(sort)} />
      <DefaultLayout>
        <SWRConfig value={{ fallback }}>
          <Main />
        </SWRConfig>
      </DefaultLayout>
    </>
  );
}
