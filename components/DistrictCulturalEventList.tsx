import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { useFetchCulturalEvent } from "hooks/useFetchCulturalEvent";
import DistrictSkeleton from "components/skeleton/DistrictSkeleton";

interface DistrictCulturalEventListProps {
  location: string;
}

export default function DistrictCulturalEventList({ location }: DistrictCulturalEventListProps) {
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
    return <DistrictSkeleton width="192" height="288" />;
  }

  return (
    <div className="overflow-x-scroll scrollbar-hide">
      <div className="-2xl:w-[1220px] flex items-center justify-between">
        {totalCulturalEvent?.slice(0, 5).map((culturalEvent) => (
          <div className="relative w-48 overflow-hidden h-72" key={culturalEvent.id}>
            <Link href={`/detail/${culturalEvent.id}`} passHref shallow={true}>
              <a>
                <Image
                  src={culturalEvent.mainImg}
                  alt={culturalEvent.title}
                  layout="fill"
                  className="duration-100 ease-linear hover:scale-110"
                  priority={true}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
