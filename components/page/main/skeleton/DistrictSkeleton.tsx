"use client";

import React from "react";
import ContentLoader from "react-content-loader";

import { range } from "utils/array";

interface DistrictSkeletonProps {
  row?: number;
  width: string;
  height: string;
}

export default function DistrictSkeleton({ row = 5, width, height }: DistrictSkeletonProps) {
  return (
    <div className="overflow-x-scroll scrollbar-hide dark:border-dark-200">
      <div className="-2xl:w-[1220px] flex items-center justify-between">
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
    </div>
  );
}
