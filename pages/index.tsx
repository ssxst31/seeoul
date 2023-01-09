import React from "react";
import { useRouter } from "next/router";

import Main from "components/Main";
import DefaultLayout from "layouts/DefaultLayout";
import { filterSort } from "utils/filterSort";
import IndexSeo from "pages/indexSeo";

export default function HomepageLayout() {
  const router = useRouter();
  const { tab } = router.query;

  const sort = (tab ?? "total") as string;

  return (
    <>
      <IndexSeo title={["전체", "total"].includes(sort) ? "홈" : filterSort(sort)} />
      <DefaultLayout>
        <Main />
      </DefaultLayout>
    </>
  );
}
