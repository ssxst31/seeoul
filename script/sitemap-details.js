import fs from "fs";

import prettier from "prettier";
const getDate = new Date().toISOString();

const YOUR_AWESOME_DOMAIN = "https://seeoul.netlify.app";

const formatted = (sitemap) => prettier.format(sitemap, { parser: "html" });

(async () => {
  const jsonFile = fs.readFileSync("./data.json", "utf8");
  const jsonData = JSON.parse(jsonFile);
  const fruits = jsonData.DATA;

  const postList = [];
  fruits.forEach((post) => postList.push(post.title));

  const postListSitemap = `
    ${postList
      .map((title) => {
        return `
          <url>
            <loc>${`${YOUR_AWESOME_DOMAIN}/detail/${encodeURI(title)}`}</loc>
            <lastmod>${getDate}</lastmod>
          </url>`;
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
      ${postListSitemap}
    </urlset>
  `;

  const formattedSitemap = [formatted(generatedSitemap)];

  fs.writeFileSync("../public/sitemap-details.xml", formattedSitemap.toString(), "utf8");
})();
