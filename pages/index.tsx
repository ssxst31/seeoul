import React, { useEffect, useState, Suspense } from "react";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import { useTheme } from "next-themes";

import Main from "components/Main";
import DefaultLayout from "layouts/DefaultLayout";
import { filterSort } from "utils/filterSort";
import IndexSeo from "pages/indexSeo";
import { fetchCulturalEvent } from "pages/api/culturalEvents";
import type { GetServerSideProps, NextPage } from "next";
import withGetServerSideProps from "components/withServerSideProps";

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(async (context) => {
  let { tab, page } = context.query;

  page = page ?? "1";

  const sort = filterSort((tab as string) ?? "total");
  const search = undefined;
  const params = { page, sort, search };
  const data = await fetchCulturalEvent(params);
  const apiKey = `/culturalEvents?offset=${(Number(page) - 1) * 20}&limit=20&option=${
    sort === "전체" ? "all" : sort
  }&search=${search}`;

  return {
    props: {
      fallback: {
        [apiKey]: data,
      },
    },
  };
});

interface HomeProps {
  fallback: any;
}

const Home: NextPage<HomeProps> = ({ fallback }) => {
  const router = useRouter();
  const { tab } = router.query;
  const sort = (tab ?? "total") as string;
  const { theme, setTheme } = useTheme();
  const [btnText, setBtnText] = useState<any>("");

  useEffect(() => {
    if (theme === "light") {
      return setBtnText("🌝");
    }
    setBtnText("🌚");
  }, [theme]);

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
          className="fixed w-14 h-14 bg-white rounded-[50%] bottom-6 right-6 dark:bg-dark-200 shadow-lg hover:animate-jelly"
        >
          <div className="text-2xl">{btnText}</div>
        </button>
      </DefaultLayout>
    </>
  );
};

export default Home;
