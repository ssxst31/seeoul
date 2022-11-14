import { useEffect, useState } from "react";

import { fetchInstagramFeed } from "pages/api/index";

export default function useFetchInstagramFeed() {
  const [instagramFeed, setInstagramFeed] = useState(null);

  async function loadInstagramFeed() {
    const result = await fetchInstagramFeed();

    setInstagramFeed(result);
  }

  useEffect(() => {
    loadInstagramFeed();
  }, []);

  const dsa = instagramFeed?.data ?? null;

  return dsa;
}
