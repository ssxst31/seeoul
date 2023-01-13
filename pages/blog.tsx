import React from "react";
import Link from "next/link";

import Header from "layouts/Header";
import Footer from "layouts/Footer";
import blog from "pages/api/blog.json";

export default function Blog() {
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <Header />
        <div className="px-4 pt-20 text-center">
          <ul className="cursor-pointer">
            {blog.posts.map((el) => (
              <Link href="/blog/[id]" as={`/blog/${el.id}`} passHref key={el.id}>
                <a>
                  <li className="py-2 text-base text-black border-b border-gray-200 border-solid">{el.title}</li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
