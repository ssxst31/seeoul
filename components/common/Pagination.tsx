"use client";

import { useEffect } from "react";
import Link from "next/link";

const makePaginationHref = (totalCount: number, page: number, tab: string) => {
  const pageNumbersArray = [];
  let startIndex, endIndex;

  if (totalCount <= 5) {
    startIndex = 1;
    endIndex = totalCount;
  } else {
    if (page <= 3) {
      startIndex = 1;
      endIndex = 5;
    } else if (page + 2 >= totalCount) {
      startIndex = totalCount - 4;
      endIndex = totalCount;
    } else {
      startIndex = page - 2;
      endIndex = page + 2;
    }
  }

  if (startIndex > 1) {
    pageNumbersArray.push(
      <Link href={`?tab=${tab}&page=${page - 1}`}>
        <div className="inline-flex items-center justify-center w-10 h-10 text-gray-500 border border-gray-200 rounded-md -md:w-8 -md:h-8 hover:border-indigo-600 ">
          &lt;
        </div>
      </Link>,
    );
  }

  for (let i = startIndex; i <= endIndex; i++) {
    pageNumbersArray.push(
      <Link href={`?tab=${tab}&page=${i}`}>
        <div
          className={`-md:w-8 -md:h-8 rounded-md inline-flex justify-center items-center border w-10 h-10 hover:border-indigo-600 
            ${page === i ? "border-indigo-600 text-indigo-600" : "border-gray-200 text-gray-500 "}`}
        >
          {i}
        </div>
      </Link>,
    );
  }

  if (endIndex < totalCount) {
    pageNumbersArray.push(
      <Link href={`?tab=${tab}&page=${page + 1}`}>
        <div className="inline-flex items-center justify-center w-10 h-10 text-gray-500 border border-gray-200 rounded-md -md:w-8 -md:h-8 hover:border-indigo-600">
          &gt;
        </div>
      </Link>,
    );
  }

  return pageNumbersArray;
};

interface PaginationProps {
  totalPages: number;
  page: string | string[] | undefined;
  tab: string;
}

function Pagination({ totalPages, page, tab }: PaginationProps) {
  useEffect(() => {
    const handlePageChange = () => {
      window.scrollTo(0, 0);
    };
    handlePageChange();
  }, [page]);

  return <div className="flex justify-center space-x-2">{makePaginationHref(totalPages, Number(page), tab)}</div>;
}

export default Pagination;
