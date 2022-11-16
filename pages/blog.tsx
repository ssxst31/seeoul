import React from "react";
import Link from "next/link";

import Header from "layouts/Header";
import Footer from "layouts/Footer";
import blog from "pages/api/blog.json";

export default function Blog() {
  return (
    <div>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Header />
        <div style={{ padding: "80px 16px 0 16px", textAlign: "center" }}>
          <ul style={{ cursor: "pointer" }}>
            {blog.posts.map((el) => (
              <Link href="/blog/[id]" as={`/blog/${el.id}`}>
                <a>
                  <li
                    key={el.id}
                    style={{
                      borderBottom: "1px solid grey",
                      fontSize: 16,
                      padding: "8px 0",
                      color: "#000000",
                    }}
                  >
                    {el.title}
                  </li>
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