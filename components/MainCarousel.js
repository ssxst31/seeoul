import React from "react";
import { Carousel } from "antd";
import { useRouter } from "next/router";
import Image from "next/image";
import { isMobile } from "react-device-detect";

import useRandomCulturalEvent from "hook/useRandomCulturalEvent";
import Skeleton from "components/Skeleton";

export default function Main() {
  const router = useRouter();

  const random = useRandomCulturalEvent();

  if (!random) {
    return <Skeleton />;
  }

  const handleClick = (id) => {
    router.push(`/detail/${id}`);
  };

  return (
    <Carousel autoplay slidesToShow={isMobile ? 1 : 3}>
      {random?.map((c) => (
        <div key={c.id}>
          <Image
            src={isMobile ? c.mainImg.slice(0, -1) : c.mainImg}
            onClick={() => {
              handleClick(c.id);
            }}
            height={300}
            width={330}
            alt={c.title}
          />
        </div>
      ))}
    </Carousel>
  );
}
