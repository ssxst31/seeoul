import Link from "next/link";

import blog from "api/blog.json";

export default async function Page() {
  return (
    <div className="px-[30px] w-full -md:pt-36 -md:px-4 pt-20 text-center">
      <ul className="cursor-pointer">
        {blog.posts.map((el) => (
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
