import { useEffect, useState } from "react";

import { fetchRandomCulturalEvent } from "pages/api/index";

export default function useRandomCulturalEvent() {
  const [randomCulturalEvent, setRandomCulturalEvent] = useState(null);

  async function loadCulturalEvent() {
    const result = await fetchRandomCulturalEvent();

    setRandomCulturalEvent(result);
  }

  useEffect(() => {
    loadCulturalEvent();
  }, []);

  return randomCulturalEvent;
}
