"use client";

import KaKaoMap from "app/cultural-event-map/_component/KaKaoMap";
import { CulturalEvent } from "type";

interface ContainerProps {
  data: CulturalEvent[];
}

export default function Container({ data }: ContainerProps) {
  return (
    <>
      <div className="w-full h-8 -md:h-4" />
      <span className="text-2xl font-bold">서울 문화행사를 한눈에 살펴보세요!</span>
      <div className="w-full h-8 -md:h-4" />
      <KaKaoMap data={data} />
    </>
  );
}
