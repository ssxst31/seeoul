import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";

import useRandomCulturalEvent from "hook/useRandomCulturalEvent";
import Skeleton from "components/Skeleton";

export default function Main() {
  const random = useRandomCulturalEvent();

  if (!random) {
    return <Skeleton />;
  }

  return (
    <Carousel autoplay slidesToShow={isMobile ? 1 : 3}>
      {random.map((c) => (
        <div key={c.id}>
          <Link href={`/detail/${c.id}`} passHref>
            <a>
              <Image
                src={isMobile ? c.mainImg.slice(0, -1) : c.mainImg}
                height={300}
                width={330}
                alt={c.title}
              />
            </a>
          </Link>
        </div>
      ))}
    </Carousel>
  );
}
