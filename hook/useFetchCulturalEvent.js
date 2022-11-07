import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchCulturalEvent({ page = 1, sort }) {
  const [totalCulturalEvent, setTotalCulturalEvent] = useState(null);
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    axios({
      method: "get", // 통신 방식
      // https://all-exhibition-ssxst31.koyeb.app/
      // http://localhost:5000/
      url: `https://all-exhibition-ssxst31.koyeb.app/get?offset=${
        (page - 1) * 20
      }&limit=20&option=${sort === "전체" ? "all" : sort}`,
    }).then(function (res) {
      setTotalCulturalEvent(res.data.data);
      setTotalCount(res.data.totalCount);
    });
  }, [page, sort]);

  return { totalCulturalEvent, totalCount };
}
