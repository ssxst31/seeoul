import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import blogData from "pages/api/blog.json";
import Header from "components/Header";
import Footer from "components/Footer";
import Link from "next/link";

const Blog = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  console.log(blogData);
  useEffect(() => {
    setData(blogData[id - 1]);
  }, [id]);

  return (
    <>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Header />
        <div style={{ padding: "80px 16px 0 16px", textAlign: "center" }}>
          <h1>{data?.title}</h1>
          {data?.content.map((el) => (
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
