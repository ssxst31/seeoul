import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import AASkeleton from "./skeleton/DistrictSkeleton";

import { useFetchCulturalEvent } from "hooks/useFetchCulturalEvent";

export default function District({ location }: any) {
  const router = useRouter();
  const { query } = router;
  const page = query.page ?? "1";

  const search = undefined;
  const sort = location;
  const { totalCulturalEvent } = useFetchCulturalEvent({
    page,
    sort,
    search,
  });

  if (!totalCulturalEvent) {
    return <AASkeleton width="192" height="288" />;
  }

  return (
    <div className="overflow-x-scroll scrollbar-hide">
      <div className="-2xl:w-[1220px] flex items-center justify-between">
        {totalCulturalEvent?.slice(0, 5)?.map((el: any, index: number) => {
          return (
            <div className="relative w-48 overflow-hidden h-72">
              <Link href={`/detail/${el.id}`} passHref shallow={true}>
                <a>
                  <Image
                    src={el.mainImg}
                    alt={el.title}
                    layout="fill"
                    className="duration-100 ease-linear hover:scale-110"
                    priority={true}
                  />
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
