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
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Header />
        <div style={{ padding: "80px 16px 0 16px", textAlign: "center" }}>
          <h1>{post.title}</h1>
          {post.content.map((el: any) => (
            <p style={{ fontSize: 16, color: "#000000" }}>{el}</p>
          ))}
          <Link href="/blog" as={`/blog`}>
            <a>
              <button style={{ fontSize: 16 }}>목록으로 돌아가기</button>
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
