import Image from "next/image";
import Link from "next/link";

import { fetchDetailCulturalEvent } from "api/culturalEvents";
import KaKaoMap from "components/kakao/KaKaoMap";
import Discussion from "components/Discussion";
import blog from "api/blog.json";

export default async function Page({ params }: any) {
  const { blogSlug } = params;

  const post = blog.posts.find((el: any) => el.id === Number(blogSlug)) as any;

  return (
    <div className="px-[30px] w-full -md:pt-36 -md:px-4 pt-20 text-center">
      <h2 className="text-4xl ">{post.title}</h2>
      <div className="w-full h-10" />
      <div className="text-left">
        {post.content?.map((el: any) => (
          <p className="mb-4 text-base text-black dark:text-white">{el}</p>
        ))}
      </div>
      <div className="w-full h-10" />
      <Link href="/blog" as={`/blog`}>
        <button className="w-48 h-12 text-xl text-white bg-indigo-600 rounded-xl">목록으로 이동</button>
      </Link>
      <div className="w-full h-10" />
    </div>
  );
}
