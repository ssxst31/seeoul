import React from "react";
import Link from "next/link";
import fsPromises from "fs/promises";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";

import path from "path";
import Header from "layouts/Header";
import Footer from "layouts/Footer";
import blog from "pages/api/blog.json";
import BlogSEO from "pages/blog/BlogSEO";

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blog.posts.map((post, index) => ({
    params: { id: (index + 1).toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const filePath = path.join(process.cwd(), "pages/api/blog.json");
  const jsonData = (await fsPromises.readFile(filePath)) as any;
  const objectData = JSON.parse(jsonData);

  const post = objectData.posts[Number(id) - 1];
  return {
    props: { post },
  };
};

const Blog = ({ post }: any) => {
  return (
    <>
      <BlogSEO title={post.title} />
      <div className="mx-auto max-w-7xl">
        <Header />
        <div className="px-[30px] w-full -md:pt-36 -md:px-4 pt-20 text-center">
          <h2 className="text-4xl ">{post.title}</h2>
          <div className="w-full h-10" />
          <div className="text-left">
            {post.content.map((el: any) => (
              <p className="mb-4 text-base text-black dark:text-white">{el}</p>
            ))}
          </div>
          <div className="w-full h-10" />
          <Link href="/blog" as={`/blog`}>
            <a>
              <button className="w-48 h-12 text-xl text-white bg-indigo-600 rounded-xl">목록으로 이동</button>
            </a>
          </Link>
          <div className="w-full h-10" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
