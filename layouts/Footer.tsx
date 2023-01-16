import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-8 text-center bg-gray-50 flex-column">
      <div className="mx-auto max-w-7xl px-[30px] -md:px-4 -md:mx-0">
        <div className="flex justify-between ">
          <small>ⓒ 내일전시 2022 All Rights Reserved.</small>
          <div className="flex flex-col text-sm">
            <span>출처 - 서울특별시, 서울문화포털(culture.seoul.go.kr)</span>
            <Link href="https://icons8.com" passHref>
              <a className="text-right" target="_blank" rel="noopener noreferrer">
                icons8에서 아이콘 제공
              </a>
            </Link>
          </div>
        </div>
        <div className="flex pt-12 space-x-2">
          <Link href="https://www.instagram.com/seeou1" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <Image width={20} height={20} src="/instagram.svg" />
            </a>
          </Link>
          <Link href="https://twitter.com/seeou11" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <Image width={20} height={20} src="/twitter.png" />
            </a>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100083987572734" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <Image width={20} height={20} src="/facebook.png" />
            </a>
          </Link>
          <Link href="/blog" passHref>
            <a>
              <Image width={20} height={20} src="/blog.png" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
