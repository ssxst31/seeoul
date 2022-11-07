import { useEffect, useState } from "react";
import axios from "axios";

export default function useRandomCulturalEvent() {
  const [randomCulturalEvent, setRandomCulturalEvent] = useState(null);

  useEffect(() => {
    axios({
      method: "get", // 통신 방식
      url: `https://all-exhibition-ssxst31.koyeb.app/random`, // 서버
    }).then(function (res) {
      setRandomCulturalEvent(res.data);
    });
  }, []);

  return randomCulturalEvent;
}
