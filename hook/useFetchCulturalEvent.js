import { useEffect, useState } from "react";

import { fetchCulturalEvent } from "pages/api/index";

export default function useFetchCulturalEvent({ page = 1, sort }) {
  const [totalCulturalEvent, setTotalCulturalEvent] = useState(null);
  const [totalCount, setTotalCount] = useState(null);

  async function loadCulturalEvent() {
    const result = await fetchCulturalEvent({ page, sort });

    setTotalCount(result.totalCount);
    setTotalCulturalEvent(result.data);
  }

  useEffect(() => {
    loadCulturalEvent();
  }, [page, sort]);

  return { totalCulturalEvent, totalCount };
}
