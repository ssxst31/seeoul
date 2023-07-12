import React from "react";
import ContentLoader from "react-content-loader";

import { range } from "utils/array";
import { useWindowDimensions } from "app/hooks/useWindowDimensions";

interface SkeletonProps {
  row?: number;
  height: string;
}

export default function GridSkeleton({ row = 3, height }: SkeletonProps) {
  const { width } = useWindowDimensions();

  const height2 = width > 763 ? height : "486px";

  return (
    <div className="grid grid-cols-1 gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 -md:gap-y-4 -md:gap-x-4">
      {range(row).map((r, index) => (
        <ContentLoader
          key={index}
          speed={2}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          style={{
            width: "100%",
            height: height2,
          }}
        >
          <rect x="0" y="0" rx="0" ry="0" className="w-full" height={height2} />
        </ContentLoader>
      ))}
    </div>
  );
}
