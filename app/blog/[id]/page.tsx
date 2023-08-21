import Link from "next/link";
import { notFound } from "next/navigation";

import { getHostName } from "utils/getHostName";
import { Blog } from "type";

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
  ];
}

interface Props {
  params: { id: string };
}

export default async function Page({ params }: Props) {
  const { id } = params;

  if (Number(id) > 10) {
    notFound();
  }

  const res = await fetch(`${getHostName}/api/blogs/${id}`, { cache: "force-cache" });

  const post = (await res.json()) as Blog;

  return (
    <div className="px-[30px] w-full -md:pt-36 -md:px-4 pt-20 text-center">
      <h2 className="text-4xl ">{post.title}</h2>
      <div className="w-full h-10" />
      <div className="text-left">
        {post.content.map((content) => (
          <p className="mb-4 text-base text-black dark:text-white">{content}</p>
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
