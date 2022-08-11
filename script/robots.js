import fs from "fs";

const generatedSitemap = `
User-agent: *
Allow: /
Sitemap: https://seeoul.netlify.app/sitemap.xml
`;

fs.writeFileSync("../public/robots.txt", generatedSitemap, "utf8");
