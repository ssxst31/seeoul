import { useEffect, useState } from "react";

import { fetchRandomCulturalEvent } from "pages/api/index";
import { CulturalEvent } from "type";

export default function useRandomCulturalEvent(): CulturalEvent[] {
  const [randomCulturalEvent, setRandomCulturalEvent] =
    useState<CulturalEvent[]>(null);

  async function loadCulturalEvent() {
    const result = await fetchRandomCulturalEvent();

    setRandomCulturalEvent(result);
  }

  useEffect(() => {
    loadCulturalEvent();
  }, []);

  return randomCulturalEvent;
}
