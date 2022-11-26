import React from "react";
import ContentLoader from "react-content-loader";
import { range } from "utils/array";

interface SkeletonProps {
  row?: number;
}

export default function Skeleton({ row = 3 }: SkeletonProps) {
  return (
    <div
      style={{
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {range(row).map((r, index) => (
        <ContentLoader
          key={index}
          speed={2}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          style={{
            width: "360",
            height: "360",
          }}
        >
          <rect x="0" y="0" rx="0" ry="0" width="100%" height="360" />
        </ContentLoader>
      ))}
    </div>
  );
}
