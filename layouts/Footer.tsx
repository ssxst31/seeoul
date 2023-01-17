import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const snsList = [
    { img: "/instagram.svg", link: "https://www.instagram.com/seeou1", alt: "instagramLogo" },
    { img: "/twitter.png", link: "https://twitter.com/seeou11", alt: "twitterLogo" },
    { img: "/facebook.png", link: "https://www.facebook.com/profile.php?id=100083987572734", alt: "facebookLogo" },
  ];

  return (
    <footer className="w-full py-8 text-center bg-gray-50 flex-column dark:bg-dark-100">
      <div className="mx-auto max-w-7xl px-[30px] -md:px-4 -md:mx-0">
        <div className="flex justify-between ">
          <small>ⓒ 내일전시 2022 All Rights Reserved.</small>
          <div className="flex flex-col text-sm">
            <span className="text-right">출처 - 서울특별시, 서울문화포털(culture.seoul.go.kr)</span>
            <Link href="https://icons8.com" passHref>
              <a className="text-right" target="_blank" rel="noopener noreferrer">
                icons8에서 아이콘 제공
              </a>
            </Link>
          </div>
        </div>
        <div className="flex pt-12 space-x-2">
          {snsList.map((sns) => {
            return (
              <Link href={sns.link} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <Image width={20} height={20} src={sns.img} alt={sns.alt} />
                </a>
              </Link>
            );
          })}
          <Link href="/blog" passHref>
            <a>
              <Image width={20} height={20} src="/blog.png" alt="blogLogo" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
