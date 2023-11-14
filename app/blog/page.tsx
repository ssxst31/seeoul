import Link from "next/link";

import { getHostName } from "utils/getHostName";
import { Blog } from "type";

export default async function Page() {
  const res = await fetch(`${getHostName}/api/blogs`, { cache: "force-cache" });

  const post = (await res.json()) as Blog[];

  return (
    <div className="px-[30px] w-full -md:pt-36 -md:px-4 pt-20 text-center">
      <ul className="cursor-pointer">
        {post.map((el) => (
          <Link href="/blog/[id]" as={`/blog/${el.id}`} key={el.id}>
            <li className="py-2 text-base text-black border-b border-gray-200 border-solid dark:text-white dark:border-dark-200">
              {el.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
