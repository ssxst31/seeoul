import { useEffect, useState } from "react";

import { fetchRandomCulturalEvent } from "pages/api/culturalEvents";
import { CulturalEvent } from "type";

export const useRandomCulturalEvent = (): CulturalEvent[] | null => {
  const [randomCulturalEvent, setRandomCulturalEvent] = useState<CulturalEvent[] | null>(null);

  async function loadCulturalEvent() {
    const result = await fetchRandomCulturalEvent();

    setRandomCulturalEvent(result);
  }

  useEffect(() => {
    loadCulturalEvent();
  }, []);

  return randomCulturalEvent;
};
