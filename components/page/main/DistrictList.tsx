import React from "react";
import { DISTRICTS } from "constants/districts";

interface DistrictListProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  location: string;
}

export default function DistrictList({ setLocation, location }: DistrictListProps) {
  return (
    <div className="overflow-x-scroll scrollbar-hide dark:border-dark-200 ">
      <ul className="flex mx-auto h-9 items-center justify-between w-[1565px]">
        {DISTRICTS.map((district) => (
          <li key={district}>
            <span
              className={`${
                location === district
                  ? "bg-[#645CBB] border border-solid border-[#645CBB] dark:text-black text-white"
                  : "border border-solid border-[#645CBB] text-black dark:text-white"
              } px-3 py-2 text-sm  cursor-pointer rounded-lg`}
              onClick={() => {
                setLocation(district);
              }}
            >
              {district}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
