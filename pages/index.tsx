import React from "react";
import { OrganizationJsonLd } from "next-seo";

import Main from "components/Main";
import DefaultLayout from "layouts/DefaultLayout";

function MainSEO() {
  const JSON_LD = {
    type: "Organization",
    name: "홈 - 내일전시",
    url: "https://seeoul.netlify.app",
    sameAs: [
      "https://www.instagram.com/seeou1",
      "https://twitter.com/seeou11",
      "https://www.facebook.com/profile.php?id=100083987572734",
    ],
  };

  return <OrganizationJsonLd {...JSON_LD} />;
}

export default function HomepageLayout() {
  return (
    <>
      <MainSEO />
      <DefaultLayout>
        <Main />
      </DefaultLayout>
    </>
  );
}
