// 패키지 설치
import fs from "fs";
import { globby } from "globby";
import prettier from "prettier";
// 오늘 날짜 가져오기 & 도메인 설정
const getDate = new Date().toISOString();
const CODEIT_DOMAIN = "https://seeoul.netlify.app";

//
const formatted = (sitemap) => prettier.format(sitemap, { parser: "html" });

(async () => {
  // 포함할 페이지와 제외할 페이지 등록
  const pages = await globby([
    // include
    "../pages/**/*.js",
    "../pages/*.js",
    // exclude
    "!../pages/_*.js",
  ]);

  const pagesSitemap = `
    ${pages
      .map((page) => {
        const path = page
          .replace("../pages/", "")
          .replace(".js", "")
          .replace(/\/index/g, "");
        const routePath = path === "index" ? "" : path;
        return `
          <url>
            <loc>${CODEIT_DOMAIN}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
      })
      .join("")}
  `;

  const generatedSitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
>
  ${pagesSitemap}
</urlset>
`;

  const formattedSitemap = [formatted(generatedSitemap)];

  fs.writeFileSync(
    "../public/sitemap-common.xml",
    formattedSitemap.toString(),
    "utf8",
  );
})();
