import React from "react";

interface DistrictListProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  location: string;
}

const districts = [
  "강동구",
  "관악구",
  "광진구",
  "구로구",
  "금천구",
  "노원구",
  "도봉구",
  "동작구",
  "동대문구",
  "마포구",
  "서대문구",
  "서초구",
  "성동구",
  "송파구",
  "양천구",
  "영등포구",
  "용산구",
  "은평구",
  "종로구",
  "중구",
  "중랑구",
];

export default function DistrictList({ setLocation, location }: DistrictListProps) {
  return (
    <div className="overflow-x-scroll scrollbar-hide dark:border-dark-200 ">
      <ul className="flex mx-auto h-9 items-center justify-between w-[1450px]">
        {districts.map((district, index) => (
          <li key={index}>
            <span
              className={`${
                location === district
                  ? "bg-[#645CBB] border border-solid border-[#645CBB] dark:text-black text-white"
                  : "border border-solid border-[#645CBB] text-black dark:text-white"
              } px-3 py-2 text-sm  cursor-pointer rounded-xl`}
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
