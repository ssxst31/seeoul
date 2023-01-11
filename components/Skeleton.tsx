import React from "react";
import ContentLoader from "react-content-loader";
import { range } from "utils/array";
import useWindowDimensions from "hook/useWindowDimensions";

interface SkeletonProps {
  row?: number;
  width: string;
  height: string;
}

export default function Skeleton({ row = 3, width, height }: SkeletonProps) {
  const { width2 } = useWindowDimensions();

  return (
    <div className="flex flex-wrap justify-center mx-auto">
      {range(row).map((r, index) => (
        <ContentLoader
          key={index}
          speed={2}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          style={{
            width: width2 > 763 ? width : "100%",
            height: height,
            margin: width2 > 763 ? "0 16px 32px 16px" : "0 0 16px 0",
          }}
        >
          <rect x="0" y="0" rx="0" ry="0" className="w-full" height={height} />
        </ContentLoader>
      ))}
    </div>
  );
}
