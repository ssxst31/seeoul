import React from "react";

import Header from "layouts/Header";
import Footer from "layouts/Footer";
import Link from "next/link";
import fsPromises from "fs/promises";
import path from "path";
import blog from "pages/api/blog.json";

export async function getStaticPaths() {
  const paths = blog.posts.map((post, index) => ({
    params: { id: (index + 1).toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "pages/api/blog.json");
  const jsonData = (await fsPromises.readFile(filePath)) as any;
  const objectData = JSON.parse(jsonData);

  const post = objectData.posts[params.id - 1];
  return {
    props: { post },
  };
}

const Blog = ({ post }) => {
  return (
    <>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Header />
        <div style={{ padding: "80px 16px 0 16px", textAlign: "center" }}>
          <h1>{post.title}</h1>
          {post.content.map((el) => (
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
