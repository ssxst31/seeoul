import React from "react";
import ContentLoader from "react-content-loader";

import { range } from "utils/array";

interface CarouselSkeletonProps {
  row?: number;
  width: string;
  height: string;
}

export default function CarouselSkeleton({ row = 3, width, height }: CarouselSkeletonProps) {
  return (
    <div className="flex justify-between mx-auto">
      {range(row).map((r, index) => (
        <ContentLoader
          key={index}
          speed={2}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          style={{
            width: width,
            height: height,
          }}
          title=""
        >
          <rect x="0" y="0" rx="0" ry="0" height={height} className="w-full" />
        </ContentLoader>
      ))}
    </div>
  );
}
