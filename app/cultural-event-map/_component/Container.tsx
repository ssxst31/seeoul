"use client";

import KaKaoMap from "app/cultural-event-map/_component/KaKaoMap";

export default function Container({ data }: any) {
  return (
    <div>
      <div className="w-full h-8 -md:h-4" />
      <span className="text-2xl font-bold">문화 행사 지도</span>
      <div className="w-full h-8 -md:h-4" />
      <KaKaoMap data={data.data} />
    </div>
  );
}
