import { fetchInstagramFeed } from "app/api/instagram";

import Main from "app/popular/_component/Main";

export default async function Page() {
  const data = await fetchInstagramFeed();

  console.log(data);

  return (
    <div>
      <Main data={data} />
    </div>
  );
}
