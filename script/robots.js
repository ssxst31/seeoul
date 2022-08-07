import fs from "fs";

const generatedSitemap = `
User-agent: *
Allow: /
`;

fs.writeFileSync("../public/robots.txt", generatedSitemap, "utf8");
