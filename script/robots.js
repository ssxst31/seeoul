import fs from "fs";

const generatedSitemap = `
User-agent: *
Allow: /
Sitemap: https://seeoul.vercel.app/sitemap.xml
`;

fs.writeFileSync("../public/robots.txt", generatedSitemap, "utf8");
